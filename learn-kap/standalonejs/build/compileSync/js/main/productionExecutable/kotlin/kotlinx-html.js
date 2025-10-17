(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kotlinx-html'] = factory(typeof globalThis['kotlinx-html'] === 'undefined' ? {} : globalThis['kotlinx-html']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-html.js.map
