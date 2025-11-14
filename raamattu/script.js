const elements = {
  versionSelector: document.getElementById("bible-version"),
  searchInput: document.getElementById("search-input"),
  searchButton: document.getElementById("search-button"),
  bookListActual: document.querySelector(".book-list"),
  currentPassageTitle: document.getElementById("current-passage-title"),
  verseDisplay: document.getElementById("verse-display"),
  prevChapterButton: document.getElementById("prev-chapter"),
  nextChapterButton: document.getElementById("next-chapter"),
  searchResultsContainer: document.querySelector(".search-results"),
  resultsList: document.getElementById("results-list"),
  backToStudyButton: document.getElementById("back-to-study"),
  verseViewer: document.querySelector(".verse-viewer"),
  toggleBookListButton: document.getElementById("toggle-book-list"),
  bookListWrapper: document.getElementById("book-list-wrapper"),
  splashScreen: document.getElementById("splash-screen"),
  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  mainContent: document.getElementById("main-content"),
};

let currentVersionKey = "fi33"; // Default version
let currentBookIndex = 0;
let currentChapterIndex = 0;
let currentBookNumber = 10; // Default to Genesis (book_number 10)

// Global database and loaded data
let db;
const loadedBibleData = {};

// Versions from the SQLite database
const versions = [
  { key: "fi33", name: "Kirkkoraamattu 33/38" },
  { key: "b1776", name: "Biblia 1776" },
  { key: "cpr1642", name: "Coco Pyhä Raamattu 1642" },
];

// Function to parse verse text for a specific version
function parseVerse(text, versionKey, bookNumber) {
  // Remove Osat1551 if present
  text = text.replace(/<i>\s*Osat1551.*?(?:<\/i>|$)/gi, '').trim();
  
  // Debug: Log raw text and version being parsed
  console.log(`[DEBUG] Parsing verse for ${versionKey}, book_number ${bookNumber}: "${text}"`);

  if (versionKey === "fi33") {
    // Match FI33/38 text: starts with FI33/38, ends before <i>, TKIS, B1776, CPR1642, or UT1548
    const match = text.match(/^FI33\/38\s+(.+?)(?=(?:<i>|TKIS|B1776|CPR1642|UT1548|$))/i);
    let result = match ? match[1].trim() : '';
    // For New Testament (book_number >= 470), remove leading verse number if present
    if (bookNumber >= 470) {
      result = result.replace(/^\d+\s+/, '').trim();
    }
    console.log(`[DEBUG] FI33/38 parsed result: "${result}"`);
    return result;
  } else if (versionKey === "b1776") {
    // Match B1776 text: inside <i> or standalone, starts with B1776, ends before next version or </i>
    const match = text.match(/(?:<i>[^<]*B1776\s+(.+?)(?=(?:TKIS|CPR1642|UT1548|<\/i>|$))|B1776\s+(.+?)(?=(?:TKIS|CPR1642|UT1548|$)))/i);
    const result = match ? (match[1] || match[2]).trim() : '';
    console.log(`[DEBUG] B1776 parsed result: "${result}"`);
    return result;
  } else if (versionKey === "cpr1642") {
    // Match CPR1642 text: inside <i> or at end, starts with CPR1642, ends before next version or </i
    const match = text.match(/(?:<i>[^<]*CPR1642\s+(.+?)(?=(?:TKIS|UT1548|<\/i>|$))|CPR1642\s+(.+?)(?=(?:TKIS|UT1548|$)))/i);
    const result = match ? (match[1] || match[2]).trim() : '';
    console.log(`[DEBUG] CPR1642 parsed result: "${result}"`);
    return result;
  }
  console.log(`[DEBUG] No match for ${versionKey}, returning empty string`);
  return '';
}

