(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './array-array.js', './kotlin-kotlin-stdlib.js', './array-mpbignum.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./array-array.js'), require('./kotlin-kotlin-stdlib.js'), require('./array-mpbignum.js'));
  else {
    if (typeof globalThis['array-array'] === 'undefined') {
      throw new Error("Error loading module 'com.dhsdevelopments.kap:standalonejs'. Its dependency 'array-array' was not found. Please, check whether 'array-array' is loaded prior to 'com.dhsdevelopments.kap:standalonejs'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.dhsdevelopments.kap:standalonejs'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.dhsdevelopments.kap:standalonejs'.");
    }
    if (typeof globalThis['array-mpbignum'] === 'undefined') {
      throw new Error("Error loading module 'com.dhsdevelopments.kap:standalonejs'. Its dependency 'array-mpbignum' was not found. Please, check whether 'array-mpbignum' is loaded prior to 'com.dhsdevelopments.kap:standalonejs'.");
    }
    globalThis['com.dhsdevelopments.kap:standalonejs'] = factory(typeof globalThis['com.dhsdevelopments.kap:standalonejs'] === 'undefined' ? {} : globalThis['com.dhsdevelopments.kap:standalonejs'], globalThis['array-array'], globalThis['kotlin-kotlin-stdlib'], globalThis['array-mpbignum']);
  }
}(function (_, kotlin_array_array, kotlin_kotlin, kotlin_array_mpbignum) {
  'use strict';
  //region block: imports
  var Engine_init_$Create$ = kotlin_array_array.$_$.o;
  var StringSourceLocation = kotlin_array_array.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var protoOf = kotlin_kotlin.$_$.d7;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  var THROW_IAE = kotlin_kotlin.$_$.ga;
  var Enum = kotlin_kotlin.$_$.v9;
  var defineProp = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q6;
  var APLChar = kotlin_array_array.$_$.b;
  var APLRational = kotlin_array_array.$_$.f;
  var APLComplex = kotlin_array_array.$_$.c;
  var APLDouble = kotlin_array_array.$_$.d;
  var toLong = kotlin_array_mpbignum.$_$.r1;
  var Long = kotlin_kotlin.$_$.aa;
  var rangeInLong = kotlin_array_mpbignum.$_$.g1;
  var APLBigInt = kotlin_array_array.$_$.a;
  var APLLong = kotlin_array_array.$_$.e;
  var APLSingleValue = kotlin_array_array.$_$.g;
  var Dimensions = kotlin_array_array.$_$.h;
  var _Dimensions___get_size__impl__uu37ek = kotlin_array_array.$_$.q;
  var Dimensions__get_impl_4npepw = kotlin_array_array.$_$.p;
  var FormatStyle_PLAIN_getInstance = kotlin_array_array.$_$.n;
  var isStringValue = kotlin_array_array.$_$.k;
  var _BigInt___get_impl__impl__c2lc93 = kotlin_array_mpbignum.$_$.x1;
  var charToString = kotlin_array_array.$_$.j;
  var toStringValueOrNull = kotlin_array_array.$_$.m;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var get_registeredFilesRoot = kotlin_array_array.$_$.l;
  var encodeToByteArray = kotlin_kotlin.$_$.i8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EngineJsWrapper, 'EngineJsWrapper', EngineJsWrapper);
  initMetadataForClass(JsKapValueType, 'JsKapValueType', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsKapValue, 'JsKapValue');
  //endregion
  function EngineJsWrapper() {
    this.b5e_1 = Engine_init_$Create$();
    this.b5e_1.g4o('/standard-lib');
    this.b5e_1.f3j(new StringSourceLocation('use("standard-lib.kap")'));
  }
  protoOf(EngineJsWrapper).close = function () {
    this.b5e_1.h1l();
  };
  protoOf(EngineJsWrapper).addLibrarySearchPath = function (path) {
    this.b5e_1.g4o(path);
  };
  protoOf(EngineJsWrapper).parseAndEval = function (expr) {
    var result = this.b5e_1.f3j(new StringSourceLocation(expr));
    return Companion_instance.c5e(result);
  };
  var JsKapValueType_INTEGER_instance;
  var JsKapValueType_BIGINT_instance;
  var JsKapValueType_DOUBLE_instance;
  var JsKapValueType_COMPLEX_instance;
  var JsKapValueType_RATIONAL_instance;
  var JsKapValueType_CHAR_instance;
  var JsKapValueType_INTERNAL_instance;
  var JsKapValueType_ARRAY_instance;
  function values() {
    return [JsKapValueType_INTEGER_getInstance(), JsKapValueType_BIGINT_getInstance(), JsKapValueType_DOUBLE_getInstance(), JsKapValueType_COMPLEX_getInstance(), JsKapValueType_RATIONAL_getInstance(), JsKapValueType_CHAR_getInstance(), JsKapValueType_INTERNAL_getInstance(), JsKapValueType_ARRAY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'INTEGER':
        return JsKapValueType_INTEGER_getInstance();
      case 'BIGINT':
        return JsKapValueType_BIGINT_getInstance();
      case 'DOUBLE':
        return JsKapValueType_DOUBLE_getInstance();
      case 'COMPLEX':
        return JsKapValueType_COMPLEX_getInstance();
      case 'RATIONAL':
        return JsKapValueType_RATIONAL_getInstance();
      case 'CHAR':
        return JsKapValueType_CHAR_getInstance();
      case 'INTERNAL':
        return JsKapValueType_INTERNAL_getInstance();
      case 'ARRAY':
        return JsKapValueType_ARRAY_getInstance();
      default:
        JsKapValueType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var JsKapValueType_entriesInitialized;
  function JsKapValueType_initEntries() {
    if (JsKapValueType_entriesInitialized)
      return Unit_instance;
    JsKapValueType_entriesInitialized = true;
    JsKapValueType_INTEGER_instance = new JsKapValueType('INTEGER', 0);
    JsKapValueType_BIGINT_instance = new JsKapValueType('BIGINT', 1);
    JsKapValueType_DOUBLE_instance = new JsKapValueType('DOUBLE', 2);
    JsKapValueType_COMPLEX_instance = new JsKapValueType('COMPLEX', 3);
    JsKapValueType_RATIONAL_instance = new JsKapValueType('RATIONAL', 4);
    JsKapValueType_CHAR_instance = new JsKapValueType('CHAR', 5);
    JsKapValueType_INTERNAL_instance = new JsKapValueType('INTERNAL', 6);
    JsKapValueType_ARRAY_instance = new JsKapValueType('ARRAY', 7);
  }
  function JsKapValueType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
  }
  protoOf(Companion).c5e = function (value) {
    return new JsKapValue(value);
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function JsKapValue(value) {
    this.value = value;
  }
  protoOf(JsKapValue).x1 = function () {
    return this.value;
  };
  protoOf(JsKapValue).type = function () {
    var tmp;
    var tmp_0 = this.value;
    if (tmp_0 instanceof APLSingleValue) {
      var tmp0_subject = this.value;
      var tmp_1;
      if (tmp0_subject instanceof APLLong) {
        var tmp_2;
        var containsArg = this.value.g2n_1;
        if ((new Long(2, -1048576)).a1(containsArg) <= 0 ? containsArg.a1(new Long(-2, 1048575)) <= 0 : false) {
          tmp_2 = JsKapValueType_INTEGER_getInstance();
        } else {
          tmp_2 = JsKapValueType_BIGINT_getInstance();
        }
        tmp_1 = tmp_2;
      } else {
        if (tmp0_subject instanceof APLBigInt) {
          var tmp_3;
          var tmp_4;
          if (rangeInLong(this.value.z2q_1)) {
            var containsArg_0 = toLong(this.value.z2q_1);
            tmp_4 = (new Long(2, -1048576)).a1(containsArg_0) <= 0 ? containsArg_0.a1(new Long(-2, 1048575)) <= 0 : false;
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp_3 = JsKapValueType_INTEGER_getInstance();
          } else {
            tmp_3 = JsKapValueType_BIGINT_getInstance();
          }
          tmp_1 = tmp_3;
        } else {
          if (tmp0_subject instanceof APLDouble) {
            tmp_1 = JsKapValueType_DOUBLE_getInstance();
          } else {
            if (tmp0_subject instanceof APLComplex) {
              tmp_1 = JsKapValueType_COMPLEX_getInstance();
            } else {
              if (tmp0_subject instanceof APLRational) {
                tmp_1 = JsKapValueType_RATIONAL_getInstance();
              } else {
                if (tmp0_subject instanceof APLChar) {
                  tmp_1 = JsKapValueType_CHAR_getInstance();
                } else {
                  tmp_1 = JsKapValueType_INTERNAL_getInstance();
                }
              }
            }
          }
        }
      }
      tmp = tmp_1;
    } else {
      tmp = JsKapValueType_ARRAY_getInstance();
    }
    return tmp;
  };
  protoOf(JsKapValue).dimensions = function () {
    // Inline function 'kotlin.let' call
    var d0 = this.value.o2i();
    var tmp = 0;
    var tmp_0 = _Dimensions___get_size__impl__uu37ek(d0);
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = Dimensions__get_impl_4npepw(d0, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
  protoOf(JsKapValue).valueAt = function (index) {
    return new JsKapValue(this.value.h2k(index));
  };
  protoOf(JsKapValue).formatted = function () {
    return this.value.i2o(FormatStyle_PLAIN_getInstance());
  };
  protoOf(JsKapValue).isComplex = function () {
    var tmp = this.value;
    return tmp instanceof APLComplex;
  };
  protoOf(JsKapValue).isReal = function () {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.value;
    if (tmp_2 instanceof APLLong) {
      tmp_1 = true;
    } else {
      var tmp_3 = this.value;
      tmp_1 = tmp_3 instanceof APLBigInt;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_4 = this.value;
      tmp_0 = tmp_4 instanceof APLDouble;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      var tmp_5 = this.value;
      tmp = tmp_5 instanceof APLRational;
    }
    return tmp;
  };
  protoOf(JsKapValue).isChar = function () {
    var tmp = this.value;
    return tmp instanceof APLChar;
  };
  protoOf(JsKapValue).isStringValue = function () {
    return isStringValue(this.value);
  };
  protoOf(JsKapValue).asBigInt = function () {
    return this.value.w2q().y4y();
  };
  protoOf(JsKapValue).asDouble = function () {
    return this.value.w2q().r2z();
  };
  protoOf(JsKapValue).asRational = function () {
    // Inline function 'kotlin.let' call
    var v = this.value.w2q().z4y();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [_BigInt___get_impl__impl__c2lc93(v.oj()), _BigInt___get_impl__impl__c2lc93(v.pj())];
  };
  protoOf(JsKapValue).asChar = function () {
    return charToString(this.value.q2q().m2z_1);
  };
  protoOf(JsKapValue).asString = function () {
    return toStringValueOrNull(this.value);
  };
  function JsKapValueType_INTEGER_getInstance() {
    JsKapValueType_initEntries();
    return JsKapValueType_INTEGER_instance;
  }
  function JsKapValueType_BIGINT_getInstance() {
    JsKapValueType_initEntries();
    return JsKapValueType_BIGINT_instance;
  }
  function JsKapValueType_DOUBLE_getInstance() {
    JsKapValueType_initEntries();
    return JsKapValueType_DOUBLE_instance;
  }
  function JsKapValueType_COMPLEX_getInstance() {
    JsKapValueType_initEntries();
    return JsKapValueType_COMPLEX_instance;
  }
  function JsKapValueType_RATIONAL_getInstance() {
    JsKapValueType_initEntries();
    return JsKapValueType_RATIONAL_instance;
  }
  function JsKapValueType_CHAR_getInstance() {
    JsKapValueType_initEntries();
    return JsKapValueType_CHAR_instance;
  }
  function JsKapValueType_INTERNAL_getInstance() {
    JsKapValueType_initEntries();
    return JsKapValueType_INTERNAL_instance;
  }
  function JsKapValueType_ARRAY_getInstance() {
    JsKapValueType_initEntries();
    return JsKapValueType_ARRAY_instance;
  }
  function set_numOutstandingRequests(_set____db54di) {
    _init_properties_standalone_kt__a9r797();
    numOutstandingRequests = _set____db54di;
  }
  function get_numOutstandingRequests() {
    _init_properties_standalone_kt__a9r797();
    return numOutstandingRequests;
  }
  var numOutstandingRequests;
  function get_pendingCallbacks() {
    _init_properties_standalone_kt__a9r797();
    return pendingCallbacks;
  }
  var pendingCallbacks;
  function set_clientStarted(_set____db54di) {
    _init_properties_standalone_kt__a9r797();
    clientStarted = _set____db54di;
  }
  function get_clientStarted() {
    _init_properties_standalone_kt__a9r797();
    return clientStarted;
  }
  var clientStarted;
  function createEngine() {
    _init_properties_standalone_kt__a9r797();
    return new Promise(createEngine$lambda);
  }
  function main() {
    _init_properties_standalone_kt__a9r797();
    var tmp = window;
    tmp.onload = main$lambda;
  }
  function loadLibraries() {
    _init_properties_standalone_kt__a9r797();
    loadLibFiles(['standard-lib/standard-lib.kap', 'standard-lib/structure.kap', 'standard-lib/base-functions.kap', 'standard-lib/math.kap', 'standard-lib/math-kap.kap', 'standard-lib/io.kap', 'standard-lib/http.kap', 'standard-lib/output.kap', 'standard-lib/output3.kap', 'standard-lib/time.kap', 'standard-lib/regex.kap', 'standard-lib/util.kap', 'standard-lib/map.kap']);
  }
  function loadLibFiles(names) {
    _init_properties_standalone_kt__a9r797();
    set_numOutstandingRequests(names.length);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = names.length;
    while (inductionVariable < last) {
      var element = names[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var http = new XMLHttpRequest();
      http.open('GET', element);
      http.onload = loadLibFiles$lambda(http, element);
      http.send();
    }
  }
  function renderClient() {
    _init_properties_standalone_kt__a9r797();
    if (get_clientStarted()) {
      throw IllegalStateException_init_$Create$('Client already started');
    }
    set_clientStarted(true);
    console.log('Engine has been started');
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_pendingCallbacks().k();
    while (_iterator__ex2g4s.l()) {
      var element = _iterator__ex2g4s.m();
      element();
    }
  }
  function waitForLoad(fn) {
    _init_properties_standalone_kt__a9r797();
    if (get_clientStarted()) {
      throw IllegalStateException_init_$Create$('Client already started');
    }
    get_pendingCallbacks().h(fn);
  }
  function createEngine$lambda(resolve, reject) {
    _init_properties_standalone_kt__a9r797();
    if (get_clientStarted()) {
      resolve(new EngineJsWrapper());
    } else {
      waitForLoad(createEngine$lambda$lambda(resolve));
    }
    return Unit_instance;
  }
  function createEngine$lambda$lambda($resolve) {
    return function () {
      $resolve(new EngineJsWrapper());
      return Unit_instance;
    };
  }
  function main$lambda(it) {
    _init_properties_standalone_kt__a9r797();
    loadLibraries();
    return Unit_instance;
  }
  function loadLibFiles$lambda($http, $name) {
    return function (it) {
      if ($http.readyState === 4 && $http.status === 200) {
        get_registeredFilesRoot().m5d($name, encodeToByteArray($http.responseText));
      } else {
        console.log('Error loading library file: ' + $name + '. Code: ' + $http.status);
      }
      var tmp;
      set_numOutstandingRequests(get_numOutstandingRequests() - 1 | 0);
      if (get_numOutstandingRequests() === 0) {
        renderClient();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  var properties_initialized_standalone_kt_andefb;
  function _init_properties_standalone_kt__a9r797() {
    if (!properties_initialized_standalone_kt_andefb) {
      properties_initialized_standalone_kt_andefb = true;
      numOutstandingRequests = 0;
      pendingCallbacks = ArrayList_init_$Create$();
      clientStarted = false;
    }
  }
  function mainWrapper() {
    main();
  }
  //region block: post-declaration
  defineProp(protoOf(JsKapValueType), 'name', protoOf(JsKapValueType).p2);
  defineProp(protoOf(JsKapValueType), 'ordinal', protoOf(JsKapValueType).q2);
  //endregion
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$dhsdevelopments = $com.dhsdevelopments || ($com.dhsdevelopments = {});
    var $com$dhsdevelopments$kap = $com$dhsdevelopments.kap || ($com$dhsdevelopments.kap = {});
    var $com$dhsdevelopments$kap$standalonejs = $com$dhsdevelopments$kap.standalonejs || ($com$dhsdevelopments$kap.standalonejs = {});
    $com$dhsdevelopments$kap$standalonejs.EngineJsWrapper = EngineJsWrapper;
    var $com = _.com || (_.com = {});
    var $com$dhsdevelopments = $com.dhsdevelopments || ($com.dhsdevelopments = {});
    var $com$dhsdevelopments$kap = $com$dhsdevelopments.kap || ($com$dhsdevelopments.kap = {});
    var $com$dhsdevelopments$kap$standalonejs = $com$dhsdevelopments$kap.standalonejs || ($com$dhsdevelopments$kap.standalonejs = {});
    $com$dhsdevelopments$kap$standalonejs.JsKapValueType = JsKapValueType;
    $com$dhsdevelopments$kap$standalonejs.JsKapValueType.values = values;
    $com$dhsdevelopments$kap$standalonejs.JsKapValueType.valueOf = valueOf;
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValueType, 'INTEGER', JsKapValueType_INTEGER_getInstance);
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValueType, 'BIGINT', JsKapValueType_BIGINT_getInstance);
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValueType, 'DOUBLE', JsKapValueType_DOUBLE_getInstance);
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValueType, 'COMPLEX', JsKapValueType_COMPLEX_getInstance);
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValueType, 'RATIONAL', JsKapValueType_RATIONAL_getInstance);
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValueType, 'CHAR', JsKapValueType_CHAR_getInstance);
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValueType, 'INTERNAL', JsKapValueType_INTERNAL_getInstance);
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValueType, 'ARRAY', JsKapValueType_ARRAY_getInstance);
    $com$dhsdevelopments$kap$standalonejs.JsKapValue = JsKapValue;
    defineProp($com$dhsdevelopments$kap$standalonejs.JsKapValue, 'Companion', Companion_getInstance);
    var $com = _.com || (_.com = {});
    var $com$dhsdevelopments = $com.dhsdevelopments || ($com.dhsdevelopments = {});
    var $com$dhsdevelopments$kap = $com$dhsdevelopments.kap || ($com$dhsdevelopments.kap = {});
    var $com$dhsdevelopments$kap$standalonejs = $com$dhsdevelopments$kap.standalonejs || ($com$dhsdevelopments$kap.standalonejs = {});
    $com$dhsdevelopments$kap$standalonejs.createEngine = createEngine;
  }
  $jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=array-standalonejs.js.map
