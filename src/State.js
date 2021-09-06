import React from 'react'
import List1 from './commons/List1'
import List2 from './commons/List2'

const menus = [
  {name: '결과', index: 2},
  {name: '실재고 등록', index: 0},
  {name: 'POS재고 등록', index: 1}
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

export default function Main() {
  const [ menu, setMenu ] = React.useState(0);
  const MenuButtons = menus.map(Dispatch(setMenu));
  const List = React.useMemo(() => {
    if(menu === 0) {
      return(<List1 />);
    } else {
      return (<List2 />);
    }
  }, [menu]);
  return (
    <>
      <div>
        {menu}
      </div>
      <div>
        {MenuButtons}
      </div>
      {List}
    </>
  );
}
