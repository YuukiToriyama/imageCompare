import { n as formatMuiErrorMessage } from './withStyles-26bb02d1.js';

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( formatMuiErrorMessage(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalize as c };
//# sourceMappingURL=capitalize-66967a61.js.map
