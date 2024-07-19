import React from "react";

// 일반적인 props로 파라미터 값을 받아와서 값을 뿌려주기.
// function Hello(props) {
//   return <div style={{ color: props.color }}>안녕하세요. {props.name}</div>
// }

// props 대신에 비구조화 할당(혹은 구조 분해)문법을 사용하여
// 조금 더 코드를 간결하게 작성
function Hello({ color, name, isSpecial }) {
  // 삼항연산자로 보여주기
  // 보통 삼항연산자를 사용할 때는 조건부 렌더링을 주로 특정 조건에 따라 보여줘야하는 내용이 다를 때 사용.
  // but! 단순히 특정 조건이 true이면 보여주고 그러지 않으면 숨겨주는 간단한 상황에서는 && 연산자를 사용해서 처리하는 것이 더 간편하다.
  // isSpecial이 true이면 좌측, false면 우측 값
  // jsx에서 null, false, undefined를 렌더링하게 된다면 아무것도 나타나지 않는다.
  return (
    <div style={{ color }}>
      {/* { isSpecial ? <b>*</b> : null } */}
      { isSpecial && <b>*</b>}
      안녕하세요. { name }
    </div>
  );
}

// App.jsx에서 name의 값을 지정해주지 않았을 경우.
// 기본으로 defaultProps를 사용하여 기본값으로 출력되게 만들 수 있다.
Hello.defaultProps = {
  name : '이름없음',
}

export default Hello;