// Load the SQLite database with progress tracking
async function loadDb() {
  console.log("[DEBUG] Loading SQLite database...");
  try {
    const SQL = await initSqlJs({
      locateFile: file => `https://sql.js.org/dist/${file}`
    });

    const response = await fetch('./1642.sqlite');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentLength = response.headers.get('Content-Length');
    const total = contentLength ? parseInt(contentLength, 10) : null;
    let loaded = 0;
    const chunks = [];

    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      loaded += value.length;
      if (total) {
        const percentage = Math.min(Math.round((loaded / total) * 100), 100);
        elements.progressFill.style.width = `${percentage}%`;
        elements.progressText.textContent = `${percentage}%`;
        console.log(`[DEBUG] Download progress: ${percentage}% (${loaded}/${total} bytes)`);
      }
    }

    // Combine chunks into a single Uint8Array
    const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
    const buffer = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      buffer.set(chunk, offset);
      offset += chunk.length;
    }

    db = new SQL.Database(buffer);
    console.log("[DEBUG] Database loaded and initialized successfully.");
  } catch (error) {
    console.error("[ERROR] Failed to load database:", error);
    elements.splashScreen.innerHTML = `<p style="color: red;">Tietokantavirhe. Lue konsolista lisää.</p>`;
    throw error;
  }
}

// Fetch book list from database (same for all versions)
async function fetchBookList() {
  console.log("[DEBUG] Fetching book list from database.");
  try {
    const stmt = db.prepare("SELECT book_number, long_name FROM books ORDER BY book_number");
    const books = [];
    while (stmt.step()) {
      const row = stmt.getAsObject();
      books.push({ book_number: row.book_number, long_name: row.long_name });
    }
    stmt.free();
    return books;
  } catch (error) {
    console.error("[ERROR] Could not fetch book list:", error);
    // Fallback Finnish list
    return [
      { book_number: 10, long_name: "1. Mooseksen kirja" },
      { book_number: 20, long_name: "2. Mooseksen kirja" },
      { book_number: 30, long_name: "3. Mooseksen kirja" },
      { book_number: 40, long_name: "4. Mooseksen kirja" },
      { book_number: 50, long_name: "5. Mooseksen kirja" },
      { book_number: 60, long_name: "Joosua" },
      { book_number: 70, long_name: "Tuomarien kirja" },
      { book_number: 80, long_name: "Ruut" },
      { book_number: 90, long_name: "1. Samuelin kirja" },
      { book_number: 100, long_name: "2. Samuelin kirja" },
      { book_number: 110, long_name: "1. Kuningasten kirja" },
      { book_number: 120, long_name: "2. Kuningasten kirja" },
      { book_number: 130, long_name: "1. Aikakirja" },
      { book_number: 140, long_name: "2. Aikakirja" },
      { book_number: 150, long_name: "Esra" },
      { book_number: 160, long_name: "Nehemia" },
      { book_number: 190, long_name: "Ester" },
      { book_number: 220, long_name: "Job" },
      { book_number: 230, long_name: "Psalmit" },
      { book_number: 240, long_name: "Sananlaskut" },
      { book_number: 250, long_name: "Saarnaaja" },
      { book_number: 260, long_name: "Korkea veisu" },
      { book_number: 290, long_name: "Jesaja" },
      { book_number: 300, long_name: "Jeremia" },
      { book_number: 310, long_name: "Valitusvirret" },
      { book_number: 330, long_name: "Hesekiel" },
      { book_number: 340, long_name: "Daniel" },
      { book_number: 350, long_name: "Hoosea" },
      { book_number: 360, long_name: "Jooel" },
      { book_number: 370, long_name: "Aamos" },
      { book_number: 380, long_name: "Obadja" },
      { book_number: 390, long_name: "Joona" },
      { book_number: 400, long_name: "Miika" },
      { book_number: 410, long_name: "Naahum" },
      { book_number: 420, long_name: "Habakuk" },
      { book_number: 430, long_name: "Sefanja" },
      { book_number: 440, long_name: "Haggai" },
      { book_number: 450, long_name: "Sakarja" },
      { book_number: 460, long_name: "Malakia" },
      { book_number: 470, long_name: "Matteus" },
      { book_number: 480, long_name: "Markus" },
      { book_number: 490, long_name: "Luukas" },
      { book_number: 500, long_name: "Johannes" },
      { book_number: 510, long_name: "Apostolien teot" },
      { book_number: 520, long_name: "Roomalaiskirje" },
      { book_number: 530, long_name: "1. Korinttilaiskirje" },
      { book_number: 540, long_name: "2. Korinttilaiskirje" },
      { book_number: 550, long_name: "Galatalaiskirje" },
      { book_number: 560, long_name: "Efesolaiskirje" },
      { book_number: 570, long_name: "Filippiläiskirje" },
      { book_number: 580, long_name: "Kolossalaiskirje" },
      { book_number: 590, long_name: "1. Tessalonikalaiskirje" },
      { book_number: 600, long_name: "2. Tessalonikalaiskirje" },
      { book_number: 610, long_name: "1. Timoteuskirje" },
      { book_number: 620, long_name: "2. Timoteuskirje" },
      { book_number: 630, long_name: "Tituskirje" },
      { book_number: 640, long_name: "Filemonkirje" },
      { book_number: 650, long_name: "Heprealaiskirje" },
      { book_number: 660, long_name: "Jaakobin kirje" },
      { book_number: 670, long_name: "1. Pietarin kirje" },
      { book_number: 680, long_name: "2. Pietarin kirje" },
      { book_number: 690, long_name: "1. Johanneksen kirje" },
      { book_number: 700, long_name: "2. Johanneksen kirje" },
      { book_number: 710, long_name: "3. Johanneksen kirje" },
      { book_number: 720, long_name: "Juudaksen kirje" },
      { book_number: 730, long_name: "Ilmestyskirja" }
    ];
  }
}

