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
function Button({
  children,
  setMenu,
  value
}) {
  return (
    <div
      className="btn"
      onClick={() => setMenu(value)}
    >
      {children}
    </div>
  );
}

export default function List1({
  hidden
}) {
  const [ menu, setMenu ] = React.useState(0b1111);
  const result = DB['국산담배'].map(fields);
  const result2 = DB['외산1'].map(fields);
  const result3 = DB['외산2'].map(fields);
  const result4 = DB['일본'].map(fields);
  return (
    <>
      <div
        style={{
          'display': hidden ? 'none' : 'block'
        }}
      >
        <Button
          setMenu={setMenu}
          value={0b1111}
        >
          전체
        </Button>
        <Button
          setMenu={setMenu}
          value={0b1000}
        >
          K)국산
        </Button>
        <Button
          setMenu={setMenu}
          value={0b0100}
        >
          B)외국1
        </Button>
        <Button
          setMenu={setMenu}
          value={0b0010}
        >
          P)외국2
        </Button>
        <Button
          setMenu={setMenu}
          value={0b0001}
        >
          J)일본
        </Button>
      </div>
      <div
        style={{
          'display': hidden ? 'none' : 'block'
        }}
      >
        {!!(menu & 0b1000) && result}
        {!!(menu & 0b0100) && result2}
        {!!(menu & 0b0010) && result3}
        {!!(menu & 0b0001) && result4}
      </div>
    </>
  );
}
