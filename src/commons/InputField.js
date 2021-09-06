import React from 'react'
import Count from './Count'
import EAN8 from './EAN8'
import EAN13 from './EAN13'
import './InputField.css'

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
  const box = localStorage.getItem(`${barcode}-box`);
  const pos = localStorage.getItem(`${barcode}-pos`);
  const real = localStorage.getItem(`${barcode}-real`);
  const [ in1, setIn1 ] = React.useState(pos ?? '0');
  const [ in2, setIn2 ] = React.useState(real ?? '0');
  const [ in3, setIn3 ] = React.useState(box ?? '0');
  const profit = React.useMemo(() => check(in2 - 0, (in3 - 0) * 10 + (in1 - 0)), [in1, in2, in3]);
  const dp1 = Dispatch(setIn1);
  const dp2 = Dispatch(setIn2);
  const dp3 = Dispatch(setIn3);
  React.useLayoutEffect(() => {
    localStorage.setItem(`${barcode}-pos`, in1);
    localStorage.setItem(`${barcode}-real`, in2);
    localStorage.setItem(`${barcode}-box`, in3);
  }, [in1, in2, in3]);
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
      실재고 {(in3 - 0) * 10 + (in1 - 0)}<br />
      개별
      <Count
        dp={dp1}
        p={in1}
        profit={profit}
      />
      보루
      <Count
        dp={dp3}
        p={in3}
        profit="normal"
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
