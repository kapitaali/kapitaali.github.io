(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'array-mpbignum'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'array-mpbignum'.");
    }
    globalThis['array-mpbignum'] = factory(typeof globalThis['array-mpbignum'] === 'undefined' ? {} : globalThis['array-mpbignum'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.d7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q6;
  var equals = kotlin_kotlin.$_$.i6;
  var Long = kotlin_kotlin.$_$.aa;
  var initMetadataForInterface = kotlin_kotlin.$_$.r6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var isFinite = kotlin_kotlin.$_$.ka;
  var toBits = kotlin_kotlin.$_$.ta;
  var toLong = kotlin_kotlin.$_$.f7;
  var initMetadataForObject = kotlin_kotlin.$_$.s6;
  var charSequenceLength = kotlin_kotlin.$_$.d6;
  var charSequenceGet = kotlin_kotlin.$_$.c6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u1;
  var Char = kotlin_kotlin.$_$.s9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var numberRangeToNumber = kotlin_kotlin.$_$.y6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.x1;
  var numberToChar = kotlin_kotlin.$_$.z6;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var Exception = kotlin_kotlin.$_$.w9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y;
  var captureStack = kotlin_kotlin.$_$.z5;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  var VOID = kotlin_kotlin.$_$.d;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.fa;
  var toString = kotlin_kotlin.$_$.g7;
  var hashCode = kotlin_kotlin.$_$.o6;
  var toInt = kotlin_kotlin.$_$.j9;
  var numberToInt = kotlin_kotlin.$_$.a7;
  var toLong_0 = kotlin_kotlin.$_$.l9;
  var numberToLong = kotlin_kotlin.$_$.b7;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  function isInteger() {
    return equals(this.pj(), BigIntConstants_getInstance().ij_1);
  }
  function rangeFitsInLong() {
    if (!this.ck()) {
      return false;
    }
    var d = this.oj();
    return compareTo_0(d, new Long(0, -2147483648)) >= 0 && compareTo_0(d, new Long(-1, 2147483647)) <= 0;
  }
  initMetadataForInterface(Rational, 'Rational');
  initMetadataForObject(BigIntConstants, 'BigIntConstants');
  initMetadataForClass(LongExpressionOverflow, 'LongExpressionOverflow', VOID, Exception);
  initMetadataForClass(RationalStandard, 'RationalStandard', VOID, VOID, [Rational]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(BigInt_0, 'BigInt');
  initMetadataForClass(BigIntWrapper, 'BigIntWrapper');
  //endregion
  var BIGINT_10;
  var RAT_10;
  function Companion() {
    Companion_instance = this;
    this.ej_1 = make_0(Companion_getInstance(), BigIntConstants_getInstance().hj_1, BigIntConstants_getInstance().ij_1);
    this.fj_1 = make_0(Companion_getInstance(), BigIntConstants_getInstance().ij_1, BigIntConstants_getInstance().ij_1);
    this.gj_1 = make_0(Companion_getInstance(), BigIntConstants_getInstance().ij_1, BigIntConstants_getInstance().jj_1);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Rational() {
  }
  function compareTo(_this__u8e3s4, other) {
    _init_properties_bigint_rational_kt__jw4vra();
    return _this__u8e3s4.vj(toRational(other));
  }
  function toRational(_this__u8e3s4) {
    _init_properties_bigint_rational_kt__jw4vra();
    return make(Companion_getInstance(), _this__u8e3s4, new Long(1, 0));
  }
  function rationalise(_this__u8e3s4) {
    _init_properties_bigint_rational_kt__jw4vra();
    if (!isFinite(_this__u8e3s4)) {
      throw IllegalArgumentException_init_$Create$('value is not finite: ' + _this__u8e3s4);
    }
    var bits = toBits(_this__u8e3s4);
    var s = bits.g3(63).equals(new Long(0, 0)) ? 1 : -1;
    var e = bits.g3(52).i3(new Long(2047, 0)).c1();
    var eAdjusted = e - 1075 | 0;
    var m = e === 0 ? bits.i3(new Long(-1, 1048575)).f3(1) : bits.i3(new Long(-1, 1048575)).j3(new Long(0, 1048576));
    var tmp;
    if (eAdjusted < 0) {
      var tmp_0 = Companion_getInstance();
      var tmp_1 = Companion_instance_0;
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$0 = m.y2(toLong(s));
      tmp = make_0(tmp_0, of_0(tmp_1, tmp$ret$0), pow(BigIntConstants_getInstance().jj_1, -eAdjusted | 0));
    } else {
      var tmp_2 = Companion_getInstance();
      var tmp_3 = pow(BigIntConstants_getInstance().jj_1, eAdjusted);
      var tmp_4 = Companion_instance_0;
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$1 = m.y2(toLong(s));
      tmp = make_0(tmp_2, times_0(tmp_3, of_0(tmp_4, tmp$ret$1)), BigIntConstants_getInstance().ij_1);
    }
    return tmp;
  }
  function toRational_0(_this__u8e3s4) {
    _init_properties_bigint_rational_kt__jw4vra();
    return make_0(Companion_getInstance(), _this__u8e3s4, BigIntConstants_getInstance().ij_1);
  }
  var properties_initialized_bigint_rational_kt_6gw144;
  function _init_properties_bigint_rational_kt__jw4vra() {
    if (!properties_initialized_bigint_rational_kt_6gw144) {
      properties_initialized_bigint_rational_kt_6gw144 = true;
      BIGINT_10 = of(Companion_instance_0, 10);
      RAT_10 = make(Companion_getInstance(), new Long(10, 0), new Long(1, 0));
    }
  }
  function get_VALID_DIGITS_LOWER() {
    _init_properties_bigint_kt__2h9db();
    return VALID_DIGITS_LOWER;
  }
  var VALID_DIGITS_LOWER;
  function get_VALID_DIGITS_UPPER() {
    _init_properties_bigint_kt__2h9db();
    return VALID_DIGITS_UPPER;
  }
  var VALID_DIGITS_UPPER;
  function BigIntConstants() {
    BigIntConstants_instance = this;
    this.hj_1 = of(Companion_instance_0, 0);
    this.ij_1 = of(Companion_instance_0, 1);
    this.jj_1 = of(Companion_instance_0, 2);
    this.kj_1 = of_0(Companion_instance_0, new Long(0, -2147483648));
    this.lj_1 = of_0(Companion_instance_0, new Long(-1, 2147483647));
    this.mj_1 = of(Companion_instance_0, -2147483648);
    this.nj_1 = of(Companion_instance_0, 2147483647);
  }
  var BigIntConstants_instance;
  function BigIntConstants_getInstance() {
    if (BigIntConstants_instance == null)
      new BigIntConstants();
    return BigIntConstants_instance;
  }
  function compareTo_0(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return compareTo_2(_this__u8e3s4, of_0(Companion_instance_0, other));
  }
  function standardParseWithBase(s, radix) {
    _init_properties_bigint_kt__2h9db();
    if (radix < 2 || radix > 36)
      throw IllegalArgumentException_init_$Create$('radix must be between 2 and 36, got: ' + radix);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(s) === 0) {
      standardParseWithBase$throwDefault(s);
    }
    var isNegative = charSequenceGet(s, 0) === _Char___init__impl__6a9atx(45);
    var start = isNegative ? 1 : 0;
    if (s.length < (start + 1 | 0)) {
      standardParseWithBase$throwDefault(s);
    }
    var curr = BigIntConstants_getInstance().hj_1;
    var inductionVariable = start;
    var last = s.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(s, i);
        // Inline function 'kotlin.let' call
        var v = get_VALID_DIGITS_LOWER().t1(new Char(ch));
        var index = v === -1 ? get_VALID_DIGITS_UPPER().t1(new Char(ch)) : v;
        if (index === -1 || index >= radix) {
          standardParseWithBase$throwDefault(s);
        }
        curr = plus(times(curr, radix), index);
      }
       while (inductionVariable < last);
    return isNegative ? unaryMinus(curr) : curr;
  }
  function toBigInt(_this__u8e3s4) {
    _init_properties_bigint_kt__2h9db();
    return of_0(Companion_instance_0, _this__u8e3s4);
  }
  function plus(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return plus_0(_this__u8e3s4, of(Companion_instance_0, other));
  }
  function times(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return times_0(_this__u8e3s4, of(Companion_instance_0, other));
  }
  function shr(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return shr_0(_this__u8e3s4, toLong(other));
  }
  function compareTo_1(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return compareTo_2(_this__u8e3s4, of(Companion_instance_0, other));
  }
  function fromDoubleFloor(_this__u8e3s4, value) {
    _init_properties_bigint_kt__2h9db();
    var remainder = value % 1;
    var tmp;
    if (remainder >= 0.0) {
      tmp = of_2(Companion_instance_0, value);
    } else {
      tmp = minus(of_2(Companion_instance_0, value), 1);
    }
    return tmp;
  }
  function div(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return div_1(_this__u8e3s4, of(Companion_instance_0, other));
  }
  function rem(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return rem_0(_this__u8e3s4, of_0(Companion_instance_0, other));
  }
  function minus(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return minus_0(_this__u8e3s4, of(Companion_instance_0, other));
  }
  function div_0(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return div_1(_this__u8e3s4, of_0(Companion_instance_0, other));
  }
  function shl(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return shl_0(_this__u8e3s4, toLong(other));
  }
  function fromDoubleCeil(_this__u8e3s4, value) {
    _init_properties_bigint_kt__2h9db();
    var remainder = value % 1;
    var tmp;
    if (remainder <= 0.0) {
      tmp = of_2(Companion_instance_0, value);
    } else {
      tmp = plus(of_2(Companion_instance_0, value), 1);
    }
    return tmp;
  }
  function pow(_this__u8e3s4, other) {
    _init_properties_bigint_kt__2h9db();
    return pow_0(_this__u8e3s4, toLong(other));
  }
  function standardParseWithBase$throwDefault($s) {
    throw NumberFormatException_init_$Create$('Invalid decimal value: ' + $s);
  }
  var properties_initialized_bigint_kt_tjgabz;
  function _init_properties_bigint_kt__2h9db() {
    if (!properties_initialized_bigint_kt_tjgabz) {
      properties_initialized_bigint_kt_tjgabz = true;
      // Inline function 'kotlin.collections.map' call
      var this_0 = numberRangeToNumber(0, 35);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var inductionVariable = this_0.u_1;
      var last = this_0.v_1;
      if (inductionVariable <= last)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var i = item;
          var tmp;
          if (i < 10) {
            // Inline function 'kotlin.code' call
            var this_1 = _Char___init__impl__6a9atx(48);
            var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
            tmp = numberToChar(tmp$ret$0 + i | 0);
          } else {
            // Inline function 'kotlin.code' call
            var this_2 = _Char___init__impl__6a9atx(97);
            var tmp$ret$1 = Char__toInt_impl_vasixd(this_2);
            tmp = numberToChar(tmp$ret$1 + (i - 10 | 0) | 0);
          }
          var tmp$ret$2 = new Char(tmp);
          destination.h(tmp$ret$2);
        }
         while (!(item === last));
      VALID_DIGITS_LOWER = destination;
      // Inline function 'kotlin.collections.map' call
      var this_3 = numberRangeToNumber(0, 35);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var inductionVariable_0 = this_3.u_1;
      var last_0 = this_3.v_1;
      if (inductionVariable_0 <= last_0)
        do {
          var item_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var i_0 = item_0;
          var tmp_0;
          if (i_0 < 10) {
            // Inline function 'kotlin.code' call
            var this_4 = _Char___init__impl__6a9atx(48);
            var tmp$ret$0_0 = Char__toInt_impl_vasixd(this_4);
            tmp_0 = numberToChar(tmp$ret$0_0 + i_0 | 0);
          } else {
            // Inline function 'kotlin.code' call
            var this_5 = _Char___init__impl__6a9atx(65);
            var tmp$ret$1_0 = Char__toInt_impl_vasixd(this_5);
            tmp_0 = numberToChar(tmp$ret$1_0 + (i_0 - 10 | 0) | 0);
          }
          var tmp$ret$2_0 = new Char(tmp_0);
          destination_0.h(tmp$ret$2_0);
        }
         while (!(item_0 === last_0));
      VALID_DIGITS_UPPER = destination_0;
    }
  }
  function LongExpressionOverflow(result) {
    Exception_init_$Init$(this);
    captureStack(this, LongExpressionOverflow);
    this.ek_1 = result;
  }
  function RationalStandard(numeratorInt, denominatorInt, isNormalised) {
    isNormalised = isNormalised === VOID ? false : isNormalised;
    var numeratorInt0;
    var denominatorInt0;
    switch (signum(denominatorInt)) {
      case 1:
        numeratorInt0 = numeratorInt;
        denominatorInt0 = denominatorInt;
        break;
      case -1:
        numeratorInt0 = unaryMinus(numeratorInt);
        denominatorInt0 = unaryMinus(denominatorInt);
        break;
      default:
        throw ArithmeticException_init_$Create$('Zero denominator');
    }
    if (isNormalised) {
      this.fk_1 = numeratorInt0;
      this.gk_1 = denominatorInt0;
    } else {
      var v = gcd(numeratorInt0, denominatorInt0);
      if (equals(v, BigIntConstants_getInstance().ij_1)) {
        this.fk_1 = numeratorInt0;
        this.gk_1 = denominatorInt0;
      } else {
        this.fk_1 = div_1(numeratorInt0, v);
        this.gk_1 = div_1(denominatorInt0, v);
      }
    }
  }
  protoOf(RationalStandard).oj = function () {
    return this.fk_1;
  };
  protoOf(RationalStandard).pj = function () {
    return this.gk_1;
  };
  protoOf(RationalStandard).bk = function () {
    return toLong_1(div_1(this.fk_1, this.gk_1));
  };
  protoOf(RationalStandard).ak = function () {
    return signum(this.fk_1) === -1 ? this.d3() : this;
  };
  protoOf(RationalStandard).qj = function (other) {
    // Inline function 'com.dhsdevelopments.mpbignum.RationalStandard.alignDenominator' call
    var num0 = this.fk_1;
    var den0 = this.gk_1;
    var num1 = other.oj();
    var den1 = other.pj();
    var tmp;
    if (equals(den0, den1)) {
      tmp = new RationalStandard(plus_0(num0, num1), den0);
    } else {
      var common = times_0(den0, den1);
      var tmp5 = times_0(num0, den1);
      var n1 = times_0(num1, den0);
      tmp = new RationalStandard(plus_0(tmp5, n1), common);
    }
    return tmp;
  };
  protoOf(RationalStandard).rj = function (other) {
    // Inline function 'com.dhsdevelopments.mpbignum.RationalStandard.alignDenominator' call
    var num0 = this.fk_1;
    var den0 = this.gk_1;
    var num1 = other.oj();
    var den1 = other.pj();
    var tmp;
    if (equals(den0, den1)) {
      tmp = new RationalStandard(minus_0(num0, num1), den0);
    } else {
      var common = times_0(den0, den1);
      var tmp5 = times_0(num0, den1);
      var n1 = times_0(num1, den0);
      tmp = new RationalStandard(minus_0(tmp5, n1), common);
    }
    return tmp;
  };
  protoOf(RationalStandard).sj = function (other) {
    return new RationalStandard(times_0(this.fk_1, other.oj()), times_0(this.gk_1, other.pj()));
  };
  protoOf(RationalStandard).tj = function (other) {
    return new RationalStandard(times_0(this.fk_1, other.pj()), times_0(this.gk_1, other.oj()));
  };
  protoOf(RationalStandard).d3 = function () {
    return new RationalStandard(unaryMinus(this.fk_1), this.gk_1);
  };
  protoOf(RationalStandard).uj = function (other) {
    // Inline function 'com.dhsdevelopments.mpbignum.RationalStandard.alignDenominator' call
    var num0 = this.fk_1;
    var den0 = this.gk_1;
    var num1 = other.oj();
    var den1 = other.pj();
    var tmp;
    if (equals(den0, den1)) {
      tmp = new RationalStandard(rem_0(num0, num1), den0);
    } else {
      var common = times_0(den0, den1);
      var tmp5 = times_0(num0, den1);
      var n1 = times_0(num1, den0);
      tmp = new RationalStandard(rem_0(tmp5, n1), common);
    }
    return tmp;
  };
  protoOf(RationalStandard).vj = function (other) {
    // Inline function 'com.dhsdevelopments.mpbignum.RationalStandard.alignDenominator' call
    var num0 = this.fk_1;
    var den0 = this.gk_1;
    var num1 = other.oj();
    var den1 = other.pj();
    var tmp;
    if (equals(den0, den1)) {
      tmp = compareTo_2(num0, num1);
    } else {
      var common = times_0(den0, den1);
      var tmp5 = times_0(num0, den1);
      var n1 = times_0(num1, den0);
      tmp = compareTo_2(tmp5, n1);
    }
    return tmp;
  };
  protoOf(RationalStandard).wj = function (other) {
    return other.equals(new Long(0, 0)) ? new RationalStandard(BigIntConstants_getInstance().ij_1, BigIntConstants_getInstance().ij_1) : signum(this.fk_1) === 0 ? this : other.a1(new Long(0, 0)) < 0 ? new RationalStandard(pow_0(this.gk_1, other.d3()), pow_0(this.fk_1, other.d3())) : new RationalStandard(pow_0(this.fk_1, other), pow_0(this.gk_1, other));
  };
  protoOf(RationalStandard).xj = function () {
    return compareTo(this, new Long(0, 0)) > 0 ? 1 : compareTo(this, new Long(0, 0)) < 0 ? -1 : 0;
  };
  protoOf(RationalStandard).yj = function () {
    var tmp;
    if (equals(this.gk_1, BigIntConstants_getInstance().ij_1)) {
      tmp = this.fk_1;
    } else if (signum(this.fk_1) === -1) {
      tmp = div_1(this.fk_1, this.gk_1);
    } else {
      tmp = plus_0(div_1(this.fk_1, this.gk_1), BigIntConstants_getInstance().ij_1);
    }
    return tmp;
  };
  protoOf(RationalStandard).zj = function () {
    var tmp;
    if (equals(this.gk_1, BigIntConstants_getInstance().ij_1)) {
      tmp = this.fk_1;
    } else if (signum(this.fk_1) === -1) {
      tmp = minus_0(div_1(this.fk_1, this.gk_1), BigIntConstants_getInstance().ij_1);
    } else {
      tmp = div_1(this.fk_1, this.gk_1);
    }
    return tmp;
  };
  protoOf(RationalStandard).l3 = function () {
    // Inline function 'kotlin.math.max' call
    var b = toString_0(this.fk_1, 2).length - 64 | 0;
    var sa = Math.max(0, b);
    // Inline function 'kotlin.math.max' call
    var b_0 = toString_0(this.gk_1, 2).length - 64 | 0;
    var sb = Math.max(0, b_0);
    var tmp = toDouble(shr(this.fk_1, sa)) / toDouble(shr(this.gk_1, sb));
    // Inline function 'kotlin.math.pow' call
    var n = sa - sb | 0;
    return tmp * Math.pow(2.0, n);
  };
  protoOf(RationalStandard).toString = function () {
    return 'Rational[' + BigInt__toString_impl_xmp9e6(this.fk_1) + ', ' + BigInt__toString_impl_xmp9e6(this.gk_1) + ']';
  };
  protoOf(RationalStandard).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof RationalStandard))
      THROW_CCE();
    if (!equals(this.fk_1, other.fk_1))
      return false;
    return equals(this.gk_1, other.gk_1);
  };
  protoOf(RationalStandard).hashCode = function () {
    var result = BigInt__hashCode_impl_fn8vs3(this.fk_1);
    result = imul(31, result) + BigInt__hashCode_impl_fn8vs3(this.gk_1) | 0;
    return result;
  };
  function standardGcd(a, b) {
    if (signum(b) === 0) {
      return get_absoluteValue(a);
    }
    if (signum(a) === 0) {
      return get_absoluteValue(b);
    }
    var a0 = a;
    var b0 = b;
    var z;
    while (!(signum(b0) === 0)) {
      z = b0;
      b0 = rem_0(a0, b0);
      a0 = z;
    }
    return get_absoluteValue(a0);
  }
  function _BigInt___init__impl__43f5te(impl) {
    return impl;
  }
  function _BigInt___get_impl__impl__c2lc93($this) {
    return $this;
  }
  function BigInt__toString_impl_xmp9e6($this) {
    return toString(_BigInt___get_inner__impl__73y59d($this));
  }
  function _BigInt___get_inner__impl__73y59d($this) {
    var tmp = _BigInt___get_impl__impl__c2lc93($this);
    return (tmp instanceof BigIntWrapper ? tmp : THROW_CCE()).hk_1;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).ik = function (v) {
    return _BigInt___init__impl__43f5te(new BigIntWrapper(v));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function BigInt__hashCode_impl_fn8vs3($this) {
    return hashCode($this);
  }
  function BigInt__equals_impl_wxlmo1($this, other) {
    if (!(other instanceof BigInt_0))
      return false;
    var tmp0_other_with_cast = other instanceof BigInt_0 ? other.jk_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BigInt_0(impl) {
    this.jk_1 = impl;
  }
  protoOf(BigInt_0).toString = function () {
    return BigInt__toString_impl_xmp9e6(this.jk_1);
  };
  protoOf(BigInt_0).hashCode = function () {
    return BigInt__hashCode_impl_fn8vs3(this.jk_1);
  };
  protoOf(BigInt_0).equals = function (other) {
    return BigInt__equals_impl_wxlmo1(this.jk_1, other);
  };
  function of(_this__u8e3s4, value) {
    var a = value;
    return _this__u8e3s4.ik(BigInt(a));
  }
  function of_0(_this__u8e3s4, value) {
    var stringified = value.toString();
    return of_1(Companion_instance_0, stringified);
  }
  function compareTo_2(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return function (a0, b0) {
      if (a0 < b0) {
        return -1;
      } else if (a0 > b0) {
        return 1;
      } else {
        return 0;
      }
    }(a, b);
  }
  function BigIntWrapper(value) {
    this.hk_1 = value;
  }
  protoOf(BigIntWrapper).equals = function (other) {
    if (!(other instanceof BigIntWrapper)) {
      return false;
    }
    var a = this.hk_1;
    var b = other.hk_1;
    var tmp = a == b;
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  };
  protoOf(BigIntWrapper).hashCode = function () {
    var a = this.hk_1;
    var tmp = BigInt.asIntN(32, a).toString();
    var s = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return toInt(s);
  };
  function of_1(_this__u8e3s4, s, radix) {
    radix = radix === VOID ? 10 : radix;
    return standardParseWithBase(s, radix);
  }
  function unaryMinus(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    return Companion_instance_0.ik(-a);
  }
  function plus_0(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return Companion_instance_0.ik(a + b);
  }
  function times_0(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return Companion_instance_0.ik(a * b);
  }
  function signum(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var tmp = function (a0) {
      if (a0 < 0) {
        return -1;
      } else if (a0 > 0) {
        return 1;
      } else {
        return 0;
      }
    }(a);
    var res = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return numberToInt(res);
  }
  function gcd(_this__u8e3s4, other) {
    return standardGcd(_this__u8e3s4, other);
  }
  function div_1(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return Companion_instance_0.ik(a / b);
  }
  function toLong_1(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var tmp = BigInt.asIntN(64, a).toString();
    var s = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return toLong_0(s);
  }
  function minus_0(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return Companion_instance_0.ik(a - b);
  }
  function rem_0(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return Companion_instance_0.ik(a % b);
  }
  function pow_0(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = other;
    return Companion_instance_0.ik(function (a0, b0) {
      return eval('a0**b0');
    }(a, BigInt(b)));
  }
  function toString_0(_this__u8e3s4, radix) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    return a.toString(radix);
  }
  function toDouble(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var tmp = Number(a);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  }
  function shr_0(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = other;
    return Companion_instance_0.ik(function (b0) {
      return a >> b0;
    }(BigInt(b)));
  }
  function get_absoluteValue(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    return Companion_instance_0.ik(function () {
      if (a < 0) {
        return -a;
      } else {
        return a;
      }
    }());
  }
  function rangeInLong(_this__u8e3s4) {
    return compareTo_2(_this__u8e3s4, BigIntConstants_getInstance().kj_1) >= 0 && compareTo_2(_this__u8e3s4, BigIntConstants_getInstance().lj_1) <= 0;
  }
  function of_2(_this__u8e3s4, value) {
    if (!isFinite(value)) {
      throw IllegalArgumentException_init_$Create$('number cannot be converted to bigint: ' + value);
    }
    var a = value;
    return _this__u8e3s4.ik(BigInt(a - a % 1));
  }
  function toInt_0(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var tmp = BigInt.asIntN(32, a).toString();
    var s = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return toInt(s);
  }
  function isqrt(_this__u8e3s4) {
    if (compareTo_1(_this__u8e3s4, 0) < 0) {
      throw ArithmeticException_init_$Create$('Argument is negative');
    }
    if (compareTo_1(_this__u8e3s4, 2) < 0) {
      return _this__u8e3s4;
    }
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var tmp = a.toString(2);
    var bitLength = ((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE()).length;
    var shift = bitLength / 2 | 0;
    var xk = shl(shr(_this__u8e3s4, shift), shift / 2 | 0);
    while (true) {
      var xk1 = shr(plus_0(div_1(_this__u8e3s4, xk), xk), 1);
      if (compareTo_2(xk1, xk) >= 0) {
        return xk;
      }
      xk = xk1;
    }
  }
  function xor(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return Companion_instance_0.ik(a ^ b);
  }
  function and(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return Companion_instance_0.ik(a & b);
  }
  function or(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = _BigInt___get_inner__impl__73y59d(other);
    return Companion_instance_0.ik(a | b);
  }
  function inv(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    return Companion_instance_0.ik(~a);
  }
  function bitLength(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var tmp = function (a0) {
      var n;
      if (a0 < 0) {
        n = BigInt(-1) - a0;
      } else {
        n = a0;
      }
      if (n == 0) {
        return 0;
      }
      return n.toString(2).length;
    }(a);
    var res = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return numberToLong(res);
  }
  function rangeInInt(_this__u8e3s4) {
    return compareTo_2(_this__u8e3s4, BigIntConstants_getInstance().mj_1) >= 0 && compareTo_2(_this__u8e3s4, BigIntConstants_getInstance().nj_1) <= 0;
  }
  function shl_0(_this__u8e3s4, other) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var b = other;
    return Companion_instance_0.ik(function (b0) {
      return a << b0;
    }(BigInt(b)));
  }
  function popcnt(_this__u8e3s4) {
    var a = _BigInt___get_inner__impl__73y59d(_this__u8e3s4);
    var tmp;
    if (a < 0) {
      var tmp_0 = (BigInt(-1) - a).toString(2);
      tmp = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
    } else {
      var tmp_1 = a.toString(2);
      tmp = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
    }
    var s = tmp;
    // Inline function 'kotlin.text.count' call
    var count = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(s)) {
      var element = charSequenceGet(s, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (element === _Char___init__impl__6a9atx(49)) {
        count = count + 1 | 0;
      }
    }
    var tmp$ret$1 = count;
    return toLong(tmp$ret$1);
  }
  function make(_this__u8e3s4, a, b) {
    return new RationalStandard(toBigInt(a), toBigInt(b));
  }
  function make_0(_this__u8e3s4, a, b) {
    return new RationalStandard(a, b);
  }
  function make_1(_this__u8e3s4, a, b) {
    return new RationalStandard(of_1(Companion_instance_0, a), of_1(Companion_instance_0, b));
  }
  function get_LONG_0() {
    return LONG_0;
  }
  var LONG_0;
  //region block: post-declaration
  protoOf(RationalStandard).ck = isInteger;
  protoOf(RationalStandard).dk = rangeFitsInLong;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion_0();
  LONG_0 = new Long(0, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BigInt_0;
  _.$_$.b = get_LONG_0;
  _.$_$.c = LongExpressionOverflow;
  _.$_$.d = get_absoluteValue;
  _.$_$.e = and;
  _.$_$.f = bitLength;
  _.$_$.g = compareTo_0;
  _.$_$.h = compareTo_1;
  _.$_$.i = compareTo_2;
  _.$_$.j = compareTo;
  _.$_$.k = div;
  _.$_$.l = div_1;
  _.$_$.m = div_0;
  _.$_$.n = fromDoubleCeil;
  _.$_$.o = fromDoubleFloor;
  _.$_$.p = gcd;
  _.$_$.q = inv;
  _.$_$.r = isqrt;
  _.$_$.s = make_0;
  _.$_$.t = make_1;
  _.$_$.u = minus_0;
  _.$_$.v = minus;
  _.$_$.w = of;
  _.$_$.x = of_0;
  _.$_$.y = of_2;
  _.$_$.z = of_1;
  _.$_$.a1 = or;
  _.$_$.b1 = plus_0;
  _.$_$.c1 = plus;
  _.$_$.d1 = popcnt;
  _.$_$.e1 = pow_0;
  _.$_$.f1 = rangeInInt;
  _.$_$.g1 = rangeInLong;
  _.$_$.h1 = rationalise;
  _.$_$.i1 = rem;
  _.$_$.j1 = rem_0;
  _.$_$.k1 = shl_0;
  _.$_$.l1 = shl;
  _.$_$.m1 = signum;
  _.$_$.n1 = times_0;
  _.$_$.o1 = toBigInt;
  _.$_$.p1 = toDouble;
  _.$_$.q1 = toInt_0;
  _.$_$.r1 = toLong_1;
  _.$_$.s1 = toRational_0;
  _.$_$.t1 = toRational;
  _.$_$.u1 = unaryMinus;
  _.$_$.v1 = xor;
  _.$_$.w1 = BigInt__hashCode_impl_fn8vs3;
  _.$_$.x1 = _BigInt___get_impl__impl__c2lc93;
  _.$_$.y1 = BigInt__toString_impl_xmp9e6;
  _.$_$.z1 = Companion_instance_0;
  _.$_$.a2 = BigIntConstants_getInstance;
  _.$_$.b2 = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=array-mpbignum.js.map
