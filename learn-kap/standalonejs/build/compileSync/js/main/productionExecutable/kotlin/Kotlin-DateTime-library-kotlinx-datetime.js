(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var DateTimeFormatterBuilder = $module$_js_joda_core_gcv2k.DateTimeFormatterBuilder;
  var ResolverStyle = $module$_js_joda_core_gcv2k.ResolverStyle;
  var protoOf = kotlin_kotlin.$_$.d7;
  var initMetadataForObject = kotlin_kotlin.$_$.s6;
  var toString = kotlin_kotlin.$_$.g7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var objectCreate = kotlin_kotlin.$_$.c7;
  var captureStack = kotlin_kotlin.$_$.z5;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.f1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.h1;
  var IllegalArgumentException = kotlin_kotlin.$_$.x9;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.p1;
  var RuntimeException = kotlin_kotlin.$_$.ea;
  var VOID = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.n6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q6;
  var Long = kotlin_kotlin.$_$.aa;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var toLong = kotlin_kotlin.$_$.f7;
  var ArithmeticException = kotlin_kotlin.$_$.r9;
  var THROW_CCE = kotlin_kotlin.$_$.fa;
  var KMutableProperty1 = kotlin_kotlin.$_$.r7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.m6;
  var KMutableProperty0 = kotlin_kotlin.$_$.q7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var Enum = kotlin_kotlin.$_$.v9;
  var initMetadataForInterface = kotlin_kotlin.$_$.r6;
  var toString_0 = kotlin_kotlin.$_$.y1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var isInterface = kotlin_kotlin.$_$.v6;
  var isArray = kotlin_kotlin.$_$.t6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var hashCode = kotlin_kotlin.$_$.o6;
  var listOf = kotlin_kotlin.$_$.q4;
  var get_indices = kotlin_kotlin.$_$.i4;
  var charSequenceLength = kotlin_kotlin.$_$.d6;
  var joinToString = kotlin_kotlin.$_$.k4;
  var equals = kotlin_kotlin.$_$.i6;
  var getBooleanHashCode = kotlin_kotlin.$_$.j6;
  var KProperty0 = kotlin_kotlin.$_$.s7;
  var lazy = kotlin_kotlin.$_$.na;
  var padStart = kotlin_kotlin.$_$.w8;
  var abs = kotlin_kotlin.$_$.h7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var getOrNull = kotlin_kotlin.$_$.d4;
  var listOf_0 = kotlin_kotlin.$_$.p4;
  var emptyList = kotlin_kotlin.$_$.w3;
  var toString_1 = kotlin_kotlin.$_$.ua;
  var charSequenceGet = kotlin_kotlin.$_$.c6;
  var get_lastIndex = kotlin_kotlin.$_$.u8;
  var toSet = kotlin_kotlin.$_$.s5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h3;
  var distinct = kotlin_kotlin.$_$.s3;
  var to = kotlin_kotlin.$_$.va;
  var single = kotlin_kotlin.$_$.b5;
  var Collection = kotlin_kotlin.$_$.n2;
  var Char = kotlin_kotlin.$_$.s9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.e6;
  var numberRangeToNumber = kotlin_kotlin.$_$.y6;
  var mutableListOf = kotlin_kotlin.$_$.t4;
  var removeLastOrNull = kotlin_kotlin.$_$.w4;
  var sortWith = kotlin_kotlin.$_$.c5;
  var FunctionAdapter = kotlin_kotlin.$_$.x5;
  var Comparator = kotlin_kotlin.$_$.u9;
  var compareValues = kotlin_kotlin.$_$.t5;
  var Exception = kotlin_kotlin.$_$.w9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.z;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var joinTo = kotlin_kotlin.$_$.m4;
  var plus = kotlin_kotlin.$_$.u4;
  var toMutableList = kotlin_kotlin.$_$.p5;
  var addAll = kotlin_kotlin.$_$.v2;
  var firstOrNull = kotlin_kotlin.$_$.b4;
  var drop = kotlin_kotlin.$_$.u3;
  var repeat = kotlin_kotlin.$_$.z8;
  var sortedWith = kotlin_kotlin.$_$.e5;
  var binarySearch = kotlin_kotlin.$_$.e3;
  var startsWith = kotlin_kotlin.$_$.g9;
  var checkCountOverflow = kotlin_kotlin.$_$.f3;
  var compareTo = kotlin_kotlin.$_$.f6;
  var removePrefix = kotlin_kotlin.$_$.y8;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Comparable = kotlin_kotlin.$_$.t9;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.w1;
  var enumEntries = kotlin_kotlin.$_$.u5;
  var numberToLong = kotlin_kotlin.$_$.b7;
  var numberToInt = kotlin_kotlin.$_$.a7;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.t;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(System, 'System');
  initMetadataForClass(DateTimeFormatException, 'DateTimeFormatException', DateTimeFormatException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(DateTimeArithmeticException, 'DateTimeArithmeticException', DateTimeArithmeticException_init_$Create$, RuntimeException);
  function set_fractionOfSecond(value) {
    this.lm(value == null ? null : value.is(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.mm();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new DecimalFraction(tmp0_safe_receiver, 9);
    }
    return tmp;
  }
  initMetadataForInterface(TimeFieldContainer, 'TimeFieldContainer');
  initMetadataForInterface(UtcOffsetFieldContainer, 'UtcOffsetFieldContainer');
  initMetadataForClass(DateTimeComponentsContents, 'DateTimeComponentsContents', VOID, VOID, [TimeFieldContainer, UtcOffsetFieldContainer]);
  initMetadataForCompanion(Companion);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(DateTimeComponents, 'DateTimeComponents');
  function appendAlternativeParsingImpl(otherFormats, mainFormat) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(otherFormats.length);
    var inductionVariable = 0;
    var last = otherFormats.length;
    while (inductionVariable < last) {
      var item = otherFormats[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.also' call
      var this_0 = this.ap();
      item(this_0);
      var tmp$ret$2 = this_0.vo().vn();
      destination.h(tmp$ret$2);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.ap();
    mainFormat(this_1);
    var main = this_1.vo().vn();
    this.vo().yo(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.vo();
    // Inline function 'kotlin.also' call
    var this_0 = this.ap();
    format(this_0);
    tmp.yo(new OptionalFormatStructure(onZero, this_0.vo().vn()));
  }
  function chars(value) {
    return this.vo().yo(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.vo().vn().hq_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.fp(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.fp.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.gp(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.gp.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.kn(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.kn.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function year(padding) {
    return this.dp(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.dp(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function monthName(names) {
    return this.dp(new BasicFormatStructure(new MonthNameDirective(names)));
  }
  function dayOfMonth(padding) {
    return this.dp(new BasicFormatStructure(new DayDirective(padding)));
  }
  function dayOfWeek(names) {
    return this.dp(new BasicFormatStructure(new DayOfWeekDirective(names)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.dp(format.nq_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [WithDate]);
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.jp(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.jp.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.kp(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.kp.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.lp(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.lp.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithTime, 'WithTime');
  function hour(padding) {
    return this.ep(new BasicFormatStructure(new HourDirective(padding)));
  }
  function minute(padding) {
    return this.ep(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.ep(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction(minLength, maxLength) {
    return this.ep(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  function addFormatStructureForDate(structure) {
    this.wo(structure);
  }
  function addFormatStructureForTime(structure) {
    this.wo(structure);
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithTime, WithDate]);
  function offsetHours$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.mp(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.mp.call(this, padding);
    }
    return tmp;
  }
  function offsetMinutesOfHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.np(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.np.call(this, padding);
    }
    return tmp;
  }
  function offsetSecondsOfMinute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.pp(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.pp.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithUtcOffset, 'WithUtcOffset');
  function offsetHours(padding) {
    return this.zo(new SignedFormatStructure(new BasicFormatStructure(new UtcOffsetWholeHoursDirective(padding)), true));
  }
  function offsetMinutesOfHour(padding) {
    return this.zo(new BasicFormatStructure(new UtcOffsetMinuteOfHourDirective(padding)));
  }
  function offsetSecondsOfMinute(padding) {
    return this.zo(new BasicFormatStructure(new UtcOffsetSecondOfMinuteDirective(padding)));
  }
  function offset(format) {
    var tmp;
    if (format instanceof UtcOffsetFormat) {
      this.zo(format.bu_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithOffsetBuilder, 'AbstractWithOffsetBuilder', VOID, VOID, [WithUtcOffset]);
  initMetadataForClass(Builder, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder, AbstractWithOffsetBuilder, WithUtcOffset, WithTime, WithDate]);
  initMetadataForClass(AbstractDateTimeFormat, 'AbstractDateTimeFormat');
  initMetadataForClass(DateTimeComponentsFormat, 'DateTimeComponentsFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(TwoDigitNumber, 'TwoDigitNumber');
  initMetadataForClass(Padding, 'Padding', VOID, Enum);
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MonthNames, 'MonthNames');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(DayOfWeekNames, 'DayOfWeekNames');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Builder_0, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateBuilder]);
  initMetadataForClass(LocalDateFormat, 'LocalDateFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(SignedIntFieldFormatDirective, 'SignedIntFieldFormatDirective');
  initMetadataForClass(YearDirective, 'YearDirective', VOID, SignedIntFieldFormatDirective);
  initMetadataForClass(UnsignedIntFieldFormatDirective, 'UnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthDirective, 'MonthDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(NamedUnsignedIntFieldFormatDirective, 'NamedUnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthNameDirective, 'MonthNameDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForClass(DayDirective, 'DayDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(DayOfWeekDirective, 'DayOfWeekDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForObject(DateFields, 'DateFields');
  initMetadataForClass(IncompleteLocalTime, 'IncompleteLocalTime', IncompleteLocalTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(AmPmMarker, 'AmPmMarker', VOID, Enum);
  initMetadataForClass(HourDirective, 'HourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(MinuteDirective, 'MinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(SecondDirective, 'SecondDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(DecimalFractionFieldFormatDirective, 'DecimalFractionFieldFormatDirective');
  initMetadataForClass(FractionalSecondDirective, 'FractionalSecondDirective', VOID, DecimalFractionFieldFormatDirective);
  initMetadataForObject(TimeFields, 'TimeFields');
  initMetadataForClass(IncompleteUtcOffset, 'IncompleteUtcOffset', IncompleteUtcOffset, VOID, [UtcOffsetFieldContainer]);
  initMetadataForClass(UtcOffsetWholeHoursDirective, 'UtcOffsetWholeHoursDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Builder_1, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithOffsetBuilder]);
  initMetadataForClass(UtcOffsetFormat, 'UtcOffsetFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(OffsetFields$sign$1);
  initMetadataForObject(OffsetFields, 'OffsetFields');
  initMetadataForClass(UtcOffsetMinuteOfHourDirective, 'UtcOffsetMinuteOfHourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(UtcOffsetSecondOfMinuteDirective, 'UtcOffsetSecondOfMinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(AppendableFormatStructure, 'AppendableFormatStructure', AppendableFormatStructure);
  initMetadataForClass(AssignableString, 'AssignableString');
  initMetadataForClass(AbstractFieldSpec, 'AbstractFieldSpec');
  initMetadataForClass(GenericFieldSpec, 'GenericFieldSpec', VOID, AbstractFieldSpec);
  function getterNotNull(container) {
    var tmp0_elvis_lhs = this.lv(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.p2() + ' is not set');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  initMetadataForInterface(Accessor, 'Accessor');
  initMetadataForClass(PropertyAccessor, 'PropertyAccessor', VOID, VOID, [Accessor]);
  initMetadataForClass(UnsignedFieldSpec, 'UnsignedFieldSpec', VOID, AbstractFieldSpec);
  initMetadataForClass(ConcatenatedFormatStructure, 'ConcatenatedFormatStructure');
  initMetadataForClass(CachedFormatStructure, 'CachedFormatStructure', VOID, ConcatenatedFormatStructure);
  initMetadataForInterface(NonConcatenatedFormatStructure, 'NonConcatenatedFormatStructure');
  initMetadataForClass(BasicFormatStructure, 'BasicFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ConstantFormatStructure, 'ConstantFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(SignedFormatStructure, 'SignedFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(PropertyWithDefault, 'PropertyWithDefault');
  initMetadataForClass(OptionalFormatStructure, 'OptionalFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(AlternativesParsingFormatStructure, 'AlternativesParsingFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ComparisonPredicate, 'ComparisonPredicate');
  initMetadataForObject(Truth, 'Truth');
  initMetadataForClass(ConjunctionPredicate, 'ConjunctionPredicate');
  function format$default(obj, builder, minusNotRequired, $super) {
    minusNotRequired = minusNotRequired === VOID ? false : minusNotRequired;
    var tmp;
    if ($super === VOID) {
      this.ew(obj, builder, minusNotRequired);
      tmp = Unit_instance;
    } else {
      tmp = $super.ew.call(this, obj, builder, minusNotRequired);
    }
    return tmp;
  }
  initMetadataForInterface(FormatterStructure, 'FormatterStructure');
  initMetadataForClass(SpacePaddedFormatter, 'SpacePaddedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(SignedFormatter, 'SignedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConditionalFormatter, 'ConditionalFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConcatenatedFormatter, 'ConcatenatedFormatter', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(SignedIntFormatterStructure, 'SignedIntFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(UnsignedIntFormatterStructure, 'UnsignedIntFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(StringFormatterStructure, 'StringFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(DecimalFractionFormatterStructure, 'DecimalFractionFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(ConstantStringFormatterStructure, 'ConstantStringFormatterStructure', VOID, VOID, [FormatterStructure]);
  initMetadataForClass(NumberConsumer, 'NumberConsumer');
  initMetadataForClass(FractionPartConsumer, 'FractionPartConsumer', VOID, NumberConsumer);
  initMetadataForClass(ConstantNumberConsumer, 'ConstantNumberConsumer', VOID, NumberConsumer);
  initMetadataForObject(ExpectedInt, 'ExpectedInt');
  initMetadataForClass(TooManyDigits, 'TooManyDigits');
  initMetadataForClass(TooFewDigits, 'TooFewDigits');
  initMetadataForClass(WrongConstant, 'WrongConstant');
  initMetadataForClass(Conflicting, 'Conflicting');
  initMetadataForClass(UnsignedIntConsumer, 'UnsignedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ParseError, 'ParseError');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(TrieNode, 'TrieNode', TrieNode);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(StringSetParserOperation, 'StringSetParserOperation');
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation');
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation');
  initMetadataForClass(SignParser, 'SignParser');
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification');
  initMetadataForClass(DecimalFraction, 'DecimalFraction', VOID, VOID, [Comparable]);
  initMetadataForClass(DayOfWeek_0, 'DayOfWeek', VOID, Enum);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Instant_0, 'Instant', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(LocalDate_0, 'LocalDate', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(LocalDateTime_0, 'LocalDateTime', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(LocalTime_0, 'LocalTime', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_11);
  initMetadataForObject(Formats_0, 'Formats');
  initMetadataForClass(UtcOffset, 'UtcOffset');
  //endregion
  function System() {
  }
  protoOf(System).kk = function () {
    return Companion_getInstance_7().kk();
  };
  var System_instance;
  function System_getInstance() {
    return System_instance;
  }
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.o2_1 + 1 | 0;
  }
  function DayOfWeek(isoDayNumber) {
    // Inline function 'kotlin.require' call
    if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
      var message = 'Expected ISO day-of-week number in 1..7, got ' + isoDayNumber;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries().p(isoDayNumber - 1 | 0);
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function format(_this__u8e3s4, format, offset) {
    offset = offset === VOID ? Companion_getInstance_11().pk_1 : offset;
    var instant = _this__u8e3s4;
    return format_0(format, format$lambda(instant, offset));
  }
  function format$lambda($instant, $offset) {
    return function ($this$format) {
      $this$format.el($instant, $offset);
      return Unit_instance;
    };
  }
  var timeZoneField;
  function get_emptyDateTimeComponentsContents() {
    _init_properties_DateTimeComponents_kt__9iimb5();
    return emptyDateTimeComponentsContents;
  }
  var emptyDateTimeComponentsContents;
  function DateTimeComponentsContents(date, time, offset, timeZoneId) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    offset = offset === VOID ? new IncompleteUtcOffset() : offset;
    timeZoneId = timeZoneId === VOID ? null : timeZoneId;
    this.fl_1 = date;
    this.gl_1 = time;
    this.hl_1 = offset;
    this.il_1 = timeZoneId;
  }
  protoOf(DateTimeComponentsContents).jl = function (_set____db54di) {
    this.fl_1.ml_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).ol = function () {
    return this.fl_1.ml_1;
  };
  protoOf(DateTimeComponentsContents).pl = function (_set____db54di) {
    this.fl_1.nl_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).ql = function () {
    return this.fl_1.nl_1;
  };
  protoOf(DateTimeComponentsContents).rl = function (_set____db54di) {
    this.fl_1.ll_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).sl = function () {
    return this.fl_1.ll_1;
  };
  protoOf(DateTimeComponentsContents).tl = function (_set____db54di) {
    this.fl_1.kl_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).ul = function () {
    return this.fl_1.kl_1;
  };
  protoOf(DateTimeComponentsContents).vl = function (_set____db54di) {
    this.gl_1.yl_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).cm = function () {
    return this.gl_1.yl_1;
  };
  protoOf(DateTimeComponentsContents).dm = function (value) {
    this.gl_1.dm(value);
  };
  protoOf(DateTimeComponentsContents).em = function () {
    return this.gl_1.em();
  };
  protoOf(DateTimeComponentsContents).fm = function (_set____db54di) {
    this.gl_1.wl_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).gm = function () {
    return this.gl_1.wl_1;
  };
  protoOf(DateTimeComponentsContents).hm = function (_set____db54di) {
    this.gl_1.xl_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).im = function () {
    return this.gl_1.xl_1;
  };
  protoOf(DateTimeComponentsContents).jm = function (_set____db54di) {
    this.gl_1.zl_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).km = function () {
    return this.gl_1.zl_1;
  };
  protoOf(DateTimeComponentsContents).lm = function (_set____db54di) {
    this.gl_1.bm_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).mm = function () {
    return this.gl_1.bm_1;
  };
  protoOf(DateTimeComponentsContents).nm = function (_set____db54di) {
    this.gl_1.am_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).om = function () {
    return this.gl_1.am_1;
  };
  protoOf(DateTimeComponentsContents).pm = function (_set____db54di) {
    this.hl_1.qm_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).um = function () {
    return this.hl_1.qm_1;
  };
  protoOf(DateTimeComponentsContents).vm = function (_set____db54di) {
    this.hl_1.sm_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).wm = function () {
    return this.hl_1.sm_1;
  };
  protoOf(DateTimeComponentsContents).xm = function (_set____db54di) {
    this.hl_1.tm_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).ym = function () {
    return this.hl_1.tm_1;
  };
  protoOf(DateTimeComponentsContents).zm = function (_set____db54di) {
    this.hl_1.rm_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).an = function () {
    return this.hl_1.rm_1;
  };
  protoOf(DateTimeComponentsContents).bn = function () {
    return new DateTimeComponentsContents(this.fl_1.bn(), this.gl_1.bn(), this.hl_1.bn(), this.il_1);
  };
  protoOf(DateTimeComponentsContents).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof DateTimeComponentsContents) {
      tmp_2 = other.fl_1.equals(this.fl_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.gl_1.equals(this.gl_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.hl_1.equals(this.hl_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.il_1 == this.il_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DateTimeComponentsContents).hashCode = function () {
    var tmp = this.fl_1.hashCode() ^ this.gl_1.hashCode() ^ this.hl_1.hashCode();
    var tmp0_safe_receiver = this.il_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda($this$Format) {
    $this$Format.cn(get_ISO_DATE());
    var tmp = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0);
    $this$Format.dn();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.en();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.fn();
    optional($this$Format, VOID, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1);
    var tmp_0 = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2];
    alternativeParsing($this$Format, tmp_0, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.gn(1, 9);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.hn();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.jn(Formats_instance_0.in());
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda($this$Format) {
    var tmp = [DateTimeComponents$Formats$RFC_1123$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$RFC_1123$lambda$lambda_0);
    $this$Format.kn(Padding_NONE_getInstance());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.nn(Companion_getInstance_0().mn_1);
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.on();
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.dn();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.en();
    optional($this$Format, VOID, DateTimeComponents$Formats$RFC_1123$lambda$lambda_1);
    $this$Format.pn(' ');
    var tmp_0 = DateTimeComponents$Formats$RFC_1123$lambda$lambda_2;
    var tmp_1 = [tmp_0, DateTimeComponents$Formats$RFC_1123$lambda$lambda_3];
    alternativeParsing($this$Format, tmp_1, DateTimeComponents$Formats$RFC_1123$lambda$lambda_4);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda($this$alternativeParsing) {
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_0($this$alternativeParsing) {
    $this$alternativeParsing.sn(Companion_getInstance_1().rn_1);
    $this$alternativeParsing.pn(', ');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.fn();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.pn('UT');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.pn('Z');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_4($this$alternativeParsing) {
    optional($this$alternativeParsing, 'GMT', DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda($this$optional) {
    $this$optional.jn(Formats_instance_0.tn());
    return Unit_instance;
  }
  function Companion() {
  }
  protoOf(Companion).un = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new DateTimeComponentsFormat(builder.vn());
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Formats() {
    Formats_instance = this;
    var tmp = this;
    var tmp_0 = Companion_instance;
    tmp.wn_1 = tmp_0.un(DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_instance;
    tmp_1.xn_1 = tmp_2.un(DateTimeComponents$Formats$RFC_1123$lambda);
  }
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function DateTimeComponents(contents) {
    contents = contents === VOID ? new DateTimeComponentsContents() : contents;
    this.qk_1 = contents;
    this.rk_1 = year$factory(this.qk_1.fl_1);
    this.sk_1 = new TwoDigitNumber(monthNumber$factory(this.qk_1.fl_1));
    this.tk_1 = new TwoDigitNumber(dayOfMonth$factory(this.qk_1.fl_1));
    this.uk_1 = new TwoDigitNumber(hour$factory(this.qk_1.gl_1));
    this.vk_1 = new TwoDigitNumber(hourOfAmPm$factory(this.qk_1.gl_1));
    this.wk_1 = amPm$factory(this.qk_1.gl_1);
    this.xk_1 = new TwoDigitNumber(minute$factory(this.qk_1.gl_1));
    this.yk_1 = new TwoDigitNumber(second$factory(this.qk_1.gl_1));
    this.zk_1 = isNegative$factory(this.qk_1.hl_1);
    this.al_1 = new TwoDigitNumber(totalHoursAbs$factory(this.qk_1.hl_1));
    this.bl_1 = new TwoDigitNumber(minutesOfHour$factory(this.qk_1.hl_1));
    this.cl_1 = new TwoDigitNumber(secondsOfMinute$factory(this.qk_1.hl_1));
    this.dl_1 = timeZoneId$factory_0(this.qk_1);
  }
  protoOf(DateTimeComponents).yn = function (localDateTime) {
    this.qk_1.fl_1.bo(localDateTime.ao());
    this.qk_1.gl_1.do(localDateTime.co());
  };
  protoOf(DateTimeComponents).eo = function (utcOffset) {
    this.qk_1.hl_1.fo(utcOffset);
  };
  protoOf(DateTimeComponents).el = function (instant, utcOffset) {
    var smallerInstant = Companion_getInstance_7().jo(instant.ho().a3(new Long(2036907392, 73)), instant.io());
    this.yn(toLocalDateTime(smallerInstant, utcOffset));
    this.eo(utcOffset);
    var tmp = ensureNotNull(this.ul());
    // Inline function 'kotlin.Long.times' call
    var tmp$ret$0 = instant.ho().z2(new Long(2036907392, 73)).y2(toLong(10000));
    this.tl(tmp + tmp$ret$0.c1() | 0);
  };
  protoOf(DateTimeComponents).tl = function (_set____db54di) {
    var tmp0 = this.rk_1;
    // Inline function 'kotlin.setValue' call
    year$factory_0();
    tmp0.set(_set____db54di);
    return Unit_instance;
  };
  protoOf(DateTimeComponents).ul = function () {
    var tmp0 = this.rk_1;
    // Inline function 'kotlin.getValue' call
    year$factory_1();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).mm = function () {
    return this.qk_1.gl_1.bm_1;
  };
  protoOf(DateTimeComponents).ko = function () {
    return this.qk_1.hl_1.ko();
  };
  protoOf(DateTimeComponents).lo = function () {
    return this.qk_1.gl_1.lo();
  };
  protoOf(DateTimeComponents).mo = function () {
    var offset = this.ko();
    var time = this.lo();
    var truncatedDate = this.qk_1.fl_1.bn();
    truncatedDate.kl_1 = requireParsedField(truncatedDate.kl_1, 'year') % 10000 | 0;
    var tmp;
    try {
      var secDelta = safeMultiply(toLong(ensureNotNull(this.ul()) / 10000 | 0), new Long(2036907392, 73));
      var epochDays = toLong(truncatedDate.no().po());
      // Inline function 'kotlin.Long.times' call
      var tmp2 = epochDays.y2(toLong(86400));
      // Inline function 'kotlin.Long.plus' call
      var other = time.ro();
      var tmp4 = tmp2.w2(toLong(other));
      // Inline function 'kotlin.Long.minus' call
      var other_0 = offset.to();
      var tmp$ret$2 = tmp4.x2(toLong(other_0));
      tmp = safeAdd(secDelta, tmp$ret$2);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_1('The parsed date is outside the range representable by Instant', e);
      } else {
        throw $p;
      }
    }
    var totalSeconds = tmp;
    if (totalSeconds.a1(Companion_getInstance_7().nk_1.ho()) < 0 || totalSeconds.a1(Companion_getInstance_7().ok_1.ho()) > 0)
      throw DateTimeFormatException_init_$Create$_0('The parsed date is outside the range representable by Instant');
    var tmp_1 = Companion_getInstance_7();
    var tmp0_elvis_lhs = this.mm();
    return tmp_1.jo(totalSeconds, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
  };
  function Builder(actualBuilder) {
    this.uo_1 = actualBuilder;
  }
  protoOf(Builder).vo = function () {
    return this.uo_1;
  };
  protoOf(Builder).wo = function (structure) {
    this.uo_1.yo(structure);
  };
  protoOf(Builder).zo = function (structure) {
    this.uo_1.yo(structure);
  };
  protoOf(Builder).ap = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function DateTimeComponentsFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.rp_1 = actualFormat;
  }
  protoOf(DateTimeComponentsFormat).sp = function () {
    return this.rp_1;
  };
  protoOf(DateTimeComponentsFormat).tp = function (value) {
    return value.qk_1;
  };
  protoOf(DateTimeComponentsFormat).up = function (value) {
    return this.tp(value instanceof DateTimeComponents ? value : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).vp = function (intermediate) {
    return new DateTimeComponents(intermediate);
  };
  protoOf(DateTimeComponentsFormat).wp = function (intermediate) {
    return this.vp(intermediate instanceof DateTimeComponentsContents ? intermediate : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).xp = function () {
    return get_emptyDateTimeComponentsContents();
  };
  function TwoDigitNumber(reference) {
    this.aq_1 = reference;
  }
  function format_0(_this__u8e3s4, block) {
    _init_properties_DateTimeComponents_kt__9iimb5();
    // Inline function 'kotlin.apply' call
    var this_0 = new DateTimeComponents();
    block(this_0);
    return _this__u8e3s4.yp(this_0);
  }
  function timeZoneId$factory() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.il_1;
    }, function (receiver, value) {
      receiver.il_1 = value;
      return Unit_instance;
    });
  }
  function year$factory($b0) {
    return getPropertyCallableRef('year', 0, KMutableProperty0, function () {
      return $b0.kl_1;
    }, function (value) {
      $b0.kl_1 = value;
      return Unit_instance;
    });
  }
  function monthNumber$factory($b0) {
    return getPropertyCallableRef('monthNumber', 0, KMutableProperty0, function () {
      return $b0.ll_1;
    }, function (value) {
      $b0.ll_1 = value;
      return Unit_instance;
    });
  }
  function dayOfMonth$factory($b0) {
    return getPropertyCallableRef('dayOfMonth', 0, KMutableProperty0, function () {
      return $b0.ml_1;
    }, function (value) {
      $b0.ml_1 = value;
      return Unit_instance;
    });
  }
  function hour$factory($b0) {
    return getPropertyCallableRef('hour', 0, KMutableProperty0, function () {
      return $b0.wl_1;
    }, function (value) {
      $b0.wl_1 = value;
      return Unit_instance;
    });
  }
  function hourOfAmPm$factory($b0) {
    return getPropertyCallableRef('hourOfAmPm', 0, KMutableProperty0, function () {
      return $b0.xl_1;
    }, function (value) {
      $b0.xl_1 = value;
      return Unit_instance;
    });
  }
  function amPm$factory($b0) {
    return getPropertyCallableRef('amPm', 0, KMutableProperty0, function () {
      return $b0.yl_1;
    }, function (value) {
      $b0.yl_1 = value;
      return Unit_instance;
    });
  }
  function minute$factory($b0) {
    return getPropertyCallableRef('minute', 0, KMutableProperty0, function () {
      return $b0.zl_1;
    }, function (value) {
      $b0.zl_1 = value;
      return Unit_instance;
    });
  }
  function second$factory($b0) {
    return getPropertyCallableRef('second', 0, KMutableProperty0, function () {
      return $b0.am_1;
    }, function (value) {
      $b0.am_1 = value;
      return Unit_instance;
    });
  }
  function isNegative$factory($b0) {
    return getPropertyCallableRef('isNegative', 0, KMutableProperty0, function () {
      return $b0.qm_1;
    }, function (value) {
      $b0.qm_1 = value;
      return Unit_instance;
    });
  }
  function totalHoursAbs$factory($b0) {
    return getPropertyCallableRef('totalHoursAbs', 0, KMutableProperty0, function () {
      return $b0.rm_1;
    }, function (value) {
      $b0.rm_1 = value;
      return Unit_instance;
    });
  }
  function minutesOfHour$factory($b0) {
    return getPropertyCallableRef('minutesOfHour', 0, KMutableProperty0, function () {
      return $b0.sm_1;
    }, function (value) {
      $b0.sm_1 = value;
      return Unit_instance;
    });
  }
  function secondsOfMinute$factory($b0) {
    return getPropertyCallableRef('secondsOfMinute', 0, KMutableProperty0, function () {
      return $b0.tm_1;
    }, function (value) {
      $b0.tm_1 = value;
      return Unit_instance;
    });
  }
  function timeZoneId$factory_0($b0) {
    return getPropertyCallableRef('timeZoneId', 0, KMutableProperty0, function () {
      return $b0.il_1;
    }, function (value) {
      $b0.il_1 = value;
      return Unit_instance;
    });
  }
  function year$factory_0() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.ul();
    }, function (receiver, value) {
      return receiver.tl(value);
    });
  }
  function year$factory_1() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.ul();
    }, function (receiver, value) {
      return receiver.tl(value);
    });
  }
  var properties_initialized_DateTimeComponents_kt_io5e5;
  function _init_properties_DateTimeComponents_kt__9iimb5() {
    if (!properties_initialized_DateTimeComponents_kt_io5e5) {
      properties_initialized_DateTimeComponents_kt_io5e5 = true;
      timeZoneField = new GenericFieldSpec(new PropertyAccessor(timeZoneId$factory()));
      emptyDateTimeComponentsContents = new DateTimeComponentsContents();
    }
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).yp = function (value) {
    // Inline function 'kotlin.also' call
    var this_0 = StringBuilder_init_$Create$();
    this.sp().eq().fq(this.up(value), this_0);
    return this_0.toString();
  };
  protoOf(AbstractDateTimeFormat).zp = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.sp().gq()), input, this.xp());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ParseException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_1("Failed to parse value from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    var matched = tmp;
    try {
      return this.wp(matched);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_0 = $p;
        var message = e_0.message;
        throw DateTimeFormatException_init_$Create$_1(message == null ? "The value parsed from '" + toString(input) + "' is invalid" : '' + message + " (when parsing '" + toString(input) + "')", e_0);
      } else {
        throw $p;
      }
    }
  };
  var Padding_NONE_instance;
  var Padding_ZERO_instance;
  var Padding_SPACE_instance;
  var Padding_entriesInitialized;
  function Padding_initEntries() {
    if (Padding_entriesInitialized)
      return Unit_instance;
    Padding_entriesInitialized = true;
    Padding_NONE_instance = new Padding('NONE', 0);
    Padding_ZERO_instance = new Padding('ZERO', 1);
    Padding_SPACE_instance = new Padding('SPACE', 2);
  }
  function Padding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Padding_NONE_getInstance() {
    Padding_initEntries();
    return Padding_NONE_instance;
  }
  function Padding_ZERO_getInstance() {
    Padding_initEntries();
    return Padding_ZERO_instance;
  }
  function Padding_SPACE_getInstance() {
    Padding_initEntries();
    return Padding_SPACE_instance;
  }
  function WithDate() {
  }
  function WithTime() {
  }
  function WithUtcOffset() {
  }
  function char(_this__u8e3s4, value) {
    return _this__u8e3s4.pn(toString_0(value));
  }
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.cp(ifZero, typeof format === 'function' ? format : THROW_CCE());
      tmp = Unit_instance;
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function alternativeParsing(_this__u8e3s4, alternativeFormats, primaryFormat) {
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      var tmp_0 = (isArray(alternativeFormats) ? alternativeFormats : THROW_CCE()).slice();
      _this__u8e3s4.bp(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
      tmp = Unit_instance;
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function AbstractDateTimeFormatBuilder() {
  }
  function get_ISO_DATE() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE$factory();
    return tmp0.x1();
  }
  var ISO_DATE$delegate;
  var ISO_DATE_BASIC$delegate;
  function get_emptyIncompleteLocalDate() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    return emptyIncompleteLocalDate;
  }
  var emptyIncompleteLocalDate;
  function IncompleteLocalDate(year, monthNumber, dayOfMonth, isoDayOfWeek) {
    year = year === VOID ? null : year;
    monthNumber = monthNumber === VOID ? null : monthNumber;
    dayOfMonth = dayOfMonth === VOID ? null : dayOfMonth;
    isoDayOfWeek = isoDayOfWeek === VOID ? null : isoDayOfWeek;
    this.kl_1 = year;
    this.ll_1 = monthNumber;
    this.ml_1 = dayOfMonth;
    this.nl_1 = isoDayOfWeek;
  }
  protoOf(IncompleteLocalDate).tl = function (_set____db54di) {
    this.kl_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).ul = function () {
    return this.kl_1;
  };
  protoOf(IncompleteLocalDate).rl = function (_set____db54di) {
    this.ll_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).sl = function () {
    return this.ll_1;
  };
  protoOf(IncompleteLocalDate).jl = function (_set____db54di) {
    this.ml_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).ol = function () {
    return this.ml_1;
  };
  protoOf(IncompleteLocalDate).pl = function (_set____db54di) {
    this.nl_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).ql = function () {
    return this.nl_1;
  };
  protoOf(IncompleteLocalDate).no = function () {
    var date = LocalDate_init_$Create$(requireParsedField(this.kl_1, 'year'), requireParsedField(this.ll_1, 'monthNumber'), requireParsedField(this.ml_1, 'dayOfMonth'));
    var tmp0_safe_receiver = this.nl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.iq()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.iq().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).bo = function (date) {
    this.kl_1 = date.ul();
    this.ll_1 = date.sl();
    this.ml_1 = date.ol();
    this.nl_1 = get_isoDayNumber(date.iq());
  };
  protoOf(IncompleteLocalDate).bn = function () {
    return new IncompleteLocalDate(this.kl_1, this.ll_1, this.ml_1, this.nl_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteLocalDate) {
      tmp_2 = this.kl_1 == other.kl_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.ll_1 == other.ll_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.ml_1 == other.ml_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.nl_1 == other.nl_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.kl_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.ll_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.ml_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.nl_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    return tmp_1 + imul(tmp$ret$3, 31) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.kl_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.ll_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.ml_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.nl_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.ln_1 = new MonthNames(listOf(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
    this.mn_1 = new MonthNames(listOf(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function String$toString$ref() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function MonthNames(names) {
    Companion_getInstance_0();
    this.jq_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.jq_1.n() === 12)) {
      var message = 'Month names must contain exactly 12 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.jq_1);
    var inductionVariable = progression.u_1;
    var last = progression.v_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.jq_1.p(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          var message_0 = 'A month name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.jq_1.p(ix) === this.jq_1.p(ix2))) {
              var message_1 = "Month names must be unique, but '" + this.jq_1.p(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(MonthNames).toString = function () {
    return joinToString(this.jq_1, ', ', 'MonthNames(', ')', VOID, VOID, String$toString$ref());
  };
  protoOf(MonthNames).equals = function (other) {
    var tmp;
    if (other instanceof MonthNames) {
      tmp = equals(this.jq_1, other.jq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNames).hashCode = function () {
    return hashCode(this.jq_1);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.qn_1 = new DayOfWeekNames(listOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
    this.rn_1 = new DayOfWeekNames(listOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']));
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function String$toString$ref_0() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function DayOfWeekNames(names) {
    Companion_getInstance_1();
    this.kq_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.kq_1.n() === 7)) {
      var message = 'Day of week names must contain exactly 7 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.kq_1);
    var inductionVariable = progression.u_1;
    var last = progression.v_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.kq_1.p(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          var message_0 = 'A day-of-week name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.kq_1.p(ix) === this.kq_1.p(ix2))) {
              var message_1 = "Day-of-week names must be unique, but '" + this.kq_1.p(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(DayOfWeekNames).toString = function () {
    return joinToString(this.kq_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, String$toString$ref_0());
  };
  protoOf(DayOfWeekNames).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekNames) {
      tmp = equals(this.kq_1, other.kq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekNames).hashCode = function () {
    return hashCode(this.kq_1);
  };
  function Companion_2() {
  }
  protoOf(Companion_2).lq = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.vn());
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function Builder_0(actualBuilder) {
    this.mq_1 = actualBuilder;
  }
  protoOf(Builder_0).vo = function () {
    return this.mq_1;
  };
  protoOf(Builder_0).dp = function (structure) {
    return this.mq_1.yo(structure);
  };
  protoOf(Builder_0).ap = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.nq_1 = actualFormat;
  }
  protoOf(LocalDateFormat).sp = function () {
    return this.nq_1;
  };
  protoOf(LocalDateFormat).oq = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteLocalDate();
    this_0.bo(value);
    return this_0;
  };
  protoOf(LocalDateFormat).up = function (value) {
    return this.oq(value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  protoOf(LocalDateFormat).pq = function (intermediate) {
    return intermediate.no();
  };
  protoOf(LocalDateFormat).wp = function (intermediate) {
    return this.pq(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).xp = function () {
    return get_emptyIncompleteLocalDate();
  };
  function requireParsedField(field, name) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    if (field == null) {
      throw DateTimeFormatException_init_$Create$_0('Can not create a ' + name + ' from the given input: the field ' + name + ' is missing');
    }
    return field;
  }
  function AbstractWithDateBuilder() {
  }
  function YearDirective(padding, isYearOfEra) {
    isYearOfEra = isYearOfEra === VOID ? false : isYearOfEra;
    var tmp = DateFields_getInstance().qq_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.zq_1 = padding;
    this.ar_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.zq_1.equals(other.zq_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.ar_1 === other.ar_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.zq_1.hashCode(), 31) + getBooleanHashCode(this.ar_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().rq_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.lr_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.lr_1.equals(other.lr_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.lr_1.hashCode();
  };
  function MonthNameDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().rq_1, names.jq_1, 'monthName');
    this.tr_1 = names;
  }
  protoOf(MonthNameDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthNameDirective) {
      tmp = equals(this.tr_1.jq_1, other.tr_1.jq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNameDirective).hashCode = function () {
    return hashCode(this.tr_1.jq_1);
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().sq_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.bs_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.bs_1.equals(other.bs_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.bs_1.hashCode();
  };
  function DayOfWeekDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().tq_1, names.kq_1, 'dayOfWeekName');
    this.fs_1 = names;
  }
  protoOf(DayOfWeekDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekDirective) {
      tmp = equals(this.fs_1.kq_1, other.fs_1.kq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekDirective).hashCode = function () {
    return hashCode(this.fs_1.kq_1);
  };
  function DateFields() {
    DateFields_instance = this;
    this.qq_1 = new GenericFieldSpec(new PropertyAccessor(year$factory_2()));
    this.rq_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory_0()), 1, 12);
    this.sq_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory_0()), 1, 31);
    this.tq_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
  }
  var DateFields_instance;
  function DateFields_getInstance() {
    if (DateFields_instance == null)
      new DateFields();
    return DateFields_instance;
  }
  function ISO_DATE$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_2;
    return tmp.lq(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.on();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.hp();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.ip();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_2;
    return tmp.lq(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.on();
    $this$build.hp();
    $this$build.ip();
    return Unit_instance;
  }
  function ISO_DATE$factory() {
    return getPropertyCallableRef('ISO_DATE', 0, KProperty0, function () {
      return get_ISO_DATE();
    }, null);
  }
  function year$factory_2() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.ul();
    }, function (receiver, value) {
      return receiver.tl(value);
    });
  }
  function monthNumber$factory_0() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.sl();
    }, function (receiver, value) {
      return receiver.rl(value);
    });
  }
  function dayOfMonth$factory_0() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.ol();
    }, function (receiver, value) {
      return receiver.jl(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.ql();
    }, function (receiver, value) {
      return receiver.pl(value);
    });
  }
  var properties_initialized_LocalDateFormat_kt_fmnlhc;
  function _init_properties_LocalDateFormat_kt__k1uk9u() {
    if (!properties_initialized_LocalDateFormat_kt_fmnlhc) {
      properties_initialized_LocalDateFormat_kt_fmnlhc = true;
      ISO_DATE$delegate = lazy(ISO_DATE$delegate$lambda);
      ISO_DATE_BASIC$delegate = lazy(ISO_DATE_BASIC$delegate$lambda);
      emptyIncompleteLocalDate = new IncompleteLocalDate();
    }
  }
  function AbstractWithDateTimeBuilder() {
  }
  function TimeFieldContainer() {
  }
  function IncompleteLocalTime(hour, hourOfAmPm, amPm, minute, second, nanosecond) {
    hour = hour === VOID ? null : hour;
    hourOfAmPm = hourOfAmPm === VOID ? null : hourOfAmPm;
    amPm = amPm === VOID ? null : amPm;
    minute = minute === VOID ? null : minute;
    second = second === VOID ? null : second;
    nanosecond = nanosecond === VOID ? null : nanosecond;
    this.wl_1 = hour;
    this.xl_1 = hourOfAmPm;
    this.yl_1 = amPm;
    this.zl_1 = minute;
    this.am_1 = second;
    this.bm_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).fm = function (_set____db54di) {
    this.wl_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).gm = function () {
    return this.wl_1;
  };
  protoOf(IncompleteLocalTime).hm = function (_set____db54di) {
    this.xl_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).im = function () {
    return this.xl_1;
  };
  protoOf(IncompleteLocalTime).vl = function (_set____db54di) {
    this.yl_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).cm = function () {
    return this.yl_1;
  };
  protoOf(IncompleteLocalTime).jm = function (_set____db54di) {
    this.zl_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).km = function () {
    return this.zl_1;
  };
  protoOf(IncompleteLocalTime).nm = function (_set____db54di) {
    this.am_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).om = function () {
    return this.am_1;
  };
  protoOf(IncompleteLocalTime).lm = function (_set____db54di) {
    this.bm_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).mm = function () {
    return this.bm_1;
  };
  protoOf(IncompleteLocalTime).lo = function () {
    var tmp0_safe_receiver = this.wl_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.xl_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.require' call
        if (!((((tmp0_safe_receiver + 11 | 0) % 12 | 0) + 1 | 0) === tmp0_safe_receiver_0)) {
          var message = 'Inconsistent hour and hour-of-am-pm: hour is ' + tmp0_safe_receiver + ', but hour-of-am-pm is ' + tmp0_safe_receiver_0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
      var tmp1_safe_receiver = this.yl_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.require' call
        if (!(tmp1_safe_receiver.equals(AmPmMarker_PM_getInstance()) === tmp0_safe_receiver >= 12)) {
          var message_0 = 'Inconsistent hour and the AM/PM marker: hour is ' + tmp0_safe_receiver + ', but the AM/PM marker is ' + tmp1_safe_receiver.toString();
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
      tmp = tmp0_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver_0 = this.xl_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp0_safe_receiver_1 = this.yl_1;
        var tmp_2;
        if (tmp0_safe_receiver_1 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.let' call
          tmp_2 = (tmp1_safe_receiver_0 === 12 ? 0 : tmp1_safe_receiver_0) + (tmp0_safe_receiver_1.equals(AmPmMarker_PM_getInstance()) ? 12 : 0) | 0;
        }
        tmp_1 = tmp_2;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_3;
    if (tmp3_elvis_lhs == null) {
      throw DateTimeFormatException_init_$Create$_0('Incomplete time: missing hour');
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    var hour = tmp_3;
    var tmp_4 = requireParsedField(this.zl_1, 'minute');
    var tmp4_elvis_lhs = this.am_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.bm_1;
    return LocalTime_init_$Create$(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).do = function (localTime) {
    this.wl_1 = localTime.gm();
    this.xl_1 = ((localTime.gm() + 11 | 0) % 12 | 0) + 1 | 0;
    this.yl_1 = localTime.gm() >= 12 ? AmPmMarker_PM_getInstance() : AmPmMarker_AM_getInstance();
    this.zl_1 = localTime.km();
    this.am_1 = localTime.om();
    this.bm_1 = localTime.mm();
  };
  protoOf(IncompleteLocalTime).bn = function () {
    return new IncompleteLocalTime(this.wl_1, this.xl_1, this.yl_1, this.zl_1, this.am_1, this.bm_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.wl_1 == other.wl_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.xl_1 == other.xl_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.yl_1, other.yl_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.zl_1 == other.zl_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.am_1 == other.am_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.bm_1 == other.bm_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp6_elvis_lhs = this.wl_1;
    var tmp = imul(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs, 31);
    var tmp5_elvis_lhs = this.xl_1;
    var tmp_0 = tmp + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp3_safe_receiver = this.yl_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp2_elvis_lhs = this.zl_1;
    var tmp_2 = tmp_1 + imul(tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, 31) | 0;
    var tmp1_elvis_lhs = this.am_1;
    var tmp_3 = tmp_2 + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp0_elvis_lhs = this.bm_1;
    return tmp_3 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.wl_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.zl_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.am_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.bm_1;
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.let' call
      var it = tmp3_safe_receiver.toString();
      tmp_2 = padStart(it, 9 - it.length | 0, _Char___init__impl__6a9atx(48));
    }
    var tmp4_elvis_lhs = tmp_2;
    return tmp + ':' + tmp_0 + ':' + tmp_1 + '.' + (tmp4_elvis_lhs == null ? '???' : tmp4_elvis_lhs);
  };
  var AmPmMarker_AM_instance;
  var AmPmMarker_PM_instance;
  var AmPmMarker_entriesInitialized;
  function AmPmMarker_initEntries() {
    if (AmPmMarker_entriesInitialized)
      return Unit_instance;
    AmPmMarker_entriesInitialized = true;
    AmPmMarker_AM_instance = new AmPmMarker('AM', 0);
    AmPmMarker_PM_instance = new AmPmMarker('PM', 1);
  }
  function AmPmMarker(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AbstractWithTimeBuilder() {
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().js_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.ts_1 = padding;
  }
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.ts_1.equals(other.ts_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.ts_1.hashCode();
  };
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().ks_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.ys_1 = padding;
  }
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.ys_1.equals(other.ys_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.ys_1.hashCode();
  };
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().ls_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.dt_1 = padding;
  }
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.dt_1.equals(other.dt_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.dt_1.hashCode();
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.et_1 = listOf([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.ft_1 = listOf([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_3();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_3().et_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().ms_1, minDigits, maxDigits, zerosToAdd);
    this.kt_1 = minDigits;
    this.lt_1 = maxDigits;
  }
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.kt_1 === other.kt_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.lt_1 === other.lt_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.kt_1) + this.lt_1 | 0;
  };
  function TimeFields() {
    TimeFields_instance = this;
    this.js_1 = new UnsignedFieldSpec(new PropertyAccessor(hour$factory_0()), 0, 23);
    this.ks_1 = new UnsignedFieldSpec(new PropertyAccessor(minute$factory_0()), 0, 59);
    this.ls_1 = new UnsignedFieldSpec(new PropertyAccessor(second$factory_0()), 0, 59, VOID, 0);
    this.ms_1 = new GenericFieldSpec(new PropertyAccessor(fractionOfSecond$factory()), VOID, new DecimalFraction(0, 9));
    this.ns_1 = new GenericFieldSpec(new PropertyAccessor(amPm$factory_0()));
    this.os_1 = new UnsignedFieldSpec(new PropertyAccessor(hourOfAmPm$factory_0()), 1, 12);
  }
  var TimeFields_instance;
  function TimeFields_getInstance() {
    if (TimeFields_instance == null)
      new TimeFields();
    return TimeFields_instance;
  }
  function AmPmMarker_AM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_AM_instance;
  }
  function AmPmMarker_PM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_PM_instance;
  }
  function hour$factory_0() {
    return getPropertyCallableRef('hour', 1, KMutableProperty1, function (receiver) {
      return receiver.gm();
    }, function (receiver, value) {
      return receiver.fm(value);
    });
  }
  function minute$factory_0() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.km();
    }, function (receiver, value) {
      return receiver.jm(value);
    });
  }
  function second$factory_0() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.om();
    }, function (receiver, value) {
      return receiver.nm(value);
    });
  }
  function fractionOfSecond$factory() {
    return getPropertyCallableRef('fractionOfSecond', 1, KMutableProperty1, function (receiver) {
      return receiver.em();
    }, function (receiver, value) {
      return receiver.dm(value);
    });
  }
  function amPm$factory_0() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.cm();
    }, function (receiver, value) {
      return receiver.vl(value);
    });
  }
  function hourOfAmPm$factory_0() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.im();
    }, function (receiver, value) {
      return receiver.hm(value);
    });
  }
  function get_ISO_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_OFFSET$factory();
    return tmp0.x1();
  }
  var ISO_OFFSET$delegate;
  var ISO_OFFSET_BASIC$delegate;
  function get_FOUR_DIGIT_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = FOUR_DIGIT_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    FOUR_DIGIT_OFFSET$factory();
    return tmp0.x1();
  }
  var FOUR_DIGIT_OFFSET$delegate;
  function get_emptyIncompleteUtcOffset() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    return emptyIncompleteUtcOffset;
  }
  var emptyIncompleteUtcOffset;
  function UtcOffsetFieldContainer() {
  }
  function IncompleteUtcOffset(isNegative, totalHoursAbs, minutesOfHour, secondsOfMinute) {
    isNegative = isNegative === VOID ? null : isNegative;
    totalHoursAbs = totalHoursAbs === VOID ? null : totalHoursAbs;
    minutesOfHour = minutesOfHour === VOID ? null : minutesOfHour;
    secondsOfMinute = secondsOfMinute === VOID ? null : secondsOfMinute;
    this.qm_1 = isNegative;
    this.rm_1 = totalHoursAbs;
    this.sm_1 = minutesOfHour;
    this.tm_1 = secondsOfMinute;
  }
  protoOf(IncompleteUtcOffset).pm = function (_set____db54di) {
    this.qm_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).um = function () {
    return this.qm_1;
  };
  protoOf(IncompleteUtcOffset).zm = function (_set____db54di) {
    this.rm_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).an = function () {
    return this.rm_1;
  };
  protoOf(IncompleteUtcOffset).vm = function (_set____db54di) {
    this.sm_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).wm = function () {
    return this.sm_1;
  };
  protoOf(IncompleteUtcOffset).xm = function (_set____db54di) {
    this.tm_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).ym = function () {
    return this.tm_1;
  };
  protoOf(IncompleteUtcOffset).ko = function () {
    var sign = this.qm_1 === true ? -1 : 1;
    var tmp0_safe_receiver = this.rm_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = imul(tmp0_safe_receiver, sign);
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = this.sm_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = imul(tmp1_safe_receiver, sign);
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = this.tm_1;
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = imul(tmp2_safe_receiver, sign);
    }
    return UtcOffset_0(tmp_0, tmp_2, tmp_3);
  };
  protoOf(IncompleteUtcOffset).fo = function (offset) {
    this.qm_1 = offset.to() < 0;
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = offset.to();
    var totalSecondsAbs = abs(this_0);
    this.rm_1 = totalSecondsAbs / 3600 | 0;
    this.sm_1 = (totalSecondsAbs / 60 | 0) % 60 | 0;
    this.tm_1 = totalSecondsAbs % 60 | 0;
  };
  protoOf(IncompleteUtcOffset).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteUtcOffset) {
      tmp_2 = this.qm_1 == other.qm_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.rm_1 == other.rm_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.sm_1 == other.sm_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.tm_1 == other.tm_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteUtcOffset).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.qm_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.rm_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp_0 = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.sm_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp_1 = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.tm_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
  };
  protoOf(IncompleteUtcOffset).bn = function () {
    return new IncompleteUtcOffset(this.qm_1, this.rm_1, this.sm_1, this.tm_1);
  };
  protoOf(IncompleteUtcOffset).toString = function () {
    var tmp0_safe_receiver = this.qm_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver ? '-' : '+';
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? ' ' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.rm_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.sm_1;
    var tmp_2 = toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = this.tm_1;
    return tmp_0 + tmp_1 + ':' + tmp_2 + ':' + toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
  };
  function UtcOffsetWholeHoursDirective(padding) {
    var tmp = OffsetFields_getInstance().rt_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.yt_1 = padding;
  }
  protoOf(UtcOffsetWholeHoursDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetWholeHoursDirective) {
      tmp = this.yt_1.equals(other.yt_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetWholeHoursDirective).hashCode = function () {
    return this.yt_1.hashCode();
  };
  function Companion_4() {
  }
  protoOf(Companion_4).zt = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new UtcOffsetFormat(builder.vn());
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Builder_1(actualBuilder) {
    this.au_1 = actualBuilder;
  }
  protoOf(Builder_1).vo = function () {
    return this.au_1;
  };
  protoOf(Builder_1).zo = function (structure) {
    this.au_1.yo(structure);
  };
  protoOf(Builder_1).ap = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function UtcOffsetFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.bu_1 = actualFormat;
  }
  protoOf(UtcOffsetFormat).sp = function () {
    return this.bu_1;
  };
  protoOf(UtcOffsetFormat).cu = function (value) {
    // Inline function 'kotlin.apply' call
    var this_0 = new IncompleteUtcOffset();
    this_0.fo(value);
    return this_0;
  };
  protoOf(UtcOffsetFormat).up = function (value) {
    return this.cu(value instanceof UtcOffset ? value : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).du = function (intermediate) {
    return intermediate.ko();
  };
  protoOf(UtcOffsetFormat).wp = function (intermediate) {
    return this.du(intermediate instanceof IncompleteUtcOffset ? intermediate : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).xp = function () {
    return get_emptyIncompleteUtcOffset();
  };
  function OffsetFields$sign$1() {
    this.eu_1 = new PropertyAccessor(isNegative$factory_0());
  }
  protoOf(OffsetFields$sign$1).um = function () {
    return this.eu_1;
  };
  protoOf(OffsetFields$sign$1).fu = function (obj) {
    var tmp;
    var tmp_0;
    var tmp0_elvis_lhs = obj.an();
    if ((tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) === 0) {
      var tmp1_elvis_lhs = obj.wm();
      tmp_0 = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp2_elvis_lhs = obj.ym();
      tmp = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OffsetFields$sign$1).gu = function (obj) {
    return this.fu((!(obj == null) ? isInterface(obj, UtcOffsetFieldContainer) : false) ? obj : THROW_CCE());
  };
  function OffsetFields() {
    OffsetFields_instance = this;
    var tmp = this;
    tmp.qt_1 = new OffsetFields$sign$1();
    var tmp_0 = this;
    var tmp0_accessor = new PropertyAccessor(totalHoursAbs$factory_0());
    var tmp1_sign = this.qt_1;
    tmp_0.rt_1 = new UnsignedFieldSpec(tmp0_accessor, 0, 18, VOID, 0, tmp1_sign);
    var tmp_1 = this;
    var tmp0_accessor_0 = new PropertyAccessor(minutesOfHour$factory_0());
    var tmp1_sign_0 = this.qt_1;
    tmp_1.st_1 = new UnsignedFieldSpec(tmp0_accessor_0, 0, 59, VOID, 0, tmp1_sign_0);
    var tmp_2 = this;
    var tmp0_accessor_1 = new PropertyAccessor(secondsOfMinute$factory_0());
    var tmp1_sign_1 = this.qt_1;
    tmp_2.tt_1 = new UnsignedFieldSpec(tmp0_accessor_1, 0, 59, VOID, 0, tmp1_sign_1);
  }
  var OffsetFields_instance;
  function OffsetFields_getInstance() {
    if (OffsetFields_instance == null)
      new OffsetFields();
    return OffsetFields_instance;
  }
  function AbstractWithOffsetBuilder() {
  }
  function UtcOffsetMinuteOfHourDirective(padding) {
    var tmp = OffsetFields_getInstance().st_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.lu_1 = padding;
  }
  protoOf(UtcOffsetMinuteOfHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetMinuteOfHourDirective) {
      tmp = this.lu_1.equals(other.lu_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetMinuteOfHourDirective).hashCode = function () {
    return this.lu_1.hashCode();
  };
  function UtcOffsetSecondOfMinuteDirective(padding) {
    var tmp = OffsetFields_getInstance().tt_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.qu_1 = padding;
  }
  protoOf(UtcOffsetSecondOfMinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetSecondOfMinuteDirective) {
      tmp = this.qu_1.equals(other.qu_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).hashCode = function () {
    return this.qu_1.hashCode();
  };
  function ISO_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_4;
    return tmp.zt(ISO_OFFSET$delegate$lambda$lambda);
  }
  function ISO_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.pn('z');
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.hn();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.op();
    optional($this$optional, VOID, ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.qp();
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_4;
    return tmp.zt(ISO_OFFSET_BASIC$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.pn('z');
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.hn();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.op();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.qp();
    return Unit_instance;
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_4;
    return tmp.zt(FOUR_DIGIT_OFFSET$delegate$lambda$lambda);
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$build.hn();
    $this$build.op();
    return Unit_instance;
  }
  function ISO_OFFSET$factory() {
    return getPropertyCallableRef('ISO_OFFSET', 0, KProperty0, function () {
      return get_ISO_OFFSET();
    }, null);
  }
  function FOUR_DIGIT_OFFSET$factory() {
    return getPropertyCallableRef('FOUR_DIGIT_OFFSET', 0, KProperty0, function () {
      return get_FOUR_DIGIT_OFFSET();
    }, null);
  }
  function totalHoursAbs$factory_0() {
    return getPropertyCallableRef('totalHoursAbs', 1, KMutableProperty1, function (receiver) {
      return receiver.an();
    }, function (receiver, value) {
      return receiver.zm(value);
    });
  }
  function minutesOfHour$factory_0() {
    return getPropertyCallableRef('minutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.wm();
    }, function (receiver, value) {
      return receiver.vm(value);
    });
  }
  function secondsOfMinute$factory_0() {
    return getPropertyCallableRef('secondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.ym();
    }, function (receiver, value) {
      return receiver.xm(value);
    });
  }
  function isNegative$factory_0() {
    return getPropertyCallableRef('isNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.um();
    }, function (receiver, value) {
      return receiver.pm(value);
    });
  }
  var properties_initialized_UtcOffsetFormat_kt_6y9jku;
  function _init_properties_UtcOffsetFormat_kt__9r9ddw() {
    if (!properties_initialized_UtcOffsetFormat_kt_6y9jku) {
      properties_initialized_UtcOffsetFormat_kt_6y9jku = true;
      ISO_OFFSET$delegate = lazy(ISO_OFFSET$delegate$lambda);
      ISO_OFFSET_BASIC$delegate = lazy(ISO_OFFSET_BASIC$delegate$lambda);
      FOUR_DIGIT_OFFSET$delegate = lazy(FOUR_DIGIT_OFFSET$delegate$lambda);
      emptyIncompleteUtcOffset = new IncompleteUtcOffset();
    }
  }
  function AppendableFormatStructure() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.xo_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).vn = function () {
    return new ConcatenatedFormatStructure(this.xo_1);
  };
  protoOf(AppendableFormatStructure).yo = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.xo_1.h(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.hq_1.k();
        while (_iterator__ex2g4s.l()) {
          var element = _iterator__ex2g4s.m();
          this.xo_1.h(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.ru(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.br_1 = field;
    this.cr_1 = minDigits;
    this.dr_1 = maxDigits;
    this.er_1 = spacePadding;
    this.fr_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.cr_1 == null || this.cr_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.cr_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.dr_1 == null || this.cr_1 == null || this.dr_1 >= this.cr_1)) {
      var message_0 = 'The maximum number of digits (' + this.dr_1 + ') is less than the minimum number of digits (' + this.cr_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).gr = function () {
    return this.br_1;
  };
  protoOf(SignedIntFieldFormatDirective).eq = function () {
    var tmp = Accessor$getterNotNull$ref(this.br_1.su());
    var tmp0_elvis_lhs = this.cr_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.fr_1);
    return !(this.er_1 == null) ? new SpacePaddedFormatter(formatter, this.er_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).gq = function () {
    return SignedIntParser(this.cr_1, this.dr_1, this.er_1, this.br_1.su(), this.br_1.p2(), this.fr_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.ru(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.mr_1 = field;
    this.nr_1 = minDigits;
    this.or_1 = spacePadding;
    this.pr_1 = this.mr_1.zu_1;
    // Inline function 'kotlin.require' call
    if (!(this.nr_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.nr_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.pr_1 >= this.nr_1)) {
      var message_0 = 'The maximum number of digits (' + this.pr_1 + ') is less than the minimum number of digits (' + this.nr_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.or_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.or_1 > this.nr_1)) {
        var message_1 = 'The space padding (' + this.or_1 + ') should be more than the minimum number of digits (' + this.nr_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).gr = function () {
    return this.mr_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).eq = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.mr_1.tu_1), this.nr_1);
    return !(this.or_1 == null) ? new SpacePaddedFormatter(formatter, this.or_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).gq = function () {
    return spaceAndZeroPaddedUnsignedInt(this.nr_1, this.pr_1, this.or_1, this.mr_1.tu_1, this.mr_1.wu_1);
  };
  function getStringValue($this, target) {
    // Inline function 'kotlin.let' call
    var it = $this.ur_1.tu_1.ru(target);
    var tmp0_elvis_lhs = getOrNull($this.vr_1, it - $this.ur_1.uu_1 | 0);
    return tmp0_elvis_lhs == null ? 'The value ' + it + ' of ' + $this.ur_1.wu_1 + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString($outer) {
    this.av_1 = $outer;
  }
  protoOf(AssignableString).bv = function (container, newValue) {
    var tmp0_safe_receiver = this.av_1.ur_1.tu_1.cv(container, this.av_1.vr_1.t1(newValue) + this.av_1.ur_1.uu_1 | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.av_1.vr_1.p(tmp0_safe_receiver - this.av_1.ur_1.uu_1 | 0);
    }
    return tmp;
  };
  protoOf(AssignableString).cv = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.bv(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString).p2 = function () {
    return this.av_1.wr_1;
  };
  function NamedUnsignedIntFieldFormatDirective$getStringValue$ref($boundThis) {
    var l = function (p0) {
      return getStringValue($boundThis, p0);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedUnsignedIntFieldFormatDirective(field, values, name) {
    this.ur_1 = field;
    this.vr_1 = values;
    this.wr_1 = name;
    // Inline function 'kotlin.require' call
    if (!(this.vr_1.n() === ((this.ur_1.vu_1 - this.ur_1.uu_1 | 0) + 1 | 0))) {
      var message = 'The number of values (' + this.vr_1.n() + ') in ' + toString(this.vr_1) + ' does not match the range of the field (' + ((this.ur_1.vu_1 - this.ur_1.uu_1 | 0) + 1 | 0) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NamedUnsignedIntFieldFormatDirective).gr = function () {
    return this.ur_1;
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).eq = function () {
    return new StringFormatterStructure(NamedUnsignedIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).gq = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.vr_1, new AssignableString(this), 'one of ' + toString(this.vr_1) + ' for ' + this.wr_1)), emptyList());
  };
  function Accessor$getterNotNull$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.ru(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.mt_1 = field;
    this.nt_1 = minDigits;
    this.ot_1 = maxDigits;
    this.pt_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).gr = function () {
    return this.mt_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).eq = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_1(this.mt_1.su()), this.nt_1, this.ot_1, this.pt_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).gq = function () {
    return new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new FractionPartConsumer(this.nt_1, this.ot_1, this.mt_1.su(), this.mt_1.p2())))), emptyList());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.p2() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.dv_1 = accessor;
    this.ev_1 = name;
    this.fv_1 = defaultValue;
    this.gv_1 = sign;
  }
  protoOf(GenericFieldSpec).su = function () {
    return this.dv_1;
  };
  protoOf(GenericFieldSpec).p2 = function () {
    return this.ev_1;
  };
  protoOf(GenericFieldSpec).hv = function () {
    return this.fv_1;
  };
  protoOf(GenericFieldSpec).iv = function () {
    return this.gv_1;
  };
  function PropertyAccessor(property) {
    this.jv_1 = property;
  }
  protoOf(PropertyAccessor).p2 = function () {
    return this.jv_1.callableName;
  };
  protoOf(PropertyAccessor).kv = function (container, newValue) {
    var oldValue = this.jv_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.jv_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).cv = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.kv(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).lv = function (container) {
    return this.jv_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.p2() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.tu_1 = accessor;
    this.uu_1 = minValue;
    this.vu_1 = maxValue;
    this.wu_1 = name;
    this.xu_1 = defaultValue;
    this.yu_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.vu_1 < 10) {
      tmp_0 = 1;
    } else if (this.vu_1 < 100) {
      tmp_0 = 2;
    } else if (this.vu_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.vu_1 + ' is too large');
    }
    tmp.zu_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).su = function () {
    return this.tu_1;
  };
  protoOf(UnsignedFieldSpec).p2 = function () {
    return this.wu_1;
  };
  protoOf(UnsignedFieldSpec).hv = function () {
    return this.xu_1;
  };
  protoOf(UnsignedFieldSpec).iv = function () {
    return this.yu_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.p2() + ' (default value is ' + toString_1(this.hv()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.cq_1 = protoOf(ConcatenatedFormatStructure).eq.call(this);
    this.dq_1 = protoOf(ConcatenatedFormatStructure).gq.call(this);
  }
  protoOf(CachedFormatStructure).eq = function () {
    return this.cq_1;
  };
  protoOf(CachedFormatStructure).gq = function () {
    return this.dq_1;
  };
  function BasicFormatStructure(directive) {
    this.mv_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.mv_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.mv_1, other.mv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.mv_1);
  };
  protoOf(BasicFormatStructure).gq = function () {
    return this.mv_1.gq();
  };
  protoOf(BasicFormatStructure).eq = function () {
    return this.mv_1.eq();
  };
  function ConstantFormatStructure(string) {
    this.nv_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.nv_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.nv_1 === other.nv_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.nv_1);
  };
  protoOf(ConstantFormatStructure).gq = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.nv_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.nv_1, 0))) {
        var tmp0 = this.nv_1;
        var tmp$ret$4;
        $l$block: {
          // Inline function 'kotlin.text.takeWhile' call
          var inductionVariable = 0;
          var last = tmp0.length;
          if (inductionVariable < last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var it = charSequenceGet(tmp0, index);
              if (!isAsciiDigit(it)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$4 = tmp0.substring(0, index);
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$4 = tmp0;
        }
        this_1.h(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$4))));
        var tmp2 = this.nv_1;
        var tmp$ret$8;
        $l$block_0: {
          // Inline function 'kotlin.text.dropWhile' call
          var inductionVariable_0 = 0;
          var last_0 = charSequenceLength(tmp2) - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var it_0 = charSequenceGet(tmp2, index_0);
              if (!isAsciiDigit(it_0)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$8 = tmp2.substring(index_0);
                break $l$block_0;
              }
            }
             while (inductionVariable_0 <= last_0);
          tmp$ret$8 = '';
        }
        tmp_0 = tmp$ret$8;
      } else {
        tmp_0 = this.nv_1;
      }
      var suffix = tmp_0;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(suffix) > 0) {
        if (isAsciiDigit(charSequenceGet(suffix, suffix.length - 1 | 0))) {
          var tmp$ret$13;
          $l$block_1: {
            // Inline function 'kotlin.text.dropLastWhile' call
            var inductionVariable_1 = get_lastIndex(suffix);
            if (0 <= inductionVariable_1)
              do {
                var index_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + -1 | 0;
                var it_1 = charSequenceGet(suffix, index_1);
                if (!isAsciiDigit(it_1)) {
                  // Inline function 'kotlin.text.substring' call
                  var endIndex = index_1 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$13 = suffix.substring(0, endIndex);
                  break $l$block_1;
                }
              }
               while (0 <= inductionVariable_1);
            tmp$ret$13 = '';
          }
          this_1.h(new PlainStringParserOperation(tmp$ret$13));
          var tmp$ret$17;
          $l$block_2: {
            // Inline function 'kotlin.text.takeLastWhile' call
            var inductionVariable_2 = get_lastIndex(suffix);
            if (0 <= inductionVariable_2)
              do {
                var index_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                var it_2 = charSequenceGet(suffix, index_2);
                if (!isAsciiDigit(it_2)) {
                  // Inline function 'kotlin.text.substring' call
                  var startIndex = index_2 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$17 = suffix.substring(startIndex);
                  break $l$block_2;
                }
              }
               while (0 <= inductionVariable_2);
            tmp$ret$17 = suffix;
          }
          this_1.h(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$17))));
        } else {
          this_1.h(new PlainStringParserOperation(suffix));
        }
      }
      tmp = this_1.l5();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).eq = function () {
    return new ConstantStringFormatterStructure(this.nv_1);
  };
  function formatter$checkIfAllNegative(this$0, value) {
    var seenNonZero = false;
    var tmp0_iterator = this$0.qv_1.k();
    $l$loop: while (tmp0_iterator.l()) {
      var check = tmp0_iterator.m();
      if (check.um().lv(value) === true)
        seenNonZero = true;
      else if (check.gu(value))
        continue $l$loop;
      else
        return false;
    }
    return seenNonZero;
  }
  function SignedFormatStructure$parser$lambda(this$0) {
    return function (value, isNegative) {
      var tmp0_iterator = this$0.qv_1.k();
      while (tmp0_iterator.l()) {
        var field = tmp0_iterator.m();
        var wasNegative = field.um().lv(value) === true;
        field.um().cv(value, !(isNegative === wasNegative));
      }
      return Unit_instance;
    };
  }
  function SignedFormatStructure$formatter$checkIfAllNegative$ref(this$0) {
    var l = function (p0) {
      return formatter$checkIfAllNegative(this$0, p0);
    };
    l.callableName = 'checkIfAllNegative';
    return l;
  }
  function SignedFormatStructure(format, withPlusSign) {
    this.ov_1 = format;
    this.pv_1 = withPlusSign;
    var tmp = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = basicFormats(this.ov_1);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.k();
    while (_iterator__ex2g4s.l()) {
      var element = _iterator__ex2g4s.m();
      var tmp0_safe_receiver = element.gr().iv();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.h(tmp0_safe_receiver);
      }
    }
    tmp.qv_1 = toSet(destination);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.qv_1.o()) {
      var message = 'Signed format must contain at least one field with a sign';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SignedFormatStructure).toString = function () {
    return 'SignedFormatStructure(' + toString(this.ov_1) + ')';
  };
  protoOf(SignedFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SignedFormatStructure) {
      tmp_0 = equals(this.ov_1, other.ov_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.pv_1 === other.pv_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SignedFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.ov_1)) + getBooleanHashCode(this.pv_1) | 0;
  };
  protoOf(SignedFormatStructure).gq = function () {
    return concat(listOf([new ParserStructure(listOf_0(new SignParser(SignedFormatStructure$parser$lambda(this), this.pv_1, 'sign for ' + toString(this.qv_1))), emptyList()), this.ov_1.gq()]));
  };
  protoOf(SignedFormatStructure).eq = function () {
    var innerFormat = this.ov_1.eq();
    return new SignedFormatter(innerFormat, SignedFormatStructure$formatter$checkIfAllNegative$ref(this), this.pv_1);
  };
  function Companion_5() {
  }
  protoOf(Companion_5).rv = function (field) {
    var default_0 = field.hv();
    // Inline function 'kotlin.require' call
    if (!!(default_0 == null)) {
      var message = "The field '" + field.p2() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.su(), default_0);
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function access$_get_accessor__yxxs4k($this) {
    return $this.sv_1;
  }
  function access$_get_defaultValue__8tt04b($this) {
    return $this.tv_1;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    this.sv_1 = accessor;
    this.tv_1 = defaultValue;
  }
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var tmp0_iterator = this$0.wv_1.k();
      while (tmp0_iterator.l()) {
        var field = tmp0_iterator.m();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        access$_get_accessor__yxxs4k(field).cv(it, access$_get_defaultValue__8tt04b(field));
      }
      return Unit_instance;
    };
  }
  function Accessor$getter$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.lv(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.xv(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.yv(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.uv_1 = onZero;
    this.vv_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.vv_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.k();
    while (_iterator__ex2g4s.l()) {
      var item = _iterator__ex2g4s.m();
      var tmp$ret$0 = item.gr();
      destination.h(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = distinct(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.k();
    while (_iterator__ex2g4s_0.l()) {
      var item_0 = _iterator__ex2g4s_0.m();
      var tmp$ret$3 = Companion_instance_5.rv(item_0);
      destination_0.h(tmp$ret$3);
    }
    tmp.wv_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.uv_1 + ', ' + toString(this.vv_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.uv_1 === other.uv_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.vv_1, other.vv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.uv_1)) + hashCode(this.vv_1) | 0;
  };
  protoOf(OptionalFormatStructure).gq = function () {
    var tmp = emptyList();
    var tmp_0 = this.vv_1.gq();
    var tmp_1 = (new ConstantFormatStructure(this.uv_1)).gq();
    var tmp_2;
    if (this.wv_1.o()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf_0(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf([tmp_0, concat(listOf([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).eq = function () {
    var formatter = this.vv_1.eq();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.wv_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.k();
    while (_iterator__ex2g4s.l()) {
      var item = _iterator__ex2g4s.m();
      // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.isDefaultComparisonPredicate' call
      var tmp = access$_get_defaultValue__8tt04b(item);
      var tmp$ret$1 = new ComparisonPredicate(tmp, Accessor$getter$ref(access$_get_accessor__yxxs4k(item)));
      destination.h(tmp$ret$1);
    }
    var predicate = conjunctionPredicate(destination);
    var tmp_0;
    if (predicate instanceof Truth) {
      tmp_0 = new ConstantStringFormatterStructure(this.uv_1);
    } else {
      var tmp_1 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.uv_1));
      tmp_0 = new ConditionalFormatter(listOf([tmp_1, to(Truth$test$ref(Truth_instance), formatter)]));
    }
    return tmp_0;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.zv_1 = mainFormat;
    this.aw_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.aw_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.zv_1, other.zv_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.aw_1, other.aw_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.zv_1)) + hashCode(this.aw_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).gq = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    this_0.h(this.zv_1.gq());
    var tmp0_iterator = this.aw_1.k();
    while (tmp0_iterator.l()) {
      var format = tmp0_iterator.m();
      this_0.h(format.gq());
    }
    var tmp$ret$3 = this_0.l5();
    return new ParserStructure(tmp, tmp$ret$3);
  };
  protoOf(AlternativesParsingFormatStructure).eq = function () {
    return this.zv_1.eq();
  };
  function ConcatenatedFormatStructure(formats) {
    this.hq_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.hq_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.hq_1, other.hq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.hq_1);
  };
  protoOf(ConcatenatedFormatStructure).gq = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.hq_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.k();
    while (_iterator__ex2g4s.l()) {
      var item = _iterator__ex2g4s.m();
      var tmp$ret$0 = item.gq();
      destination.h(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).eq = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.hq_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.k();
    while (_iterator__ex2g4s.l()) {
      var item = _iterator__ex2g4s.m();
      var tmp$ret$0 = item.eq();
      destination.h(tmp$ret$0);
    }
    var formatters = destination;
    var tmp;
    if (formatters.n() === 1) {
      tmp = single(formatters);
    } else {
      tmp = new ConcatenatedFormatter(formatters);
    }
    return tmp;
  };
  function NonConcatenatedFormatStructure() {
  }
  function basicFormats(format) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    basicFormats$_anonymous_$rec_hkf0lf(this_0, format);
    return this_0.l5();
  }
  function basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format) {
    if (format instanceof BasicFormatStructure) {
      $this_buildList.h(format.mv_1);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.hq_1.k();
        while (_iterator__ex2g4s.l()) {
          var element = _iterator__ex2g4s.m();
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.ov_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.zv_1);
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_0 = format.aw_1.k();
              while (_iterator__ex2g4s_0.l()) {
                var element_0 = _iterator__ex2g4s_0.m();
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.vv_1);
              }
            }
          }
        }
      }
    }
  }
  function conjunctionPredicate(predicates) {
    return predicates.o() ? Truth_instance : predicates.n() === 1 ? single(predicates) : new ConjunctionPredicate(predicates);
  }
  function ComparisonPredicate(expectedValue, getter) {
    this.bw_1 = expectedValue;
    this.cw_1 = getter;
  }
  protoOf(ComparisonPredicate).xv = function (value) {
    return equals(this.cw_1(value), this.bw_1);
  };
  function Truth() {
  }
  protoOf(Truth).yv = function (value) {
    return true;
  };
  protoOf(Truth).xv = function (value) {
    return this.yv((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    return Truth_instance;
  }
  function ConjunctionPredicate(predicates) {
    this.dw_1 = predicates;
  }
  protoOf(ConjunctionPredicate).xv = function (value) {
    var tmp0 = this.dw_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.k();
      while (_iterator__ex2g4s.l()) {
        var element = _iterator__ex2g4s.m();
        if (!element.xv(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function FormatterStructure() {
  }
  function SpacePaddedFormatter(formatter, padding) {
    this.fw_1 = formatter;
    this.gw_1 = padding;
  }
  protoOf(SpacePaddedFormatter).ew = function (obj, builder, minusNotRequired) {
    // Inline function 'kotlin.let' call
    var it = StringBuilder_init_$Create$();
    this.fw_1.ew(obj, it, minusNotRequired);
    var string = it.toString();
    // Inline function 'kotlin.repeat' call
    var times = this.gw_1 - string.length | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.j8(_Char___init__impl__6a9atx(32));
      }
       while (inductionVariable < times);
    builder.i(string);
  };
  function SignedFormatter(formatter, allSubFormatsNegative, alwaysOutputSign) {
    this.hw_1 = formatter;
    this.iw_1 = allSubFormatsNegative;
    this.jw_1 = alwaysOutputSign;
  }
  protoOf(SignedFormatter).ew = function (obj, builder, minusNotRequired) {
    var tmp;
    if (!minusNotRequired && this.iw_1(obj)) {
      tmp = _Char___init__impl__6a9atx(45);
    } else if (this.jw_1) {
      tmp = _Char___init__impl__6a9atx(43);
    } else {
      tmp = null;
    }
    var sign = tmp;
    var tmp_0 = sign;
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null)
      null;
    else {
      var tmp_1 = sign;
      // Inline function 'kotlin.let' call
      var it = (tmp_1 == null ? null : new Char(tmp_1)).g1_1;
      builder.j8(it);
    }
    var tmp_2;
    if (minusNotRequired) {
      tmp_2 = true;
    } else {
      var tmp_3 = sign;
      tmp_2 = equals(tmp_3 == null ? null : new Char(tmp_3), new Char(_Char___init__impl__6a9atx(45)));
    }
    this.hw_1.ew(obj, builder, tmp_2);
  };
  function ConditionalFormatter(formatters) {
    this.kw_1 = formatters;
  }
  protoOf(ConditionalFormatter).ew = function (obj, builder, minusNotRequired) {
    var tmp0_iterator = this.kw_1.k();
    while (tmp0_iterator.l()) {
      var tmp1_loop_parameter = tmp0_iterator.m();
      var condition = tmp1_loop_parameter.de();
      var formatter = tmp1_loop_parameter.ee();
      if (condition(obj)) {
        formatter.ew(obj, builder, minusNotRequired);
        return Unit_instance;
      }
    }
  };
  function ConcatenatedFormatter(formatters) {
    this.lw_1 = formatters;
  }
  protoOf(ConcatenatedFormatter).ew = function (obj, builder, minusNotRequired) {
    var tmp0_iterator = this.lw_1.k();
    while (tmp0_iterator.l()) {
      var formatter = tmp0_iterator.m();
      formatter.ew(obj, builder, minusNotRequired);
    }
  };
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.mw_1 = number;
    this.nw_1 = zeroPadding;
    this.ow_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.nw_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.nw_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.nw_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.nw_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFormatterStructure).ew = function (obj, builder, minusNotRequired) {
    var innerBuilder = StringBuilder_init_$Create$();
    // Inline function 'kotlin.let' call
    var it = this.mw_1(obj);
    var number = minusNotRequired && it < 0 ? -it | 0 : it;
    if (!(this.ow_1 == null) && number >= get_POWERS_OF_TEN()[this.ow_1]) {
      innerBuilder.j8(_Char___init__impl__6a9atx(43));
    }
    // Inline function 'kotlin.math.absoluteValue' call
    if (abs(number) < get_POWERS_OF_TEN()[this.nw_1 - 1 | 0]) {
      if (number >= 0) {
        innerBuilder.ka(number + get_POWERS_OF_TEN()[this.nw_1] | 0).pa(0);
      } else {
        innerBuilder.ka(number - get_POWERS_OF_TEN()[this.nw_1] | 0).pa(1);
      }
    } else {
      innerBuilder.ka(number);
    }
    builder.i(innerBuilder);
  };
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.pw_1 = number;
    this.qw_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.qw_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.qw_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.qw_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.qw_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(UnsignedIntFormatterStructure).ew = function (obj, builder, minusNotRequired) {
    var num = this.pw_1(obj);
    var numberStr = num.toString();
    // Inline function 'kotlin.repeat' call
    var times = this.qw_1 - numberStr.length | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.j8(_Char___init__impl__6a9atx(48));
      }
       while (inductionVariable < times);
    builder.i(numberStr);
  };
  function StringFormatterStructure(string) {
    this.rw_1 = string;
  }
  protoOf(StringFormatterStructure).ew = function (obj, builder, minusNotRequired) {
    builder.i(this.rw_1(obj));
  };
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.sw_1 = number;
    this.tw_1 = minDigits;
    this.uw_1 = maxDigits;
    this.vw_1 = zerosToAdd;
    var containsArg = this.tw_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'The minimum number of digits (' + this.tw_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.tw_1;
    var containsArg_0 = this.uw_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'The maximum number of digits (' + this.uw_1 + ') is not in range ' + this.tw_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(DecimalFractionFormatterStructure).ew = function (obj, builder, minusNotRequired) {
    var number = this.sw_1(obj);
    var numberWithRequiredPrecision = number.is(this.uw_1);
    var zerosToStrip = 0;
    while (this.uw_1 > (this.tw_1 + zerosToStrip | 0) && (numberWithRequiredPrecision % get_POWERS_OF_TEN()[zerosToStrip + 1 | 0] | 0) === 0) {
      zerosToStrip = zerosToStrip + 1 | 0;
    }
    var zerosToAddBack = this.vw_1.p((this.uw_1 - zerosToStrip | 0) - 1 | 0);
    if (zerosToStrip >= zerosToAddBack)
      zerosToStrip = zerosToStrip - zerosToAddBack | 0;
    var digitsToOutput = this.uw_1 - zerosToStrip | 0;
    var numberToOutput = numberWithRequiredPrecision / get_POWERS_OF_TEN()[zerosToStrip] | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = (numberToOutput + get_POWERS_OF_TEN()[digitsToOutput] | 0).toString().substring(1);
    builder.i(tmp$ret$1);
  };
  function ConstantStringFormatterStructure(string) {
    this.ww_1 = string;
  }
  protoOf(ConstantStringFormatterStructure).ew = function (obj, builder, minusNotRequired) {
    builder.i(this.ww_1);
  };
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.zw_1 = minLength;
    this.ax_1 = maxLength;
    this.bx_1 = setter;
    var containsArg = this.zw_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'Invalid minimum length ' + this.zw_1 + ' for field ' + this.dx_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.zw_1;
    var containsArg_0 = this.ax_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'Invalid maximum length ' + this.ax_1 + ' for field ' + this.dx_1 + ': expected ' + this.zw_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).ex = function (storage, input, start, end) {
    return (end - start | 0) < this.zw_1 ? new TooFewDigits(this.zw_1) : (end - start | 0) > this.ax_1 ? new TooManyDigits(this.ax_1) : setWithoutReassigning(this.bx_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.hx_1 = expected;
  }
  protoOf(ConstantNumberConsumer).ex = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.hx_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.hx_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.cx_1 = length;
    this.dx_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.cx_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).ix = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.jx_1 = maxDigits;
  }
  protoOf(TooManyDigits).ix = function () {
    return 'expected at most ' + this.jx_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.kx_1 = minDigits;
  }
  protoOf(TooFewDigits).ix = function () {
    return 'expected at least ' + this.kx_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.lx_1 = expected;
  }
  protoOf(WrongConstant).ix = function () {
    return "expected '" + this.lx_1 + "'";
  };
  function Conflicting(conflicting) {
    this.mx_1 = conflicting;
  }
  protoOf(Conflicting).ix = function () {
    return "attempted to overwrite the existing value '" + toString(this.mx_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.cv(receiver, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var conflictingValue = tmp;
    return new Conflicting(conflictingValue);
  }
  function parseAsciiInt(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
      }
       while (inductionVariable < end);
    return result;
  }
  function UnsignedIntConsumer(minLength, maxLength, setter, name, multiplyByMinus1) {
    multiplyByMinus1 = multiplyByMinus1 === VOID ? false : multiplyByMinus1;
    NumberConsumer.call(this, minLength == maxLength ? minLength : null, name);
    this.px_1 = minLength;
    this.qx_1 = maxLength;
    this.rx_1 = setter;
    this.sx_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).gg(this.a()))) {
      var message = 'Invalid length for field ' + this.dx_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).ex = function (storage, input, start, end) {
    var tmp;
    if (!(this.qx_1 == null) && (end - start | 0) > this.qx_1) {
      tmp = new TooManyDigits(this.qx_1);
    } else if (!(this.px_1 == null) && (end - start | 0) < this.px_1) {
      tmp = new TooFewDigits(this.px_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.rx_1, storage, this.sx_1 ? -result | 0 : result);
    }
    return tmp;
  };
  function parseAsciiIntOrNull(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
        if (result < 0)
          return null;
      }
       while (inductionVariable < end);
    return result;
  }
  function ParseError(position, message) {
    this.tx_1 = position;
    this.ux_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).vx = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_6).wx = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function _Parser___init__impl__gdyfby(commands) {
    return commands;
  }
  function _get_commands__a20n1($this) {
    return $this;
  }
  function Parser__match_impl_nzt83d($this, input, initialContainer, startIndex) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse' call
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.xx_1.bn();
      var inputPosition = state.zx_1;
      var parserStructure = state.yx_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        var inductionVariable = 0;
        var last = parserStructure.by_1.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.by_1.p(ix).dy(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                var it = _ParseResult___get_value__impl__86mnxf(this_0);
                errors.h(it);
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.cy_1.o()) {
          if (false || inputPosition === charSequenceLength(input)) {
            return output;
          } else {
            var tmp_0 = inputPosition;
            var it_0 = new ParseError(tmp_0, Parser$match$lambda);
            errors.h(it_0);
          }
        } else {
          var inductionVariable_0 = parserStructure.cy_1.n() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.h(new ParserState(output, parserStructure.cy_1.p(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    // Inline function 'kotlin.collections.sortByDescending' call
    if (errors.n() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_1 = Parser$match$lambda_0;
      var tmp$ret$8 = new sam$kotlin_Comparator$0(tmp_1);
      sortWith(errors, tmp$ret$8);
    }
    throw new ParseException(errors);
  }
  function Parser__match$default_impl_x2xlti($this, input, initialContainer, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    var tmp;
    if ($super === VOID) {
      tmp = Parser__match_impl_nzt83d($this, input, initialContainer, startIndex);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).ey.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.xx_1 = output;
    this.yx_1 = parserStructure;
    this.zx_1 = inputPosition;
  }
  function Parser__toString_impl_x33iea($this) {
    return 'Parser(commands=' + $this.toString() + ')';
  }
  function Parser__hashCode_impl_bbxllf($this) {
    return hashCode($this);
  }
  function Parser__equals_impl_djxokv($this, other) {
    if (!(other instanceof Parser))
      return false;
    var tmp0_other_with_cast = other instanceof Parser ? other.ay_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.fy_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ic = function (a, b) {
    return this.fy_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ic(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).m3 = function () {
    return this.fy_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m3(), other.m3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.m3());
  };
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.tx_1;
    var tmp$ret$1 = a.tx_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.ay_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.ay_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.ay_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.ay_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.by_1 = operations;
    this.cy_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.by_1, ', ') + '(' + joinToString(this.cy_1, ';') + ')';
  };
  function ParseException(errors) {
    Exception_init_$Init$(formatError(errors), this);
    captureStack(this, ParseException);
  }
  function concat(_this__u8e3s4) {
    // Inline function 'kotlin.collections.foldRight' call
    var accumulator = new ParserStructure(emptyList(), emptyList());
    if (!_this__u8e3s4.o()) {
      var iterator = _this__u8e3s4.r(_this__u8e3s4.n());
      while (iterator.p4()) {
        var tmp2 = iterator.q4();
        var acc = accumulator;
        accumulator = concat$append(tmp2, acc);
      }
    }
    var naiveParser = accumulator;
    return concat$simplify(naiveParser, emptyList());
  }
  function formatError(errors) {
    if (errors.n() === 1) {
      return 'Position ' + errors.p(0).tx_1 + ': ' + errors.p(0).ux_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$_0(imul(averageMessageLength, errors.n()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.cy_1.o()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.by_1, other.by_1), other.cy_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.cy_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.k();
      while (_iterator__ex2g4s.l()) {
        var item = _iterator__ex2g4s.m();
        var tmp$ret$0 = concat$append(item, other);
        destination.h(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.by_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.by_1.k();
    while (tmp0_iterator.l()) {
      var op = tmp0_iterator.m();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.q(op.gy_1);
        } else {
          currentNumberSpan = toMutableList(op.gy_1);
        }
      } else {
        if (op instanceof UnconditionalModification) {
          unconditionalModificationsForTails.h(op);
        } else {
          if (!(currentNumberSpan == null)) {
            newOperations.h(new NumberSpanParserOperation(currentNumberSpan));
            currentNumberSpan = null;
          }
          newOperations.h(op);
        }
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _this__u8e3s4.cy_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.k();
    while (_iterator__ex2g4s.l()) {
      var element = _iterator__ex2g4s.m();
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.by_1.o()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.cy_1;
        var tmp_0;
        if (this_0.o()) {
          tmp_0 = listOf_0(simplified);
        } else {
          tmp_0 = this_0;
        }
        tmp = tmp_0;
      } else {
        tmp = listOf_0(simplified);
      }
      var list = tmp;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (destination.o()) {
      tmp_1 = listOf_0(new ParserStructure(unconditionalModificationsForTails, emptyList()));
    } else {
      tmp_1 = destination;
    }
    var mergedTails = tmp_1;
    var tmp_2;
    if (currentNumberSpan == null) {
      tmp_2 = new ParserStructure(newOperations, mergedTails);
    } else {
      var tmp$ret$8;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(mergedTails, Collection)) {
          tmp_3 = mergedTails.o();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = mergedTails.k();
        while (_iterator__ex2g4s_0.l()) {
          var element_0 = _iterator__ex2g4s_0.m();
          var tmp0_safe_receiver = firstOrNull(element_0.by_1);
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_4 = tmp0_safe_receiver instanceof NumberSpanParserOperation;
          }
          if (tmp_4 === true) {
            tmp$ret$8 = false;
            break $l$block_0;
          }
        }
        tmp$ret$8 = true;
      }
      if (tmp$ret$8) {
        newOperations.h(new NumberSpanParserOperation(currentNumberSpan));
        tmp_2 = new ParserStructure(newOperations, mergedTails);
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(mergedTails, 10));
        var _iterator__ex2g4s_1 = mergedTails.k();
        while (_iterator__ex2g4s_1.l()) {
          var item = _iterator__ex2g4s_1.m();
          var firstOperation = firstOrNull(item.by_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.gy_1))), drop(item.by_1, 1)), item.cy_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.cy_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.by_1), item.cy_1);
            }
          }
          var tmp$ret$12 = tmp_5;
          destination_0.h(tmp$ret$12);
        }
        var newTails = destination_0;
        tmp_2 = new ParserStructure(newOperations, newTails);
      }
    }
    return tmp_2;
  }
  function formatError$lambda(it) {
    return 'position ' + it.tx_1 + ": '" + it.ux_1() + "'";
  }
  function SignedIntParser(minDigits, maxDigits, spacePadding, setter, name, plusOnExceedsWidth) {
    var parsers = mutableListOf([spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, true)]);
    if (!(plusOnExceedsWidth == null)) {
      parsers.h(spaceAndZeroPaddedUnsignedInt(minDigits, plusOnExceedsWidth, spacePadding, setter, name));
      parsers.h(new ParserStructure(listOf([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(plusOnExceedsWidth + 1 | 0, maxDigits, setter, name, false)))]), emptyList()));
    } else {
      parsers.h(spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name));
    }
    return new ParserStructure(emptyList(), parsers);
  }
  function spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, withMinus) {
    withMinus = withMinus === VOID ? false : withMinus;
    var minNumberLength = (minDigits == null ? 1 : minDigits) + (withMinus ? 1 : 0) | 0;
    var tmp;
    if (maxDigits == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = withMinus ? maxDigits + 1 | 0 : maxDigits;
    }
    var tmp2_elvis_lhs = tmp;
    var maxNumberLength = tmp2_elvis_lhs == null ? 2147483647 : tmp2_elvis_lhs;
    var spacePadding_0 = spacePadding == null ? 0 : spacePadding;
    // Inline function 'kotlin.comparisons.minOf' call
    var maxPaddedNumberLength = Math.min(maxNumberLength, spacePadding_0);
    if (minNumberLength >= maxPaddedNumberLength)
      return spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, maxNumberLength);
    var accumulated = spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, minNumberLength);
    var inductionVariable = minNumberLength;
    if (inductionVariable < maxPaddedNumberLength)
      do {
        var accumulatedWidth = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        accumulated = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, accumulatedWidth + 1 | 0, accumulatedWidth + 1 | 0), concat(listOf([new ParserStructure(listOf_0(new PlainStringParserOperation(' ')), emptyList()), accumulated]))]));
      }
       while (inductionVariable < maxPaddedNumberLength);
    var tmp_0;
    if (spacePadding_0 > maxNumberLength) {
      var prepadding = new PlainStringParserOperation(repeat(' ', spacePadding_0 - maxNumberLength | 0));
      tmp_0 = concat(listOf([new ParserStructure(listOf_0(prepadding), emptyList()), accumulated]));
    } else if (spacePadding_0 === maxNumberLength) {
      tmp_0 = accumulated;
    } else {
      var r = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, spacePadding_0 + 1 | 0, maxNumberLength), accumulated]));
      tmp_0 = r;
    }
    return tmp_0;
  }
  function TrieNode(children, isTerminal) {
    var tmp;
    if (children === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = children;
    }
    children = tmp;
    isTerminal = isTerminal === VOID ? false : isTerminal;
    this.jy_1 = children;
    this.ky_1 = isTerminal;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.ly_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).ic = function (a, b) {
    return this.ly_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.ic(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).m3 = function () {
    return this.ly_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m3(), other.m3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.m3());
  };
  function _init_$reduceTrie(trie) {
    var tmp0_iterator = trie.jy_1.k();
    while (tmp0_iterator.l()) {
      var child = tmp0_iterator.m().ee();
      _init_$reduceTrie(child);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var newChildren = ArrayList_init_$Create$_0();
    var tmp2_iterator = trie.jy_1.k();
    while (tmp2_iterator.l()) {
      var tmp3_loop_parameter = tmp2_iterator.m();
      var key = tmp3_loop_parameter.de();
      var child_0 = tmp3_loop_parameter.ee();
      if (!child_0.ky_1 && child_0.jy_1.n() === 1) {
        var tmp4_container = single(child_0.jy_1);
        var grandChildKey = tmp4_container.de();
        var grandChild = tmp4_container.ee();
        newChildren.h(to(key + grandChildKey, grandChild));
      } else {
        newChildren.h(to(key, child_0));
      }
    }
    trie.jy_1.f2();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = StringSetParserOperation$reduceTrie$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp$ret$2 = sortedWith(newChildren, tmp$ret$1);
    trie.jy_1.q(tmp$ret$2);
  }
  function StringSetParserOperation$lambda($key) {
    return function (it) {
      var tmp$ret$0 = it.be_1;
      return compareValues(tmp$ret$0, $key);
    };
  }
  function StringSetParserOperation$consume$lambda(this$0, $input, $startIndex, $index) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = $index._v;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.ny_1 + ' but got ' + tmp$ret$0;
    };
  }
  function StringSetParserOperation$reduceTrie$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.be_1;
    var tmp$ret$1 = b.be_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function StringSetParserOperation(strings, setter, whatThisExpects) {
    this.my_1 = setter;
    this.ny_1 = whatThisExpects;
    this.oy_1 = new TrieNode();
    var tmp0_iterator = strings.k();
    while (tmp0_iterator.l()) {
      var string = tmp0_iterator.m();
      // Inline function 'kotlin.text.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!(charSequenceLength(string) > 0)) {
        var message = 'Found an empty string in ' + this.ny_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var node = this.oy_1;
      var inductionVariable = 0;
      var last = string.length;
      while (inductionVariable < last) {
        var char = charSequenceGet(string, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2 = node.jy_1;
        // Inline function 'kotlin.collections.binarySearchBy' call
        var key = toString_0(char);
        var toIndex = tmp2.n();
        var searchResult = binarySearch(tmp2, 0, toIndex, StringSetParserOperation$lambda(key));
        var tmp;
        if (searchResult < 0) {
          // Inline function 'kotlin.also' call
          var this_0 = new TrieNode();
          node.jy_1.h2((-searchResult | 0) - 1 | 0, to(toString_0(char), this_0));
          tmp = this_0;
        } else {
          tmp = node.jy_1.p(searchResult).ce_1;
        }
        node = tmp;
      }
      // Inline function 'kotlin.require' call
      if (!!node.ky_1) {
        var message_0 = "The string '" + string + "' was passed several times";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      node.ky_1 = true;
    }
    _init_$reduceTrie(this.oy_1);
  }
  protoOf(StringSetParserOperation).dy = function (storage, input, startIndex) {
    var node = this.oy_1;
    var index = {_v: startIndex};
    var lastMatch = null;
    loop: while (index._v <= charSequenceLength(input)) {
      if (node.ky_1)
        lastMatch = index._v;
      var tmp0_iterator = node.jy_1.k();
      while (tmp0_iterator.l()) {
        var tmp1_loop_parameter = tmp0_iterator.m();
        var key = tmp1_loop_parameter.de();
        var child = tmp1_loop_parameter.ee();
        if (startsWith(input, key, index._v)) {
          node = child;
          index._v = index._v + key.length | 0;
          continue loop;
        }
      }
      break loop;
    }
    var tmp;
    if (!(lastMatch == null)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = lastMatch;
      var tmp$ret$0 = toString(charSequenceSubSequence(input, startIndex, endIndex));
      tmp = setWithoutReassigning_0(this.my_1, storage, tmp$ret$0, startIndex, lastMatch);
    } else {
      var tmp_0 = Companion_instance_6;
      tmp = tmp_0.wx(startIndex, StringSetParserOperation$consume$lambda(this, input, startIndex, index));
    }
    return tmp;
  };
  function _get_whatThisExpects__4pg11j($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.gy_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.k();
    while (_iterator__ex2g4s.l()) {
      var item = _iterator__ex2g4s.m();
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.dx_1);
      destination.h(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.iy_1) {
      tmp = 'a number with at least ' + $this.hy_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.hy_1 + ' digits: ' + toString(consumerLengths);
    }
    return tmp;
  }
  function NumberSpanParserOperation$consume$lambda(this$0) {
    return function () {
      return 'Unexpected end of input: yet to parse ' + _get_whatThisExpects__4pg11j(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_0($digitsInRow, this$0) {
    return function () {
      return 'Only found ' + $digitsInRow._v + ' digits in a row, but need to parse ' + _get_whatThisExpects__4pg11j(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_1($numberString, this$0, $i, $error) {
    return function () {
      return "Can not interpret the string '" + $numberString + "' as " + this$0.gy_1.p($i).dx_1 + ': ' + $error.ix();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.gy_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.gy_1.k();
    while (_iterator__ex2g4s.l()) {
      var element = _iterator__ex2g4s.m();
      var tmp_0 = sum;
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.hy_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.gy_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0, Collection)) {
        tmp_2 = tmp0.o();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.k();
      while (_iterator__ex2g4s_0.l()) {
        var element_0 = _iterator__ex2g4s_0.m();
        if (element_0.a() == null) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    tmp_1.iy_1 = tmp$ret$2;
    var tmp0_0 = this.gy_1;
    var tmp$ret$4;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var tmp_3;
      if (isInterface(tmp0_0, Collection)) {
        tmp_3 = tmp0_0.o();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$4 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s_1 = tmp0_0.k();
      while (_iterator__ex2g4s_1.l()) {
        var element_1 = _iterator__ex2g4s_1.m();
        var tmp0_elvis_lhs_0 = element_1.a();
        if (!((tmp0_elvis_lhs_0 == null ? 2147483647 : tmp0_elvis_lhs_0) > 0)) {
          tmp$ret$4 = false;
          break $l$block_2;
        }
      }
      tmp$ret$4 = true;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!tmp$ret$4) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp3 = this.gy_1;
    var tmp$ret$9;
    $l$block_3: {
      // Inline function 'kotlin.collections.count' call
      var tmp_4;
      if (isInterface(tmp3, Collection)) {
        tmp_4 = tmp3.o();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$9 = 0;
        break $l$block_3;
      }
      var count = 0;
      var _iterator__ex2g4s_2 = tmp3.k();
      while (_iterator__ex2g4s_2.l()) {
        var element_2 = _iterator__ex2g4s_2.m();
        if (element_2.a() == null) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$9 = count;
    }
    // Inline function 'kotlin.require' call
    if (!(tmp$ret$9 <= 1)) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_1 = this.gy_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_3 = tmp0_1.k();
      while (_iterator__ex2g4s_3.l()) {
        var element_3 = _iterator__ex2g4s_3.m();
        if (element_3.a() == null) {
          destination.h(element_3);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
      var _iterator__ex2g4s_4 = destination.k();
      while (_iterator__ex2g4s_4.l()) {
        var item = _iterator__ex2g4s_4.m();
        var tmp$ret$14 = item.dx_1;
        destination_0.h(tmp$ret$14);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).dy = function (storage, input, startIndex) {
    if ((startIndex + this.hy_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_6;
      return tmp.wx(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.hy_1) {
      var tmp_0 = Companion_instance_6;
      return tmp_0.wx(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.gy_1.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.gy_1.p(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.hy_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.gy_1.p(i).ex(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_instance_6;
          var tmp_2 = index;
          return tmp_1.wx(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_6.vx(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.py_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.py_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.py_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.py_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.py_1, 0))) {
      var message_0 = "String '" + this.py_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.py_1, this.py_1.length - 1 | 0))) {
      var message_1 = "String '" + this.py_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).dy = function (storage, input, startIndex) {
    if ((startIndex + this.py_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_6;
      return tmp.wx(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.py_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.py_1, i))) {
          var tmp_0 = Companion_instance_6;
          return tmp_0.wx(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_6.vx(startIndex + this.py_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.py_1 + "'";
  };
  function SignParser$consume$lambda(this$0, $char) {
    return function () {
      return 'Expected ' + this$0.sy_1 + ' but got ' + toString_0($char);
    };
  }
  function SignParser(isNegativeSetter, withPlusSign, whatThisExpects) {
    this.qy_1 = isNegativeSetter;
    this.ry_1 = withPlusSign;
    this.sy_1 = whatThisExpects;
  }
  protoOf(SignParser).dy = function (storage, input, startIndex) {
    if (startIndex >= charSequenceLength(input))
      return Companion_instance_6.vx(startIndex);
    var char = charSequenceGet(input, startIndex);
    if (char === _Char___init__impl__6a9atx(45)) {
      this.qy_1(storage, true);
      return Companion_instance_6.vx(startIndex + 1 | 0);
    }
    if (char === _Char___init__impl__6a9atx(43) && this.ry_1) {
      this.qy_1(storage, false);
      return Companion_instance_6.vx(startIndex + 1 | 0);
    }
    var tmp = Companion_instance_6;
    return tmp.wx(startIndex, SignParser$consume$lambda(this, char));
  };
  protoOf(SignParser).toString = function () {
    return this.sy_1;
  };
  function UnconditionalModification(operation) {
    this.ty_1 = operation;
  }
  protoOf(UnconditionalModification).dy = function (storage, input, startIndex) {
    this.ty_1(storage);
    return Companion_instance_6.vx(startIndex);
  };
  function setWithoutReassigning_0(_this__u8e3s4, receiver, value, position, nextIndex) {
    var conflictingValue = _this__u8e3s4.cv(receiver, value);
    var tmp;
    if (conflictingValue === null) {
      tmp = Companion_instance_6.vx(nextIndex);
    } else {
      var tmp_0 = Companion_instance_6;
      tmp = tmp_0.wx(position, setWithoutReassigning$lambda(conflictingValue, value, _this__u8e3s4));
    }
    return tmp;
  }
  function spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths($withMinus, $setter, $name, minNumberLength, maxNumberLength) {
    // Inline function 'kotlin.check' call
    if (!(maxNumberLength >= (1 + ($withMinus ? 1 : 0) | 0))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    if ($withMinus) {
      this_0.h(new PlainStringParserOperation('-'));
    }
    this_0.h(new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(minNumberLength - ($withMinus ? 1 : 0) | 0, maxNumberLength - ($withMinus ? 1 : 0) | 0, $setter, $name, $withMinus))));
    var tmp$ret$4 = this_0.l5();
    return new ParserStructure(tmp$ret$4, emptyList());
  }
  function setWithoutReassigning$lambda($conflictingValue, $value, $this_setWithoutReassigning) {
    return function () {
      return "Attempting to assign conflicting values '" + toString_1($conflictingValue) + "' and '" + toString_1($value) + "' to field '" + $this_setWithoutReassigning.p2() + "'";
    };
  }
  function get_POWERS_OF_TEN() {
    _init_properties_math_kt__tgcmt4();
    return POWERS_OF_TEN;
  }
  var POWERS_OF_TEN;
  function DecimalFraction(fractionalPart, digits) {
    this.gs_1 = fractionalPart;
    this.hs_1 = digits;
    // Inline function 'kotlin.require' call
    if (!(this.hs_1 >= 0)) {
      var message = 'Digits must be non-negative, but was ' + this.hs_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).is = function (newDigits) {
    return newDigits === this.hs_1 ? this.gs_1 : newDigits > this.hs_1 ? imul(this.gs_1, get_POWERS_OF_TEN()[newDigits - this.hs_1 | 0]) : this.gs_1 / get_POWERS_OF_TEN()[this.hs_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).uy = function (other) {
    var tmp0 = this.hs_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = other.hs_1;
    // Inline function 'kotlin.let' call
    var maxPrecision = Math.max(tmp0, b);
    return compareTo(this.is(maxPrecision), other.is(maxPrecision));
  };
  protoOf(DecimalFraction).d = function (other) {
    return this.uy(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.uy(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DecimalFraction).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var denominator = get_POWERS_OF_TEN()[this.hs_1];
    this_0.ka(this.gs_1 / denominator | 0);
    this_0.j8(_Char___init__impl__6a9atx(46));
    this_0.i8(removePrefix((denominator + (this.gs_1 % denominator | 0) | 0).toString(), '1'));
    return this_0.toString();
  };
  protoOf(DecimalFraction).hashCode = function () {
    throw UnsupportedOperationException_init_$Create$('DecimalFraction is not supposed to be used as a hash key');
  };
  var properties_initialized_math_kt_amm9wq;
  function _init_properties_math_kt__tgcmt4() {
    if (!properties_initialized_math_kt_amm9wq) {
      properties_initialized_math_kt_amm9wq = true;
      // Inline function 'kotlin.intArrayOf' call
      POWERS_OF_TEN = new Int32Array([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    }
  }
  function isAsciiDigit(_this__u8e3s4) {
    return _Char___init__impl__6a9atx(48) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(57) : false;
  }
  function asciiDigitToInt(_this__u8e3s4) {
    return Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(48));
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_instance;
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  var $ENTRIES;
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toDayOfWeek(_this__u8e3s4) {
    return DayOfWeek(_this__u8e3s4.value());
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).l3(), 999999999);
    tmp.lk_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).l3(), 0);
    tmp_0.mk_1 = new Instant_0(tmp$ret$3);
    this.nk_1 = new Instant_0(Instant.MIN);
    this.ok_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_7).kk = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion_7).vy = function (epochMilliseconds) {
    var tmp;
    try {
      // Inline function 'kotlin.Long.div' call
      var tmp_0 = epochMilliseconds.z2(toLong(1000));
      // Inline function 'kotlin.Long.rem' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$2 = epochMilliseconds.a3(toLong(1000)).y2(toLong(1000000));
      tmp = this.wy(tmp_0, tmp$ret$2);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_1 = epochMilliseconds.a1(new Long(0, 0)) > 0 ? this.ok_1 : this.nk_1;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(Companion_7).xy = function (input, format) {
    var tmp;
    try {
      tmp = format.zp(input).mo();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_1("Failed to parse an instant from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_7).yy = function (input, format, $super) {
    format = format === VOID ? Formats_getInstance().wn_1 : format;
    return $super === VOID ? this.xy(input, format) : $super.xy.call(this, input, format);
  };
  protoOf(Companion_7).wy = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlin.floorDiv' call
      var other = new Long(1000000000, 0);
      var q = nanosecondAdjustment.z2(other);
      if (nanosecondAdjustment.k3(other).a1(new Long(0, 0)) < 0 && !q.y2(other).equals(nanosecondAdjustment)) {
        q = q.c3();
      }
      var tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      // Inline function 'kotlin.mod' call
      var other_0 = new Long(1000000000, 0);
      var r = nanosecondAdjustment.a3(other_0);
      var nos = r.w2(other_0.i3(r.k3(other_0).i3(r.j3(r.d3())).g3(63))).c1();
      // Inline function 'kotlinx.datetime.jsTry' call
      var tmp$ret$3 = Instant.ofEpochSecond(secs.l3(), nos);
      tmp = new Instant_0(tmp$ret$3);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (!isJodaDateTimeException(e)) {
          tmp_1 = !(e instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw e;
        tmp_0 = epochSeconds.a1(new Long(0, 0)) > 0 ? this.ok_1 : this.nk_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_7).jo = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      var tmp$ret$1 = Instant.ofEpochSecond(epochSeconds.l3(), nanosecondAdjustment);
      tmp = new Instant_0(tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = epochSeconds.a1(new Long(0, 0)) > 0 ? this.ok_1 : this.nk_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Instant_0(value) {
    Companion_getInstance_7();
    this.go_1 = value;
  }
  protoOf(Instant_0).ho = function () {
    return numberToLong(this.go_1.epochSecond());
  };
  protoOf(Instant_0).io = function () {
    return numberToInt(this.go_1.nano());
  };
  protoOf(Instant_0).zy = function () {
    // Inline function 'kotlin.Long.times' call
    var tmp2 = this.ho().y2(toLong(1000));
    // Inline function 'kotlin.Long.plus' call
    var other = this.io() / 1000000 | 0;
    return tmp2.w2(toLong(other));
  };
  protoOf(Instant_0).az = function (other) {
    return this.go_1.compareTo(other.go_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.az(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.go_1 === other.go_1 || this.go_1.equals(other.go_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.go_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.go_1.toString();
  };
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.bz_1 = new LocalDate_0(LocalDate.MIN);
    this.cz_1 = new LocalDate_0(LocalDate.MAX);
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      tmp = LocalDate.of(year, monthNumber, dayOfMonth);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDate_0.call($this, tmp);
    return $this;
  }
  function LocalDate_init_$Create$(year, monthNumber, dayOfMonth) {
    return LocalDate_init_$Init$(year, monthNumber, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_0(value) {
    Companion_getInstance_8();
    this.oo_1 = value;
  }
  protoOf(LocalDate_0).ul = function () {
    return this.oo_1.year();
  };
  protoOf(LocalDate_0).sl = function () {
    return this.oo_1.monthValue();
  };
  protoOf(LocalDate_0).ol = function () {
    return this.oo_1.dayOfMonth();
  };
  protoOf(LocalDate_0).iq = function () {
    return toDayOfWeek(this.oo_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.oo_1 === other.oo_1 || this.oo_1.equals(other.oo_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.oo_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.oo_1.toString();
  };
  protoOf(LocalDate_0).dz = function (other) {
    return this.oo_1.compareTo(other.oo_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.dz(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).po = function () {
    return numberToInt(this.oo_1.toEpochDay());
  };
  function Companion_9() {
    Companion_instance_9 = this;
    this.ez_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.fz_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_9();
    this.zn_1 = value;
  }
  protoOf(LocalDateTime_0).ao = function () {
    return new LocalDate_0(this.zn_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).co = function () {
    return new LocalTime_0(this.zn_1.toLocalTime());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.zn_1 === other.zn_1 || this.zn_1.equals(other.zn_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.zn_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.zn_1.toString();
  };
  protoOf(LocalDateTime_0).gz = function (other) {
    return this.zn_1.compareTo(other.zn_1);
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.gz(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      tmp = LocalTime.of(hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.hz_1 = new LocalTime_0(LocalTime.MIN);
    this.iz_1 = new LocalTime_0(LocalTime.MAX);
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function LocalTime_0(value) {
    Companion_getInstance_10();
    this.qo_1 = value;
  }
  protoOf(LocalTime_0).gm = function () {
    return this.qo_1.hour();
  };
  protoOf(LocalTime_0).km = function () {
    return this.qo_1.minute();
  };
  protoOf(LocalTime_0).om = function () {
    return this.qo_1.second();
  };
  protoOf(LocalTime_0).mm = function () {
    return numberToInt(this.qo_1.nano());
  };
  protoOf(LocalTime_0).ro = function () {
    return this.qo_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.qo_1 === other.qo_1 || this.qo_1.equals(other.qo_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.qo_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.qo_1.toString();
  };
  protoOf(LocalTime_0).jz = function (other) {
    return this.qo_1.compareTo(other.qo_1);
  };
  protoOf(LocalTime_0).d = function (other) {
    return this.jz(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
  function toLocalDateTime(_this__u8e3s4, offset) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlin.let' call
      var p0 = LocalDateTime.ofInstant(_this__u8e3s4.go_1, offset.so_1);
      tmp = new LocalDateTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  var isoFormat$delegate;
  var isoBasicFormat$delegate;
  var fourDigitsFormat$delegate;
  function Companion_11() {
    Companion_instance_11 = this;
    this.pk_1 = new UtcOffset(ZoneOffset.UTC);
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function Formats_0() {
  }
  protoOf(Formats_0).in = function () {
    return get_ISO_OFFSET();
  };
  protoOf(Formats_0).tn = function () {
    return get_FOUR_DIGIT_OFFSET();
  };
  var Formats_instance_0;
  function Formats_getInstance_0() {
    return Formats_instance_0;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_11();
    this.so_1 = zoneOffset;
  }
  protoOf(UtcOffset).to = function () {
    return this.so_1.totalSeconds();
  };
  protoOf(UtcOffset).hashCode = function () {
    return this.so_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.so_1 === other.so_1 || this.so_1.equals(other.so_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.so_1.toString();
  };
  function UtcOffset_0(hours, minutes, seconds) {
    hours = hours === VOID ? null : hours;
    minutes = minutes === VOID ? null : minutes;
    seconds = seconds === VOID ? null : seconds;
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      var tmp_0;
      if (!(hours == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        var tmp_1 = ZoneOffset;
        var tmp_2 = minutes == null ? 0 : minutes;
        var tmp$ret$1 = tmp_1.ofHoursMinutesSeconds(hours, tmp_2, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$1);
      } else if (!(minutes == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        var tmp_3 = ZoneOffset;
        var tmp_4 = minutes / 60 | 0;
        var tmp_5 = minutes % 60 | 0;
        var tmp$ret$3 = tmp_3.ofHoursMinutesSeconds(tmp_4, tmp_5, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$3);
      } else {
        // Inline function 'kotlinx.datetime.jsTry' call
        var tmp_6 = ZoneOffset;
        var tmp$ret$5 = tmp_6.ofTotalSeconds(seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$5);
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_7;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_8;
        if (isJodaDateTimeException(e)) {
          throw IllegalArgumentException_init_$Create$_0(e);
        } else {
          throw e;
        }
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function isoFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffsetId().toFormatter(ResolverStyle.STRICT);
  }
  function isoBasicFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHmmss', 'Z').toFormatter(ResolverStyle.STRICT);
  }
  function fourDigitsFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHMM', '+0000').toFormatter(ResolverStyle.STRICT);
  }
  var properties_initialized_UtcOffset_kt_4gxffr;
  function _init_properties_UtcOffset_kt__93zod7() {
    if (!properties_initialized_UtcOffset_kt_4gxffr) {
      properties_initialized_UtcOffset_kt_4gxffr = true;
      isoFormat$delegate = lazy(isoFormat$delegate$lambda);
      isoBasicFormat$delegate = lazy(isoBasicFormat$delegate$lambda);
      fourDigitsFormat$delegate = lazy(fourDigitsFormat$delegate$lambda);
    }
  }
  function safeMultiply(a, b) {
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.d3();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.y2(b);
    if (!total.z2(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeAdd(a, b) {
    var sum = a.w2(b);
    if (a.k3(sum).a1(new Long(0, 0)) < 0 && a.k3(b).a1(new Long(0, 0)) >= 0) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: post-declaration
  protoOf(Builder).bp = appendAlternativeParsingImpl;
  protoOf(Builder).cp = appendOptionalImpl;
  protoOf(Builder).pn = chars;
  protoOf(Builder).vn = build;
  protoOf(Builder).dp = addFormatStructureForDate;
  protoOf(Builder).ep = addFormatStructureForTime;
  protoOf(Builder).fp = year;
  protoOf(Builder).on = year$default;
  protoOf(Builder).gp = monthNumber;
  protoOf(Builder).hp = monthNumber$default;
  protoOf(Builder).nn = monthName;
  protoOf(Builder).kn = dayOfMonth;
  protoOf(Builder).ip = dayOfMonth$default;
  protoOf(Builder).sn = dayOfWeek;
  protoOf(Builder).cn = date;
  protoOf(Builder).jp = hour;
  protoOf(Builder).dn = hour$default;
  protoOf(Builder).kp = minute;
  protoOf(Builder).en = minute$default;
  protoOf(Builder).lp = second;
  protoOf(Builder).fn = second$default;
  protoOf(Builder).gn = secondFraction;
  protoOf(Builder).mp = offsetHours;
  protoOf(Builder).hn = offsetHours$default;
  protoOf(Builder).np = offsetMinutesOfHour;
  protoOf(Builder).op = offsetMinutesOfHour$default;
  protoOf(Builder).pp = offsetSecondsOfMinute;
  protoOf(Builder).qp = offsetSecondsOfMinute$default;
  protoOf(Builder).jn = offset;
  protoOf(Builder_0).bp = appendAlternativeParsingImpl;
  protoOf(Builder_0).cp = appendOptionalImpl;
  protoOf(Builder_0).pn = chars;
  protoOf(Builder_0).vn = build;
  protoOf(Builder_0).fp = year;
  protoOf(Builder_0).on = year$default;
  protoOf(Builder_0).gp = monthNumber;
  protoOf(Builder_0).hp = monthNumber$default;
  protoOf(Builder_0).kn = dayOfMonth;
  protoOf(Builder_0).ip = dayOfMonth$default;
  protoOf(IncompleteLocalTime).dm = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).em = get_fractionOfSecond;
  protoOf(Builder_1).bp = appendAlternativeParsingImpl;
  protoOf(Builder_1).cp = appendOptionalImpl;
  protoOf(Builder_1).pn = chars;
  protoOf(Builder_1).vn = build;
  protoOf(Builder_1).mp = offsetHours;
  protoOf(Builder_1).hn = offsetHours$default;
  protoOf(Builder_1).np = offsetMinutesOfHour;
  protoOf(Builder_1).op = offsetMinutesOfHour$default;
  protoOf(Builder_1).pp = offsetSecondsOfMinute;
  protoOf(Builder_1).qp = offsetSecondsOfMinute$default;
  protoOf(PropertyAccessor).ru = getterNotNull;
  protoOf(SpacePaddedFormatter).fq = format$default;
  protoOf(SignedFormatter).fq = format$default;
  protoOf(ConditionalFormatter).fq = format$default;
  protoOf(ConcatenatedFormatter).fq = format$default;
  protoOf(SignedIntFormatterStructure).fq = format$default;
  protoOf(UnsignedIntFormatterStructure).fq = format$default;
  protoOf(StringFormatterStructure).fq = format$default;
  protoOf(DecimalFractionFormatterStructure).fq = format$default;
  protoOf(ConstantStringFormatterStructure).fq = format$default;
  //endregion
  //region block: init
  System_instance = new System();
  Companion_instance = new Companion();
  Companion_instance_2 = new Companion_2();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Truth_instance = new Truth();
  ExpectedInt_instance = new ExpectedInt();
  Companion_instance_6 = new Companion_6();
  Formats_instance_0 = new Formats_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Formats_getInstance;
  _.$_$.b = System_instance;
  _.$_$.c = Companion_getInstance_7;
  _.$_$.d = format;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
