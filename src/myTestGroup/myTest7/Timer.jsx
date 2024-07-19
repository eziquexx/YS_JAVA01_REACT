import { useEffect } from "react";


function Timer() {
  
  // const timer = setInterval( () => {
  //   console.log('타이머 작동중');
  // }, 1000)

  useEffect( () => {
    const timer = setInterval( () => {
      console.log('타이머 작동중');
    }, 1000 )

    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    }
  } )


  return (
    <div>
      <p>타이머 시작. 콘솔창 확인</p>
    </div>
  );
}

export default Timer;