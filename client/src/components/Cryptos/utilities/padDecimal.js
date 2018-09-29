/***********************************************************************
* File that contains utility functions for the Cryptos component
***********************************************************************/
// pure function that pads a decimal to 2 decimal spots -- '$12.5' returns '$12.50'
export default function padDecimal(s) {
  const i = s.lastIndexOf('.');

  // no decimal point. Add one.
  if (i === -1) {
    return `${s}.00`;
  }
  // a decimal with only the tens place
  if (s.slice(i + 1).length < 2) {
    return `${s}0`;
  }
  // 2 decimal spots
  return s;
}
