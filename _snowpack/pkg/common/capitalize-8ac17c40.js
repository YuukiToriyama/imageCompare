import { c as createCommonjsModule } from './_commonjsHelpers-8c19dec8.js';
import { b as esm } from './defaultTheme-8fd7b8d6.js';

var capitalize_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalize;



// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( (0, esm.formatMuiErrorMessage)(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
});

export { capitalize_1 as c };
//# sourceMappingURL=capitalize-8ac17c40.js.map
