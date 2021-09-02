const leftLineRules = [
  '000000',
  '001011',
  '001101',
  '001110',
  '010011',
  '011001',
  '011100',
  '010101',
  '010110',
  '011010'
];
const leftLine = [[
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
], [
  '0100111',
  '0110011',
  '0011011',
  '0100001',
  '0011101',
  '0111001',
  '0000101',
  '0010001',
  '0001001',
  '0010111'
]];
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
  string12
) {
  let parityc = 0,
    parity;
  for(let i=0; i<12; i++) {
    if((i+3)%2 === 0) parityc += Number(string12[i]) * 3;
    else parityc += Number(string12[i]);
  }
  for(parity=0; (parityc+parity) % 10 !== 0; parity++) ;
  //return (((parityc % 10) > 0) ? 10 : 0) - (parityc % 10)
  return parity;
}
function calc(
  string12
) {
  const cd = checkDigit(string12);
  const ean13 = Array.from(`${string12}${cd}`);
  const leftRule = leftLineRules[ean13[0]-0];
  return `101${leftLine[leftRule[0]-0][ean13[1]-0]}${leftLine[leftRule[1]-0][ean13[2]-0]}${leftLine[leftRule[2]-0][ean13[3]-0]}${leftLine[leftRule[3]-0][ean13[4]-0]}${leftLine[leftRule[4]-0][ean13[5]-0]}${leftLine[leftRule[5]-0][ean13[6]-0]}01010${rightLine[ean13[7]-0]}${rightLine[ean13[8]-0]}${rightLine[ean13[9]-0]}${rightLine[ean13[10]-0]}${rightLine[ean13[11]-0]}${rightLine[ean13[12]-0]}101`;
}
function Line(code) {
  return (
    <div
      className={code === '1' ? 'barcode-black' : 'barcode-white'}
    ></div>
  );
}

export default function EAN13({
  digit
}) {
  return (
    <>
      {Array.from(calc(digit)).map(Line)}
    </>
  );
}
