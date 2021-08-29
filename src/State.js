import React from 'react';
import EAN8 from './commons/EAN8'
import EAN13 from './commons/EAN13'

function World(props) {
  return (<>{props.count}</>);
}

export default function() {
  let a = 0;
  const [ count, setCount ] = React.useState(0);
  console.log(count, a);
  const handle = () => {
    setCount(count+1);
    a++;
  };
  return (
    <>
    <h1>Hello, <World count={count}/></h1>
      <EAN8 digit="8801862"></EAN8><br />
      <EAN13 digit="880111600045"></EAN13><br />
      <>{a}</>
      <a href="http://www.naver.com/" />링크
      <button onClick={handle}>숫자 올리기</button>
    </>
  );
}
