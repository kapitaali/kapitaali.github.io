document.addEventListener('DOMContentLoaded', () => {
  console.log("Loading the engine...");
  const e = new standalonejs.com.dhsdevelopments.kap.standalonejs.createEngine();
  e.then(function(eng){

  //console.error("Loading the engine errored: ", error);
    // Display a user-friendly message
    //alert("Sorry, that feature is temporarily unavailable.");
    // Disable the feature
    //myButton.disabled = true;

  const titleElement = document.getElementById('title');
  const questionElement = document.getElementById('question');
  const answerInput = document.getElementById('answer');
  const backButton = document.getElementById('back-button');
  const checkButton = document.getElementById('check-button');
  const forwardButton = document.getElementById('forward-button');
  const scoreValue = document.getElementById('score-value');
  const skipsValue = document.getElementById('skips-value');
  const questionGrid = document.getElementById('question-grid');
  const restartButton = document.getElementById('restart-button');
  const helpButton = document.getElementById('help-button');
  const helpPage = document.getElementById('help-page');
  const closeHelpButton = document.getElementById('close-help-button');
  const linksButton = document.getElementById('links-button');
  const linksPage = document.getElementById('links-page');
  const closeLinksButton = document.getElementById('close-links-button');

  let questions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let skipsRemaining = 2;
  let answeredCorrectly = {};
  let questionStates = [];
  let answers = {};
  //const eng = new standalonejs.com.dhsdevelopments.kap.standalonejs.EngineJsWrapper();

  // Added:
  // Function to set app state in localStorage
  function setAppState(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }
  
  // Function to get app state from localStorage
  function getAppState(name) {
    const storedValue = localStorage.getItem(name);
    return storedValue ? JSON.parse(storedValue) : null;
  }
  
  // Function to delete app state from localStorage
  function deleteAppState(name) {
    localStorage.removeItem(name);
  }

  // Function to load the app state from cookies
  function loadAppState() {
    const storedCurrentQuestionIndex = getAppState('currentQuestionIndex');
    const storedScore = getAppState('score');
    const storedSkipsRemaining = getAppState('skipsRemaining');
    const storedAnsweredCorrectly = getAppState('answeredCorrectly');
    const storedQuestionStates = getAppState('questionStates');
    const storedAnswers = getAppState('answers');
    
    if (storedCurrentQuestionIndex) {
      currentQuestionIndex = storedCurrentQuestionIndex;
    }
    if (storedScore) {
      score = storedScore;
    }
    if (storedSkipsRemaining) {
      skipsRemaining = storedSkipsRemaining;
    }
    if (storedAnsweredCorrectly) {
      answeredCorrectly = storedAnsweredCorrectly;
    }
    if (storedQuestionStates) {
      questionStates = storedQuestionStates;
    }
    if (storedAnswers !== null) {
      answers = storedAnswers;
    }
  }

  // Function to save the app state to cookies
  function saveAppState() {
    setAppState('currentQuestionIndex', currentQuestionIndex);
    setAppState('score', score);
    setAppState('skipsRemaining', skipsRemaining);
    setAppState('answeredCorrectly', answeredCorrectly);
    setAppState('questionStates', questionStates);
    setAppState('answers', answers);
  }

  // Function to load questions from JSON file
  async function loadQuestions() {
    try {
      const response = await fetch('questions.json');
      questions = await response.json();
      questionStates = new Array(questions.length).fill(null);
      
      loadAppState();

      renderQuestion();
      renderQuestionGrid();
      updateUI();
    } catch (error) {
      console.error('Error loading questions:', error);
      questionElement.textContent = 'Failed to load questions.';
    }
  }

  // Function to render the current question
  function renderQuestion() {
    if (questions.length === 0) return;
    questionElement.innerHTML = questions[currentQuestionIndex].question; /* FIRST LINE */
    let qnum = currentQuestionIndex + 1; // qnum + ". " +
    titleElement.textContent = qnum + ". " + questions[currentQuestionIndex].questionSet;

    if (answeredCorrectly[currentQuestionIndex]) {
      answerInput.value = answers[currentQuestionIndex];
    } else if (answers[currentQuestionIndex]) {
      answerInput.value = answers[currentQuestionIndex];
    } else {
      answerInput.value = '';
    }
  }

  // Function to update the UI elements
  function updateUI() {
    scoreValue.textContent = score;
    skipsValue.textContent = skipsRemaining;
    backButton.disabled = currentQuestionIndex === 0;
    forwardButton.disabled =
      skipsRemaining === 0 &&
      questionStates[currentQuestionIndex] !== 'correct' &&
      questionStates[currentQuestionIndex] !== 'skipped' &&
      answerInput.value.trim() === '';
  }

  // Function to render the question grid
  function renderQuestionGrid() {
    questionGrid.innerHTML = '';

    for (let i = 0; i < questions.length; i++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');

      if (i === currentQuestionIndex) {
        gridBox.classList.add('current-question');
        gridBox.style.border = '2px solid black'; // Add border to current question
      }

      gridBox.addEventListener('click', () => {
        if (questionStates[currentQuestionIndex] === 'correct') {
          currentQuestionIndex = i;
        }
        else if (skipsRemaining > 0) {
          questionElement[currentQuestionIndex] = 'skipped';
          currentQuestionIndex = i;
          skipsRemaining -= 1;
        } 
        renderQuestion();
        updateUI();
        renderQuestionGrid();
        saveAppState();
      });

      switch (questionStates[i]) {
        case 'correct':
          gridBox.classList.add('correct');
          break;
        case 'incorrect':
          gridBox.classList.add('incorrect');
          break;
        case 'skipped':
          gridBox.classList.add('skipped');
          break;
        default:
          gridBox.classList.add('incorrect');
          break;
      }

      questionGrid.appendChild(gridBox);
    }
  }

  function areMultiDimensionalArraysEqual(arr1, arr2) {
    // Check if both arrays have the same dimensions
    console.log(arr1);
    console.log(arr2);
    const dim1 = arr1.dimensions();
    const dim2 = arr2.dimensions();

    if (dim1.length !== dim2.length) {
        return false;
    }

    for (let i = 0; i < dim1.length; i++) {
        if (dim1[i] !== dim2[i]) {
            return false;
        }
    }

    // Recursively compare the elements
    return compareArrays(arr1, arr2);
  }

  function compareArrays(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (!compareArrays(arr1[i], arr2[i])) {
                return false;
            }
        }
        return true;
    } else {
        return arr1 === arr2;
    }
  }

  // Function to check the answer
  function checkAnswer() {
    if (questions.length === 0) return;
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = answerInput.value;
    const correctAnswer = currentQuestion.answer;
    try {
      // Check if the answer must contain certain characters
      if (currentQuestion.mustContain) {
        for (const char of currentQuestion.mustContain) {
          if (!userAnswer.includes(char)) {
            alert(`The answer must contain "${char}"`);
            return;
          }
        }
      }

      // Check if the answer cannot contain certain characters
      if (currentQuestion.cannotContain) {
        for (const char of currentQuestion.cannotContain) {
          if (userAnswer.includes(char)) {
            alert(`The answer cannot contain "${char}"`);
            return;
          }
        }
      }
      //const eng = standalonejs.com.dhsdevelopments.kap.standalonejs.createEngine();
      // if preparations are defined, execute them
      console.log("preparing input...");
      const preparations = currentQuestion.prep ? eng.parseAndEval(currentQuestion.prep) : null;
      // run user definition
      console.log("running user definition...");
      const defineUserAnswer = eng.parseAndEval(userAnswer);
      // run check to get evaluated output
      console.log("running test...");
      const evaluatedAnswer = eng.parseAndEval(currentQuestion.check);
      //console.log(JSON.stringify(evaluatedAnswer));
      answers[currentQuestionIndex] = userAnswer; // Store the answer

      console.log("wanted: " + JSON.stringify(currentQuestion.answer));
      console.log("got:    " + JSON.stringify(evaluatedAnswer.value));

      questionStates[currentQuestionIndex] = 'incorrect';
      console.log("evaluating...");
      if (evaluatedAnswer) {
        if (currentQuestion.answerType === "NESTED_ARRAY") {
          let s = currentQuestion.answer + " ≡ (" + currentQuestion.check + ")";
          console.log(s);
          const isitOK = eng.parseAndEval(s);
          console.log(isitOK.value.toString());
          if (isitOK.value.toString() === "APLLong(1)") {
            answeredCorrectly[currentQuestionIndex] = true;
            questionStates[currentQuestionIndex] = 'correct';
            score++;            
          }
        }
        else if (currentQuestion.answerType === "INTEGER") {
          if (evaluatedAnswer.formatted() === correctAnswer.toString()) {
            answeredCorrectly[currentQuestionIndex] = true;
            questionStates[currentQuestionIndex] = 'correct';
            score++;    
            }
          } else {
            let s = currentQuestion.answer + " ≡ (" + currentQuestion.check + ")";
            console.log(s);
            const isitOK = eng.parseAndEval(s);
            if (isitOK.value.toString() === "APLLong(1)") {      
              answeredCorrectly[currentQuestionIndex] = true;
              questionStates[currentQuestionIndex] = 'correct';
              score++;    
            }
          }
      }             
    } catch (error) {
      console.log("Incorrect input!");
      console.log(error);
    }

    let qnum = currentQuestionIndex+1;
    switch (questionStates[currentQuestionIndex]) {
      case 'correct': 
        console.log("correct answer to question " + qnum);
        break;
      case 'incorrect':
        console.log("answer to question " + qnum + " is incorrect");
        break;
      default: 
    }


    renderQuestionGrid();
    updateUI();
    saveAppState();
  }

  // Function to go to the next question
  function nextQuestion() {
    if (questions.length === 0) return;

    const isAnsweredCorrectly = answeredCorrectly[currentQuestionIndex];
    const answerIsFilled = answerInput.value.trim() !== '';

    if (!isAnsweredCorrectly && !answerIsFilled && skipsRemaining > 0) {
      skipsRemaining--;
      questionStates[currentQuestionIndex] = 'skipped';
      console.log("skipped question " + currentQuestionIndex+1);
    } else if (!isAnsweredCorrectly && !answerIsFilled && skipsRemaining === 0) {
      alert('You cannot skip any more questions.');
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
      updateUI();
      renderQuestionGrid();
    }
    //
    saveAppState(); /* LAST LINE */
  }

  // Function to go to the previous question
  function previousQuestion() {
    if (questions.length === 0) return;
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
      updateUI();
      renderQuestionGrid();
    }
  }

  // Function to restart the quiz
  function restartQuiz() {
    deleteAppState('currentQuestionIndex');
    deleteAppState('score');
    deleteAppState('skipsRemaining');
    deleteAppState('answeredCorrectly');
    deleteAppState('questionStates');
    deleteAppState('answers');
  
    currentQuestionIndex = 0;
    score = 0;
    skipsRemaining = 2;
    answeredCorrectly = {};
    questionStates = new Array(questions.length).fill(null);
    answers = {};
  
    renderQuestion();
    renderQuestionGrid();
    updateUI();
  }

  // Event listeners
  checkButton.addEventListener('click', checkAnswer);
  forwardButton.addEventListener('click', nextQuestion);
  backButton.addEventListener('click', previousQuestion);
  restartButton.addEventListener('click', restartQuiz);

  // Help button functionality
  helpButton.addEventListener('click', () => {
    console.log("open page pressed");
    helpPage.style.display = 'flex';
  });

  closeHelpButton.addEventListener('click', () => {
    console.log("close page pressed");
    helpPage.style.display = 'none';
  });

// Links button functionality
linksButton.addEventListener('click', () => {
  linksPage.style.display = 'flex';
});

closeLinksButton.addEventListener('click', () => {
  linksPage.style.display = 'none';
});

// Popup functionality
const linkItems = document.querySelectorAll('.link-item');
linkItems.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const popupId = link.dataset.popup;
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'flex';
    }
  });
});

