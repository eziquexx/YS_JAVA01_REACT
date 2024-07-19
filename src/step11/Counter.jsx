import { useState } from "react";
import { useEffect } from "react";

// export function Counter(props){
//   let count = 0;
//   return (
//     <div>
//       <p>총 { count }번 클릭했습니다.</p>
//       <button onClick={ () => { count++;  console.log(count); } }>클릭</button>
//     </div>
//   );
// }


// 1. Dom 객체에 직접 값 변경하기
// export function Counter(props){
//   let count = 0;
//   return (
//     <div>
//       <p id='msg'>총 { count }번의 클릭했습니다.</p>
//       <button onClick={ () => {
//         count++;
//         let msgEle = document.getElementById('msg');
//         msgEle.innerText = `총 ${count}번의 클릭했습니다.`;
//         console.log('count => ', count);

//       } }>클릭</button>
//     </div>
//   );
// }


// // 2. hook, useState 사용하기.
// export function Counter(props){ // 여기서 props 는 아무런 기능을 하지는 않음. 값을 받아오는 곳이기 때문에. 외부에서 값을 받아올 게 없음.
//   let [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>총 { count }번 클릭했습니다.</p>
//       {/* setCount( count++; ) 은 읽기 전용이라 직접 변경 불가능하다.*/}
//       <button onClick={ () => { setCount(count + 1)} }>클릭</button>
//     </div>
//   );
// }

// 3.useEffect사용하는방법
export function Counter(props){
  // const[읽기변수, 입력함수] = useState(초기값)
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //마운트후, 수정후 실행
  useEffect(
    ()=>{
      document.title = `총 ${count} / ${count2}`;
      console.log('effect_count=>',count,',',count2);
      return ()=>{
        console.log('before unmount=>',count,',',count2);
      }
    }, [count]
  );
  return (
    <div>
      <p id='msg'>총 {count}/ {count2}번의 클릭했습니다.</p>
      <button onClick={()=>{
        //count++; 읽기전용이라 직접변경 불가능
        setCount(count+1);
        console.log('count=>',count+1);
      }}>클릭1</button>

      <button onClick={()=>{
        //count++; 읽기전용이라 직접변경 불가능
        setCount2(count2+1);
        console.log('count2=>',count2 + 1);
      }}>클릭2</button>
    </div>  
  );
}