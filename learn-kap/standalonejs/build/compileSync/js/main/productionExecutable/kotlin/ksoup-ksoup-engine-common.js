(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ksoup-ksoup-engine-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ksoup-ksoup-engine-common'.");
    }
    globalThis['ksoup-ksoup-engine-common'] = factory(typeof globalThis['ksoup-ksoup-engine-common'] === 'undefined' ? {} : globalThis['ksoup-ksoup-engine-common'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Exception = kotlin_kotlin.$_$.w9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.z;
  var captureStack = kotlin_kotlin.$_$.z5;
  var protoOf = kotlin_kotlin.$_$.d7;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  var VOID = kotlin_kotlin.$_$.d;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var objectCreate = kotlin_kotlin.$_$.c7;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.p1;
  var RuntimeException = kotlin_kotlin.$_$.ea;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.x;
  var IllegalArgumentException = kotlin_kotlin.$_$.x9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.f1;
  var initMetadataForObject = kotlin_kotlin.$_$.s6;
  var toString = kotlin_kotlin.$_$.y1;
  var initMetadataForInterface = kotlin_kotlin.$_$.r6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IOException, 'IOException', VOID, Exception);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, RuntimeException);
  initMetadataForClass(UncheckedIOException, 'UncheckedIOException', VOID, Exception);
  initMetadataForClass(ValidationException, 'ValidationException', VOID, IllegalArgumentException);
  initMetadataForObject(SharedConstants, 'SharedConstants');
  function canEncode(c) {
    return this.b16(toString(c));
  }
  function canEncode_0(s) {
    return true;
  }
  function onlyUtf8() {
    return false;
  }
  initMetadataForInterface(Charset, 'Charset');
  //endregion
  function IOException(msg) {
    Exception_init_$Init$(msg, this);
    captureStack(this, IOException);
  }
  function SerializationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(cause) {
    var tmp = SerializationException_init_$Init$_0(cause, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UncheckedIOException_init_$Init$(cause, $this) {
    Exception_init_$Init$_0(cause, $this);
    UncheckedIOException.call($this);
    return $this;
  }
  function UncheckedIOException_init_$Create$(cause) {
    var tmp = UncheckedIOException_init_$Init$(cause, objectCreate(protoOf(UncheckedIOException)));
    captureStack(tmp, UncheckedIOException_init_$Create$);
    return tmp;
  }
  function UncheckedIOException() {
    captureStack(this, UncheckedIOException);
  }
  function ValidationException(msg) {
    IllegalArgumentException_init_$Init$(msg, this);
    captureStack(this, ValidationException);
  }
  function SharedConstants() {
    SharedConstants_instance = this;
    this.s15_1 = '/ksoup.userdata';
    this.t15_1 = 'ksoup.attrs';
    this.u15_1 = 'ksoup.start';
    this.v15_1 = 'ksoup.end';
    this.w15_1 = 8192;
    this.x15_1 = 8192;
    this.y15_1 = 8192;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z15_1 = ['input', 'keygen', 'object', 'select', 'textarea'];
  }
  var SharedConstants_instance;
  function SharedConstants_getInstance() {
    if (SharedConstants_instance == null)
      new SharedConstants();
    return SharedConstants_instance;
  }
  function Charset() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IOException;
  _.$_$.b = ValidationException;
  _.$_$.c = canEncode_0;
  _.$_$.d = canEncode;
  _.$_$.e = onlyUtf8;
  _.$_$.f = Charset;
  _.$_$.g = SerializationException_init_$Create$_0;
  _.$_$.h = UncheckedIOException_init_$Create$;
  _.$_$.i = SharedConstants_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ksoup-ksoup-engine-common.js.map
