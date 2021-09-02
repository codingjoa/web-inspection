import React from 'react'
import EAN8 from './EAN8'
import EAN13 from './EAN13'
import './InputField.css'

function Count({
  dp,
  p,
  profit
}) {
  return (
    <input
      className={profit}
      onChange={dp}
      type="number"
      value={p}
    />
  );
}
function Dispatch(fn) {
  return (e) => fn(e.target.value);
}
function check(a, b) {
  if(a > b) {
    // 실재고 적음
    return 'loss';
  } else if(a < b) {
    return 'profit';
  }
  return 'normal';
}

export default function InputFields({
  barcode,
  handlar, // 기록용 DB
  name,
  price
}) {
  // 담배 종류 저장해 두는 클래스
  const pos = localStorage.getItem(`${barcode}-pos`);
  const real = localStorage.getItem(`${barcode}-real`);
  const [ in1, setIn1 ] = React.useState(pos ?? '0');
  const [ in2, setIn2 ] = React.useState(real ?? '0');
  const profit = React.useMemo(() => check(in2 - 0, in1 - 0), [in1, in2]);
  const dp1 = Dispatch(setIn1);
  const dp2 = Dispatch(setIn2);
  React.useLayoutEffect(() => {
    localStorage.setItem(`${barcode}-pos`, in1);
    localStorage.setItem(`${barcode}-real`, in2);
  }, [in1, in2]);
  return (
    <div className="weed center">
      <span>{name}</span>
      <span>{price}</span>
      <div>
        {(barcode?.length === 12) && <EAN13 digit={barcode} />}
        {(barcode?.length === 7) && <EAN8 digit={barcode} />}
      </div>
      <span className="small">
        {barcode}
      </span>
      실재고
      <Count
        dp={dp1}
        p={in1}
        profit={profit}
      />
      장부재고
      <Count
        dp={dp2}
        p={in2}
        profit="normal"
      />
    </div>
  );
}
