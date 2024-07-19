// import React, { Component } from "react";
import React, { useState, useEffect } from 'react';

// export function Example() {
//   const [count, setCount] = useState(0);

//   // componentDidMount, componentDidUpdate와 같은 방식으로
//   useEffect(() => {
//     // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }



// export function Example() {
//   // 새로운 state 변수를 선언하고, count라 부르겠습니다.
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}