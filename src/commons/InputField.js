import React from 'react'
import EAN8 from './EAN8'
import EAN13 from './EAN13'
import './InputField.css'

export default function InputFields({
  barcode,
  handlar, // 기록용 DB
  name,
  price
}) {
  // 담배 종류 저장해 두는 클래스
  return (
    <div className="weed">
      <span>{name}</span>
      <span>{price}</span>
      {(barcode?.length === 12) && <EAN13 digit={barcode} />}
      {(barcode?.length === 7) && <EAN8 digit={barcode} />}
    </div>
  );
}
