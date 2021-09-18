import React from 'react';
const leftLine = [
  '0001101',
  '0011001',
  '0010011',
  '0111101',
  '0100011',
  '0110001',
  '0101111',
  '0111011',
  '0110111',
  '0001011'
];
const rightLine = [
  '1110010',
  '1100110',
  '1101100',
  '1000010',
  '1011100',
  '1001110',
  '1010000',
  '1000100',
  '1001000',
  '1110100'
];
function checkDigit(
  string7
) {
  let parityc = 0,
    parity;
  for(let i=0; i<7; i++) {
    if((i+3)%2 !== 0) parityc += Number(string7[i]) * 3;
    else parityc += Number(string7[i]);
  }
  for(parity=0; (parityc+parity) % 10 !== 0; parity++) ;
  return parity;
}
/* unused
function validate(
  string8
) {
  const len = string8.length;
  const ean8 = calc(string8.substring(7));
  if(ean8 !== string8) {
    throw new Error('check digit exception');
  }
  return ean8;
}
*/
function calc(
  string7
) {
  const cd = checkDigit(string7);
  const ean8 = Array.from(`${string7}${cd}`);
  return `101${leftLine[ean8[0]-0]}${leftLine[ean8[1]-0]}${leftLine[ean8[2]-0]}${leftLine[ean8[3]-0]}01010${rightLine[ean8[4]-0]}${rightLine[ean8[5]-0]}${rightLine[ean8[6]-0]}${rightLine[ean8[7]-0]}101`;
}
function Line(code) {
  return (
    <div
      className={code === '1' ? 'barcode-black' : 'barcode-white'}
    ></div>
  );
}

const EAN8 = React.memo(function EAN8({
  digit
}) {
  return (
    <>
      {Array.from(calc(digit)).map(Line)}
    </>
  );
});
export default EAN8;
