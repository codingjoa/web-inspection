import React from 'react'
import InputField from './InputField'
import DB from './db'

function fields([
  name, price, barcode
]) {
  return (
    <InputField
      barcode={barcode}
      name={name}
      price={price}
    />
  );
}

export default function List1() {
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
