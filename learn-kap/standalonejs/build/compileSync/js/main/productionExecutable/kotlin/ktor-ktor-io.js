(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u1;
  var replace = kotlin_kotlin.$_$.c9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var protoOf = kotlin_kotlin.$_$.d7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q6;
  var THROW_CCE = kotlin_kotlin.$_$.fa;
  var Unit_instance = kotlin_kotlin.$_$.g2;
  var getStringHashCode = kotlin_kotlin.$_$.n6;
  var initMetadataForClass = kotlin_kotlin.$_$.p6;
  var initMetadataForObject = kotlin_kotlin.$_$.s6;
  var VOID = kotlin_kotlin.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  //endregion
  function Companion() {
  }
  protoOf(Companion).d16 = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().e16_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_2;
        if (it === 'iso-8859-1') {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_2 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_1 = tmp_2;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().f16_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Charset(_name) {
    this.g16_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.g16_1 === other.g16_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.g16_1);
  };
  protoOf(Charset).toString = function () {
    return this.g16_1;
  };
  function Charsets() {
    Charsets_instance = this;
    this.e16_1 = new CharsetImpl('UTF-8');
    this.f16_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance.d16(name);
  }
  function CharsetDecoder(_charset) {
    this.i16_1 = _charset;
  }
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.g16_1;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).h16 = function () {
    return new CharsetDecoderImpl(this);
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.l16_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.l16_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.l16_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.l16_1.equals(tmp0_other_with_cast.l16_1))
      return false;
    return true;
  };
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Charsets_getInstance;
  _.$_$.b = forName;
  _.$_$.c = get_name;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
