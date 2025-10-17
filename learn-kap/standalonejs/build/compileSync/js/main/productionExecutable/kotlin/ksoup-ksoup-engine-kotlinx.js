(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './ktor-ktor-io.js', './kotlin-kotlin-stdlib.js', './ksoup-ksoup-engine-common.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./ktor-ktor-io.js'), require('./kotlin-kotlin-stdlib.js'), require('./ksoup-ksoup-engine-common.js'));
  else {
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ksoup-ksoup-engine-kotlinx'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ksoup-ksoup-engine-kotlinx'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ksoup-ksoup-engine-kotlinx'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ksoup-ksoup-engine-kotlinx'.");
    }
    if (typeof globalThis['ksoup-ksoup-engine-common'] === 'undefined') {
      throw new Error("Error loading module 'ksoup-ksoup-engine-kotlinx'. Its dependency 'ksoup-ksoup-engine-common' was not found. Please, check whether 'ksoup-ksoup-engine-common' is loaded prior to 'ksoup-ksoup-engine-kotlinx'.");
    }
    globalThis['ksoup-ksoup-engine-kotlinx'] = factory(typeof globalThis['ksoup-ksoup-engine-kotlinx'] === 'undefined' ? {} : globalThis['ksoup-ksoup-engine-kotlinx'], globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['ksoup-ksoup-engine-common']);
  }
}(function (_, kotlin_io_ktor_ktor_io, kotlin_kotlin, kotlin_com_fleeksoft_ksoup_ksoup_engine_common) {
  'use strict';
  //region block: imports
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.a;
  var protoOf = kotlin_kotlin.$_$.d7;
  var initMetadataForObject = kotlin_kotlin.$_$.s6;
  var get_name = kotlin_io_ktor_ktor_io.$_$.c;
  var objectCreate = kotlin_kotlin.$_$.c7;
  var forName = kotlin_io_ktor_ktor_io.$_$.b;
  var lazy = kotlin_kotlin.$_$.na;
  var canEncode = kotlin_com_fleeksoft_ksoup_ksoup_engine_common.$_$.d;
  var canEncode_0 = kotlin_com_fleeksoft_ksoup_ksoup_engine_common.$_$.c;
  var onlyUtf8 = kotlin_com_fleeksoft_ksoup_ksoup_engine_common.$_$.e;
  var Charset = kotlin_com_fleeksoft_ksoup_ksoup_engine_common.$_$.f;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  var VOID = kotlin_kotlin.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KsoupEngineImpl, 'KsoupEngineImpl');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, VOID, [Charset]);
  //endregion
  function KsoupEngineImpl() {
  }
  protoOf(KsoupEngineImpl).m16 = function () {
    return CharsetImpl_init_$Create$(Charsets_getInstance().e16_1);
  };
  var KsoupEngineImpl_instance;
  function KsoupEngineImpl_getInstance() {
    return KsoupEngineImpl_instance;
  }
  function CharsetImpl_init_$Init$(charset, $this) {
    CharsetImpl.call($this, get_name(charset));
    $this.o16_1 = charset;
    return $this;
  }
  function CharsetImpl_init_$Create$(charset) {
    return CharsetImpl_init_$Init$(charset, objectCreate(protoOf(CharsetImpl)));
  }
  function CharsetImpl$charsetDecoder$delegate$lambda(this$0) {
    return function () {
      return this$0.o16_1.h16();
    };
  }
  function CharsetImpl(name) {
    this.n16_1 = name;
    this.o16_1 = forName(Charsets_getInstance(), this.n16_1);
    var tmp = this;
    tmp.p16_1 = lazy(CharsetImpl$charsetDecoder$delegate$lambda(this));
  }
  protoOf(CharsetImpl).p2 = function () {
    return this.n16_1;
  };
  //region block: post-declaration
  protoOf(CharsetImpl).a16 = canEncode;
  protoOf(CharsetImpl).b16 = canEncode_0;
  protoOf(CharsetImpl).c16 = onlyUtf8;
  //endregion
  //region block: init
  KsoupEngineImpl_instance = new KsoupEngineImpl();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = KsoupEngineImpl_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=ksoup-ksoup-engine-kotlinx.js.map
