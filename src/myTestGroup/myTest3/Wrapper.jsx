import React from "react";


// props에 { children }을 안 적으면 자식 요소들이 보이지 않는다. 자식 요소들이 보이게 하려면 꼭 props 값으로 { children }을 적어주자.(props.children을 렌더링 해주는 작업) 그리고 자식 요소가 보이는 위치에도 { children }을 추가해주자.
function Wrapper({ children }) { 
  const style = {
    border: '2px solid black',
    padding: '16px',
  }

  return (
    <div style={ style }>
      {/* App.jsx 에서 Hello 컴포넌트도 보여지게 하려면 */}
      {/* { children } 을 추가해줘야한다. */}
      { children }
    </div>
  );
}

export default Wrapper;