// Fetch book data (verses) from database for a book and parse for version
async function fetchBookData(book_number, bookName, versionKey) {
  console.log(`[DEBUG] Fetching book data for book_number: ${book_number}, version: ${versionKey}`);
  try {
    const stmt = db.prepare("SELECT chapter, verse, text FROM verses WHERE book_number = ? ORDER BY chapter, verse");
    stmt.bind([book_number]);
    const chapters = {};
    while (stmt.step()) {
      const row = stmt.getAsObject();
      const chap = row.chapter;
      if (!chapters[chap]) chapters[chap] = [];
      const parsedText = parseVerse(row.text, versionKey, book_number);
      chapters[chap].push(parsedText);
    }
    stmt.free();
    const chapterArray = Object.keys(chapters).sort((a, b) => a - b).map(k => chapters[k]);
    return { name: bookName, chapters: chapterArray };
  } catch (error) {
    console.error(`[ERROR] Could not fetch book data for ${bookName}:`, error);
    return null;
  }
}

// Initialize the app
async function initializeApp() {
  console.log("[DEBUG] Initializing app...");
  try {
    await loadDb();
    // Hide splash screen and show main content
    elements.splashScreen.classList.add("hidden");
    elements.mainContent.classList.remove("hidden");
    console.log("[DEBUG] Splash screen hidden, main content displayed.");
  } catch {
    return; // Stop if db load fails
  }

  versions.forEach((v) => {
    const option = document.createElement("option");
    option.value = v.key;
    option.textContent = v.name;
    elements.versionSelector.appendChild(option);
  });

  if (window.innerWidth <= 768) {
    elements.bookListWrapper.classList.add("collapsed");
    elements.toggleBookListButton.querySelector(".arrow-icon").style.transform = "rotate(0deg)";
  } else {
    elements.bookListWrapper.classList.remove("collapsed");
    elements.bookListWrapper.classList.add("expanded");
    elements.toggleBookListButton.classList.add("expanded");
    elements.toggleBookListButton.querySelector(".arrow-icon").style.transform = "rotate(180deg)";
  }

  // Initialize loadedBibleData for default version
  loadedBibleData[currentVersionKey] = { books: [] };
  await loadVersionData(currentVersionKey);

  addEventListeners();
  console.log("[DEBUG] App initialization complete.");
}

