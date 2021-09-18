import DB from './db'



export default function Result() {
  const sumObjPrice = {};
  const sumObjCounter = {};
  let sumCount = 0;
  let sumPrice = 0;
  console.log('이 함수는 몇 번 렌더링됩니까?');
  DB['국산담배'].forEach(row => {
    const barcode = row[2];
    const price = row[1];
    const real = localStorage.getItem(`${barcode}-real`) ?? '0';
    const box = localStorage.getItem(`${barcode}-box`) ?? '0';
    const pos = localStorage.getItem(`${barcode}-pos`) ?? '0';
    if(((box - 0) * 10) + (real - 0) !== (pos - 0)) {
      if(!sumObjPrice[price]) {
        sumObjPrice[price] = { count: 0, price: 0, real: 0, pos: 0 };
      }
      sumObjPrice[price].count += ((box - 0) * 10) + (real - 0) - (pos - 0);
      sumObjPrice[price].price += sumObjPrice[price].count * (price - 0);
      sumObjPrice[price].real += ((box - 0) * 10) + (real - 0);
      sumObjPrice[price].pos += (pos - 0);
      if(!sumObjCounter[barcode]) {
        sumObjCounter[barcode] = { count: 0, price: 0, real: 0, pos: 0 };
      }
      sumObjCounter[barcode].name = row[0];
      sumObjCounter[barcode].count += ((box - 0) * 10) + (real - 0) - (pos - 0);
      sumObjCounter[barcode].price += sumObjCounter[barcode].count * (price - 0);
      sumObjCounter[barcode].real += ((box - 0) * 10) + (real - 0);
      sumObjCounter[barcode].pos += (pos - 0);
    }
  })
  return (
    <>{JSON.stringify({sumObjPrice, sumObjCounter})}</>
  );
}
