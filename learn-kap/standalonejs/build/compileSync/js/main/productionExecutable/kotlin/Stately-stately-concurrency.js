(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-concurrency'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Stately-stately-concurrency'.");
    }
    globalThis['Stately-stately-concurrency'] = factory(typeof globalThis['Stately-stately-concurrency'] === 'undefined' ? {} : globalThis['Stately-stately-concurrency'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.d7;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ThreadLocalRef, 'ThreadLocalRef', ThreadLocalRef);
  //endregion
  function set_value(_this__u8e3s4, value) {
    _this__u8e3s4.r16(value);
  }
  function ThreadLocalRef() {
    this.q16_1 = null;
  }
  protoOf(ThreadLocalRef).s16 = function () {
    return this.q16_1;
  };
  protoOf(ThreadLocalRef).r16 = function (value) {
    this.q16_1 = value;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ThreadLocalRef;
  _.$_$.b = set_value;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrency.js.map