const closePopupButtons = document.querySelectorAll('.close-popup-button');
closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup-page');
    if (popup) {
      popup.style.display = 'none';
    }
  });
});
  
        
  // Load questions when the page loads
  loadQuestions();
  });
});

function propertiesToArray(obj) {
  const isObject = val =>
    val && typeof val === 'object' && !Array.isArray(val);

  const addDelimiter = (a, b) =>
    a ? `${a}.${b}` : b;

  const paths = (obj = {}, head = '') => {
    return Object.entries(obj)
      .reduce((product, [key, value]) => 
        {
          let fullPath = addDelimiter(head, key)
          return isObject(value) ?
            product.concat(paths(value, fullPath))
          : product.concat(fullPath)
        }, []);
  }

  return paths(obj);
}

function valuesToArray(obj) {
  const isObject = val =>
    val && typeof val === 'object' && !Array.isArray(val);

  const addDelimiter = (a, b) =>
    a ? `${a}.${b}` : b;

  const paths = (obj = {}, head = '') => {
    return Object.entries(obj)
      .reduce((product, [key, value]) => 
        {
          let fullPath = addDelimiter(head, key)
          return isObject(value) ?
            product.concat(paths(value, fullPath))
          : product.concat(value)
        }, []);
  }

  return paths(obj);
}

