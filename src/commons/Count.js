import React from 'react'

export default function Count({
  dp,
  p,
  profit,
  max,
  min
}) {
  return (
    <input
      className={profit}
      max={max}
      min={min}
      onChange={dp}
      type="number"
      value={p}
    />
  );
}
