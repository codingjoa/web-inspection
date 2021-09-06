import React from 'react'
import DB from './db'
function fields([
  name, price, barcode
]) {
  return (
    <>
      {name}\\{price}
    </>
  );
}

export default function List2(

) {
  const result = DB['국산담배'].map(fields);
  const result2 = DB['외산1'].map(fields);
  const result3 = DB['외산2'].map(fields);
  const result4 = DB['일본'].map(fields);
  return (
    <>
      {result}
      {result2}
      {result3}
      {result4}
    </>
  );
}