function flatten(object, path = '', res = undefined) {
  if (!Array.isArray(res)) {
      res = [];
  }
  if (object !== null && typeof object === 'object') {
      if (Array.isArray(object)) {
          for (let i = 0; i < object.length; i++) {
              this.flatten(object[i], path + '[' + i + ']', res)
          }
      } else {
          const keys = Object.keys(object)
          for (let i = 0; i < keys.length; i++) {
              const key = keys[i]
              this.flatten(object[key], path ? path + '.' + key : key, res)
          }
      }
  } else {
      if (path) {
          res[path] = object
      }
  }
  return res
}

// claude
function jsonToNestedArray(data) {
  // Base case: If we have a low_1 property directly
  if (data.low_1 !== undefined) {
      return data.low_1;
  }
  
  // If we have a value_1 object that contains low_1
  if (data.value_1 && data.value_1.low_1 !== undefined) {
      return data.value_1.low_1;
  }
  
  // If we have values_1 array, process each element
  if (data.values_1) {
      return data.values_1.map(item => {
          // If the item has dimensions_1 and values_1, it's a nested structure
          if (item.dimensions_1 && item.values_1) {
              return jsonToNestedArray(item);
          }
          // For any other structure, recursively process it
          return jsonToNestedArray(item);
      });
  }
  
  // Return empty array if no recognizable structure is found
  return [];
}

