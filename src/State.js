import React from 'react';

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
    <h1>Hello, <World count={count}/>

      <>{a}</>
      <a href="http://www.naver.com/" />링크
      <button onClick={handle}>숫자 올리기</button>
    </h1>
    <></>
    </>
  );
}
