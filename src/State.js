import React from 'react'
import List1 from './commons/List1'
import List2 from './commons/List2'
import Result from './commons/Result'
import DB from './commons/db'

const menus = [
  {name: '결과', index: 2},
  {name: '실재고 등록', index: 0},
//  {name: 'POS재고 등록', index: 1}
];
function Dispatch(dp) {
  return ({
    index,
    name
  }) => (
    <div
      className="btn"
      onClick={() => dp(index)}
    >
      {name}
    </div>
  );
}
function Reset() {
  return (
    <div
      className="btn"
      onClick={() => localStorage.clear()}
    >
      초기화
    </div>
  );

}

export default function Main() {
  const [ menu, setMenu ] = React.useState(0);
  const MenuButtons = menus.map(Dispatch(setMenu));
  React.useLayoutEffect(() => {
    console.log(localStorage);
  }, [localStorage]);
  return (
    <>
      <div>
        {MenuButtons}
        <Reset/>
      </div>
      <List1 hidden={menu !== 0} />
      <List2 hidden={menu !== 1} />
      {menu === 2 && <Result />}
    </>
  );
}