async function loadVersionData(versionKey, preserveBookAndChapter = false) {
  console.log(`[DEBUG] Loading data for version: ${versionKey}, preserveBookAndChapter: ${preserveBookAndChapter}`);
  
  // Store current book_number and chapter to preserve them if needed
  let targetBookNumber = preserveBookAndChapter ? currentBookNumber : 10; // Default to Genesis
  let targetChapterIndex = preserveBookAndChapter ? currentChapterIndex : 0;
  console.log(`[DEBUG] Target book_number: ${targetBookNumber}, chapter: ${targetChapterIndex}`);

  if (!loadedBibleData[versionKey]) {
    loadedBibleData[versionKey] = { books: [] };
  }

  const bookList = await fetchBookList();
  if (bookList.length === 0) {
    elements.verseDisplay.innerHTML = "<p style='color: red;'>Virhe: Kirjoja ei löytynyt.</p>";
    return;
  }

  loadedBibleData[versionKey].books = bookList.map((book, index) => ({
    name: book.long_name,
    index: index,
    book_number: book.book_number,
    data: null, // Load on demand
  }));

  // Find the matching book_index for the target book_number
  const newBookIndex = loadedBibleData[versionKey].books.findIndex(book => book.book_number === targetBookNumber);
  if (newBookIndex !== -1) {
    currentBookIndex = newBookIndex;
    console.log(`[DEBUG] Found matching book_index: ${currentBookIndex} for book_number: ${targetBookNumber}`);
  } else {
    console.warn(`[WARN] Book_number ${targetBookNumber} not found in version ${versionKey}, defaulting to Genesis`);
    currentBookIndex = 0;
    targetChapterIndex = 0;
  }

  // Update global book_number
  currentBookNumber = loadedBibleData[versionKey].books[currentBookIndex].book_number;
  currentChapterIndex = targetChapterIndex;

  renderBookList(loadedBibleData[versionKey].books);

  // Validate chapter index
  const bookData = await fetchBookData(currentBookNumber, loadedBibleData[versionKey].books[currentBookIndex].name, versionKey);
  if (bookData && bookData.chapters[targetChapterIndex]) {
    loadedBibleData[versionKey].books[currentBookIndex].data = bookData;
  } else {
    console.warn(`[WARN] Chapter ${targetChapterIndex + 1} not found for book_number ${currentBookNumber} in version ${versionKey}, defaulting to chapter 1`);
    currentChapterIndex = 0;
  }

  await loadAndDisplayChapter(currentBookIndex, currentChapterIndex);

  await setupFuseSearch(versionKey);
  console.log(`[DEBUG] Version data for ${versionKey} loaded.`);
}

function addEventListeners() {
  console.log("[DEBUG] Adding event listeners...");
  elements.versionSelector.addEventListener("change", handleVersionChange);
  elements.bookListActual.addEventListener("click", handleBookSelection);
  elements.prevChapterButton.addEventListener("click", navigateChapter.bind(null, -1));
  elements.nextChapterButton.addEventListener("click", navigateChapter.bind(null, 1));
  elements.searchButton.addEventListener("click", handleSearch);
  elements.searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });
  elements.backToStudyButton.addEventListener("click", showVerseViewer);
  elements.toggleBookListButton.addEventListener("click", toggleBookList);
}

async function handleVersionChange(event) {
  const newVersionKey = event.target.value;
  console.log(`[DEBUG] Version change detected: from ${currentVersionKey} to ${newVersionKey}`);
  currentVersionKey = newVersionKey;
  await loadVersionData(currentVersionKey, true); // Preserve book and chapter
  showVerseViewer();
}

function renderBookList(books) {
  console.log(`[DEBUG] Rendering book list for ${currentVersionKey}. Total books: ${books.length}`);
  elements.bookListActual.innerHTML = "";
  books.forEach((book, index) => {
    const button = document.createElement("button");
    button.textContent = book.name;
    button.dataset.bookIndex = index;
    if (index === currentBookIndex) {
      button.classList.add("active");
    }
    elements.bookListActual.appendChild(button);
  });
  console.log("[DEBUG] Book list rendered.");
}

