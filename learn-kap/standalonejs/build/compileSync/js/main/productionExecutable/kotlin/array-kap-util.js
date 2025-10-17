(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './Kotlin-DateTime-library-kotlinx-datetime.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'array-kap-util'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'array-kap-util'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'array-kap-util'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'array-kap-util'.");
    }
    globalThis['array-kap-util'] = factory(typeof globalThis['array-kap-util'] === 'undefined' ? {} : globalThis['array-kap-util'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var Formats_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var format = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var println = kotlin_kotlin.$_$.w5;
  var printStackTrace = kotlin_kotlin.$_$.qa;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var protoOf = kotlin_kotlin.$_$.d7;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  var Enum = kotlin_kotlin.$_$.v9;
  var contentEquals = kotlin_kotlin.$_$.j3;
  var joinToString = kotlin_kotlin.$_$.l4;
  var joinToString_0 = kotlin_kotlin.$_$.j4;
  var initMetadataForObject = kotlin_kotlin.$_$.s6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var Long = kotlin_kotlin.$_$.aa;
  var THROW_CCE = kotlin_kotlin.$_$.fa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q6;
  var toString = kotlin_kotlin.$_$.g7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SimpleLogger, 'SimpleLogger');
  initMetadataForClass(Level, 'Level', VOID, Enum);
  initMetadataForObject(ArrayUtils, 'ArrayUtils');
  initMetadataForClass(Either, 'Either');
  initMetadataForClass(Left, 'Left', VOID, Either);
  initMetadataForClass(Right, 'Right', VOID, Either);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsTransferQueue, 'JsTransferQueue');
  initMetadataForClass(ServerSideJsTransferQueue, 'ServerSideJsTransferQueue', VOID, JsTransferQueue);
  initMetadataForCompanion(Companion_0);
  //endregion
  function SimpleLogger(tag) {
    this.kz_1 = tag;
    this.lz_1 = Level_INFO_getInstance();
  }
  protoOf(SimpleLogger).mz = function (msgLevel, message, e) {
    var now = System_instance.kk();
    var formatted = format(now, Formats_getInstance().wn_1);
    println(formatted + ': ' + this.kz_1 + ': ' + msgLevel.toString() + ': ' + message);
    if (!(e == null)) {
      printStackTrace(e);
    }
  };
  protoOf(SimpleLogger).nz = function (msgLevel, message, e, $super) {
    e = e === VOID ? null : e;
    var tmp;
    if ($super === VOID) {
      this.mz(msgLevel, message, e);
      tmp = Unit_instance;
    } else {
      tmp = $super.mz.call(this, msgLevel, message, e);
    }
    return tmp;
  };
  var Level_OFF_instance;
  var Level_ERROR_instance;
  var Level_WARNING_instance;
  var Level_INFO_instance;
  var Level_VERBOSE_instance;
  var Level_DEBUG_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_instance;
    Level_entriesInitialized = true;
    Level_OFF_instance = new Level('OFF', 0, 0);
    Level_ERROR_instance = new Level('ERROR', 1, 1);
    Level_WARNING_instance = new Level('WARNING', 2, 2);
    Level_INFO_instance = new Level('INFO', 3, 3);
    Level_VERBOSE_instance = new Level('VERBOSE', 4, 4);
    Level_DEBUG_instance = new Level('DEBUG', 5, 5);
  }
  function Level(name, ordinal, level) {
    Enum.call(this, name, ordinal);
    this.qz_1 = level;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_VERBOSE_getInstance() {
    Level_initEntries();
    return Level_VERBOSE_instance;
  }
  function ArrayUtils() {
  }
  protoOf(ArrayUtils).rz = function (a, b) {
    return contentEquals(a, b);
  };
  protoOf(ArrayUtils).sz = function (a, b) {
    var i = 0;
    while (i < a.length && i < b.length) {
      var aVal = a[i];
      var bVal = b[i];
      if (aVal < bVal)
        return -1;
      else if (aVal > bVal)
        return 1;
      i = i + 1 | 0;
    }
    return i < a.length ? 1 : i < b.length ? -1 : 0;
  };
  protoOf(ArrayUtils).tz = function (values) {
    return '[' + joinToString(values, ', ') + ']';
  };
  protoOf(ArrayUtils).uz = function (values) {
    return '[' + joinToString_0(values, ', ') + ']';
  };
  var ArrayUtils_instance;
  function ArrayUtils_getInstance() {
    return ArrayUtils_instance;
  }
  function Left(value) {
    Either.call(this);
    this.vz_1 = value;
  }
  function Right(value) {
    Either.call(this);
    this.wz_1 = value;
  }
  function Either() {
  }
  function rest(_this__u8e3s4) {
    if (_this__u8e3s4.o()) {
      throw IllegalStateException_init_$Create$('Cannot take the rest of an empty list');
    }
    return _this__u8e3s4.u1(1, _this__u8e3s4.n());
  }
  function plusMod(_this__u8e3s4, divisor) {
    var v = _this__u8e3s4.a3(divisor);
    return v.a1(new Long(0, 0)) < 0 ? divisor.w2(v) : v;
  }
  function crossOriginIsolatedAndDefined() {
    var tmp = typeof crossOriginIsolated !== 'undefined' && crossOriginIsolated;
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  }
  function Companion() {
  }
  protoOf(Companion).xz = function () {
    if (crossOriginIsolatedAndDefined()) {
      var controlBuffer = new SharedArrayBuffer(12);
      var contentBuffer = new SharedArrayBuffer(1032);
      return new ServerSideJsTransferQueue(controlBuffer, contentBuffer);
    } else {
      return null;
    }
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function ServerSideJsTransferQueue(controlBufferData, contentBufferData) {
    JsTransferQueue.call(this, controlBufferData, contentBufferData);
  }
  protoOf(ServerSideJsTransferQueue).c10 = function (time) {
    var tmp1_elvis_lhs = time == null ? null : time.l3();
    var waitTime = tmp1_elvis_lhs == null ? Infinity : tmp1_elvis_lhs;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(waitTime >= 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var b = this.f10_1;
    Atomics.wait(b, 0, 0, waitTime);
    var tmp = Atomics.load(b, 0);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(ServerSideJsTransferQueue).h10 = function (state) {
    var newState;
    var expectedState;
    if (state) {
      newState = 1;
      expectedState = 0;
    } else {
      newState = 0;
      expectedState = 1;
    }
    var b = this.f10_1;
    var tmp = Atomics.compareExchange(b, 0, expectedState, newState);
    var prevState = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    if (prevState === expectedState) {
      Atomics.notify(b, 0);
    }
  };
  function Companion_0() {
    this.j10_1 = 1024;
    this.k10_1 = 0;
    this.l10_1 = 1;
    this.m10_1 = 2;
    this.n10_1 = 3;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JsTransferQueue(controlBufferData, contentBufferData) {
    this.d10_1 = controlBufferData;
    this.e10_1 = contentBufferData;
    var buf = this.d10_1;
    var a = new Int32Array(buf);
    var newState = 0;
    Atomics.store(a, newState, 0);
    this.f10_1 = a;
    var contentBuffer = this.e10_1;
    this.g10_1 = new Uint8Array(contentBuffer);
  }
  protoOf(JsTransferQueue).i10 = function () {
    var b = this.f10_1;
    var tmp = Atomics.load(b, 0);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  //region block: init
  ArrayUtils_instance = new ArrayUtils();
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SimpleLogger;
  _.$_$.b = Left;
  _.$_$.c = Right;
  _.$_$.d = plusMod;
  _.$_$.e = rest;
  _.$_$.f = Level_ERROR_getInstance;
  _.$_$.g = Level_INFO_getInstance;
  _.$_$.h = Level_VERBOSE_getInstance;
  _.$_$.i = Level_WARNING_getInstance;
  _.$_$.j = ArrayUtils_instance;
  _.$_$.k = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=array-kap-util.js.map
