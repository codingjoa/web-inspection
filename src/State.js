import React from 'react'
import EAN8 from './commons/EAN8'
import EAN13 from './commons/EAN13'
import InputField from './commons/InputField'
import DB from './commons/db'

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

export default function() {
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