async function handleBookSelection(event) {
  const target = event.target;
  if (target.tagName === "BUTTON" && target.dataset.bookIndex !== undefined) {
    const selectedBookIndex = parseInt(target.dataset.bookIndex, 10);
    console.log(`[DEBUG] Book selected: ${target.textContent} (Index: ${selectedBookIndex})`);

    const currentActiveBook = elements.bookListActual.querySelector(".active");
    if (currentActiveBook) {
      currentActiveBook.classList.remove("active");
    }

    currentBookIndex = selectedBookIndex;
    currentBookNumber = loadedBibleData[currentVersionKey].books[currentBookIndex].book_number;
    currentChapterIndex = 0;
    target.classList.add("active");

    await loadAndDisplayChapter(currentBookIndex, currentChapterIndex);
    showVerseViewer();

    if (window.innerWidth <= 768 && elements.bookListWrapper.classList.contains("expanded")) {
      toggleBookList();
    }
  }
}

async function loadAndDisplayChapter(bookIndex, chapterIndex) {
  console.log(`[DEBUG] Attempting to load and display chapter. Book Index: ${bookIndex}, Chapter Index: ${chapterIndex}`);
  const currentVersionBooks = loadedBibleData[currentVersionKey].books;
  if (!currentVersionBooks || !currentVersionBooks[bookIndex]) {
    console.error(`[ERROR] Invalid bookIndex ${bookIndex} for version ${currentVersionKey}.`);
    elements.verseDisplay.innerHTML = "<p style='color: red;'>Virhe: Kirjan metadataa ei löytynyt. Valitse oikea kirja.</p>";
    elements.currentPassageTitle.textContent = "Error";
    return;
  }

  const targetBookMeta = currentVersionBooks[bookIndex];
  let bookData = targetBookMeta.data;

  if (!bookData) {
    console.log(`[DEBUG] Book data not yet loaded for ${targetBookMeta.name}. Querying...`);
    bookData = await fetchBookData(targetBookMeta.book_number, targetBookMeta.name, currentVersionKey);
    if (!bookData) {
      console.error(`[ERROR] Failed to load data for book: ${targetBookMeta.name}`);
      elements.verseDisplay.innerHTML = `<p style="color: red;">Virhe ladattaessa ${targetBookMeta.name}.</p>`;
      elements.currentPassageTitle.textContent = "Error";
      return;
    }
    targetBookMeta.data = bookData;
    console.log(`[DEBUG] Book data for ${targetBookMeta.name} fetched and stored.`);
  }

  const book = bookData;
  const chapter = book.chapters[chapterIndex];

  if (!chapter) {
    console.warn(`[WARN] Chapter ${chapterIndex + 1} not found in ${book.name}.`);
    elements.verseDisplay.innerHTML = `<p>Lukua ${chapterIndex + 1} ei löytynyt kirjalle ${book.name}.</p>`;
    elements.currentPassageTitle.textContent = `${book.name} Luku ${chapterIndex + 1}`;
    elements.prevChapterButton.disabled = chapterIndex === 0 && bookIndex === 0;
    elements.nextChapterButton.disabled = true;
    return;
  }

  elements.currentPassageTitle.textContent = `${book.name} Luku ${chapterIndex + 1}`;
  elements.verseDisplay.innerHTML = "";
  console.log(`[DEBUG] Displaying ${book.name} Chapter ${chapterIndex + 1}. Total verses: ${chapter.length}`);

  chapter.forEach((verseText, verseNumber) => {
    const p = document.createElement("p");
    p.innerHTML = `<span class="verse-number">${verseNumber + 1}.</span> ${verseText}`;
    elements.verseDisplay.appendChild(p);
  });

  elements.prevChapterButton.disabled = chapterIndex === 0 && bookIndex === 0;
  elements.nextChapterButton.disabled =
    chapterIndex >= book.chapters.length - 1 &&
    bookIndex >= currentVersionBooks.length - 1;
  console.log(`[DEBUG] Navigation button states: Prev=${elements.prevChapterButton.disabled}, Next=${elements.nextChapterButton.disabled}`);
}

