import {
  __commonJS
} from "https://kapitaali.github.io/Macroeconomics/book1/build/_shared/chunk-CGOEG7L2.js";

// ../../node_modules/refractor/lang/hsts.js
var require_hsts = __commonJS({
  "../../node_modules/refractor/lang/hsts.js"(exports, module) {
    module.exports = hsts;
    hsts.displayName = "hsts";
    hsts.aliases = [];
    function hsts(Prism) {
      Prism.languages.hsts = {
        directive: {
          pattern: /\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,
          alias: "property"
        },
        operator: /=/,
        punctuation: /;/
      };
    }
  }
});

export {
  require_hsts
};
//# sourceMappingURL=https://kapitaali.github.io/Macroeconomics/book1/build/_shared/chunk-CS75ZVJS.js.map
