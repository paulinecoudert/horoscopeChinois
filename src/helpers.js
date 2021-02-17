// number NUMBER
// transformer une année en INDEX

import signes from './data.js/signes';

// eslint-disable-next-line import/prefer-default-export
export function getSign(annee) {
  // eslint-disable-next-line no-undef
  return annee % 12;
}

// eslint-disable-next-line no-console
console.log(getSign(1981));