async function navigateChapter(direction) {
  console.log(`[DEBUG] Navigating chapter. Direction: ${direction}. Current: Book ${currentBookIndex}, Chapter ${currentChapterIndex}`);
  const currentVersionBooks = loadedBibleData[currentVersionKey].books;
  const currentBookMeta = currentVersionBooks[currentBookIndex];

  if (!currentBookMeta.data) {
    await loadAndDisplayChapter(currentBookIndex, currentChapterIndex);
    if (!currentBookMeta.data) {
      console.error("[ERROR] Cannot navigate, current book data is missing.");
      return;
    }
  }

  let newChapterIndex = currentChapterIndex + direction;
  const currentBookNumChapters = currentBookMeta.data.chapters.length;

  if (newChapterIndex >= 0 && newChapterIndex < currentBookNumChapters) {
    currentChapterIndex = newChapterIndex;
    console.log(`[DEBUG] Navigating within book. New chapter index: ${currentChapterIndex}`);
    await loadAndDisplayChapter(currentBookIndex, currentChapterIndex);
  } else if (newChapterIndex < 0 && currentBookIndex > 0) {
    console.log("[DEBUG] Navigating to previous book.");
    currentBookIndex--;
    const prevBookMeta = currentVersionBooks[currentBookIndex];
    if (!prevBookMeta.data) {
      await loadAndDisplayChapter(currentBookIndex, 0);
    }
    currentChapterIndex = prevBookMeta.data.chapters.length - 1;
    currentBookNumber = prevBookMeta.book_number;
    await loadAndDisplayChapter(currentBookIndex, currentChapterIndex);
    updateActiveBookButton();
  } else if (
    newChapterIndex >= currentBookNumChapters &&
    currentBookIndex < currentVersionBooks.length - 1
  ) {
    console.log("[DEBUG] Navigating to next book.");
    currentBookIndex++;
    currentChapterIndex = 0;
    currentBookNumber = currentVersionBooks[currentBookIndex].book_number;
    await loadAndDisplayChapter(currentBookIndex, currentChapterIndex);
    updateActiveBookButton();
  } else {
    console.log("[DEBUG] Navigation boundary reached.");
  }
}

function updateActiveBookButton() {
  console.log(`[DEBUG] Updating active book button to index: ${currentBookIndex}`);
  const currentActiveBook = elements.bookListActual.querySelector(".active");
  if (currentActiveBook) {
    currentActiveBook.classList.remove("active");
  }
  const newActiveBook = elements.bookListActual.querySelector(
    `button[data-book-index="${currentBookIndex}"]`
  );
  if (newActiveBook) {
    newActiveBook.classList.add("active");
  }
}

let fuseSearchInstance = null;

async function setupFuseSearch(versionKey) {
  console.log(`[DEBUG] Setting up Fuse.js search for version: ${versionKey}`);
  try {
    const stmt = db.prepare("SELECT v.book_number, b.long_name, v.chapter, v.verse, v.text FROM verses v JOIN books b ON v.book_number = b.book_number ORDER BY v.book_number, v.chapter, v.verse");
    const searchIndex = [];
    let currentBookIndex = -1;
    let prevBookNumber = null;
    while (stmt.step()) {
      const row = stmt.getAsObject();
      if (row.book_number !== prevBookNumber) {
        currentBookIndex++;
        prevBookNumber = row.book_number;
      }
      const cleanText = parseVerse(row.text, versionKey, row.book_number);
      if (!cleanText) continue;
      searchIndex.push({
        bookIndex: currentBookIndex,
        chapter: row.chapter,
        verse: row.verse,
        loc: `${row.long_name} ${row.chapter}:${row.verse}`,
        text: cleanText
      });
    }
    stmt.free();
    console.log(`[DEBUG] Built search index for ${versionKey}. Size: ${searchIndex.length} items.`);
    const fuseOptions = {
      keys: ["text"],
      includeScore: true,
      threshold: 0.3,
      minMatchCharLength: 3
    };
    fuseSearchInstance = new Fuse(searchIndex, fuseOptions);
    fuseSearchInstance.versionKey = versionKey;
    console.log(`[DEBUG] Fuse.js instance created for ${versionKey}.`);
  } catch (error) {
    console.error(`[ERROR] Could not build search index for ${versionKey}:`, error);
    fuseSearchInstance = null;
  }
}