// goog
function transformJsonToArray(jsonData) {
  function traverse(data) {
    if (data && typeof data === 'object') {
      if (data.low_1 !== undefined) {
        return data.low_1;
      } else if (Array.isArray(data)) {
        return data.map(traverse);
      } else {
        for (const key in data) {
          if (key.startsWith('values_') || key.startsWith('value')) {
            return traverse(data[key]);
          }
        }
        // Handle cases where neither "low_1" nor "values_" or "value" key is found.
        return null; // Or other appropriate handling
      }
    }
    return data;
  }

  return traverse(jsonData);
}

function transformJsonToArray2(json) {
  function process(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(process);
    }

    if (obj.value_1 && obj.value_1.low_1 !== undefined) {
      return obj.value_1.low_1;
    }

    if (obj.values_1) {
      const dimensions = obj.dimensions_1 ? Object.values(obj.dimensions_1)[0] : 1; // Default to 1 if dimensions_1 is missing
      const values = process(obj.values_1);

      if (Array.isArray(values) && values.length > 0 && typeof values[0] === 'number') {
        const result = [];
        let currentIndex = 0;
        for (let i = 0; i < dimensions; i++) {

          if (currentIndex < values.length)
          {
            result.push(values[currentIndex]);
            currentIndex++;
          }
           else {
            result.push(values[values.length - 1]); // Handle cases where values are exhausted before dimensions
           }
        }
        return result;
      } else if (Array.isArray(values)){
        return values;
      }
    }

    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = process(obj[key]);
      }
    }
    return result;
  }

  const processed = process(json);
  return processed.values_1;
}

function json2arr(json) {
  // Helper function to process each value object
  function processValue(valueObj) {
      if (valueObj.value_1) {
          return valueObj.value_1.low_1;
      } else if (valueObj.values_1) {
          return processValues(valueObj);
      }
      return null;
  }

  // Helper function to process the list of values
  function processValues(valuesObj) {
      let result = [];
      for (let i = 0; i < valuesObj.values_1.length; i++) {
          let value = processValue(valuesObj.values_1[i]);
          if (value !== null) {
              result.push(value);
          }
      }
      return result;
  }

  // Main function to process the JSON
  let finalResult = [];
  for (let i = 0; i < json.values_1.length; i++) {
      let dimensions = json.values_1[i].dimensions_1["0"];
      let values = processValues(json.values_1[i]);
      finalResult.push(values);
      //for (let j = 0; j < dimensions; j++) {
          
      //}
  }
  return finalResult;
}