function handleSearch() {
  const query = elements.searchInput.value.trim();
  console.log(`[DEBUG] Search initiated for query: "${query}"`);

  if (query.length < 3) {
    alert("Anna vähintään 3 merkkiä hakutekstiin.");
    return;
  }

  if (!fuseSearchInstance || fuseSearchInstance.versionKey !== currentVersionKey) {
    console.warn("[WARN] Fuse.js instance not ready for current version. Attempting to set up.");
    setupFuseSearch(currentVersionKey).then(() => {
      if (fuseSearchInstance) {
        performSearch(query);
      } else {
        alert("Hakuindeksi ei latautunut. Yritä uudelleen tai valitse toinen versio.");
      }
    });
    return;
  }

  performSearch(query);
}

function performSearch(query) {
  const results = fuseSearchInstance.search(query);
  console.log(`[DEBUG] Search completed. Found ${results.length} results.`);
  displaySearchResults(results);
  showSearchResults();
}

function displaySearchResults(results) {
  elements.resultsList.innerHTML = "";
  console.log(`[DEBUG] Displaying ${results.length} search results.`);

  if (results.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Ei hakutuloksia.";
    elements.resultsList.appendChild(li);
    return;
  }

  results.slice(0, 50).forEach((result) => {
    const item = result.item;
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.loc}</strong>: ${item.text}`;
    li.dataset.bookIndex = item.bookIndex;
    li.dataset.chapterIndex = item.chapter - 1;
    li.dataset.verseNumber = item.verse;

    li.addEventListener("click", async () => {
      console.log(`[DEBUG] Search result clicked: ${item.loc}`);
      currentBookIndex = item.bookIndex;
      currentChapterIndex = item.chapter - 1;
      currentBookNumber = loadedBibleData[currentVersionKey].books[currentBookIndex].book_number;
      await loadAndDisplayChapter(currentBookIndex, currentChapterIndex);
      updateActiveBookButton();
      showVerseViewer();
      setTimeout(() => {
        const targetVerseElement = elements.verseDisplay.querySelector(
          `p:nth-child(${item.verse})`
        );
        if (targetVerseElement) {
          targetVerseElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
          targetVerseElement.style.backgroundColor = "#fff3cd";
          setTimeout(() => {
            targetVerseElement.style.backgroundColor = "";
          }, 2000);
        }
      }, 100);
    });
    elements.resultsList.appendChild(li);
  });
}

function showSearchResults() {
  console.log("[DEBUG] Showing search results view.");
  elements.verseViewer.classList.add("hidden");
  elements.searchResultsContainer.classList.remove("hidden");
}

function showVerseViewer() {
  console.log("[DEBUG] Showing verse viewer view.");
  elements.searchResultsContainer.classList.add("hidden");
  elements.verseViewer.classList.remove("hidden");
}

function toggleBookList() {
  console.log("[DEBUG] Toggling book list visibility.");
  const isExpanded = elements.bookListWrapper.classList.toggle("expanded");
  elements.bookListWrapper.classList.toggle("collapsed", !isExpanded);
  elements.toggleBookListButton.classList.toggle("expanded", isExpanded);

  const arrowIcon = elements.toggleBookListButton.querySelector(".arrow-icon");
  if (isExpanded) {
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    arrowIcon.style.transform = "rotate(0deg)";
  }
}

// Start the application
initializeApp();
