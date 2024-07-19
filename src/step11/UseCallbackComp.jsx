import React, { useState, useMemo, useEffect, useCallback } from 'react';

// 복잡한 계산 함수 (예: 입력 값의 제곱을 반복적으로 계산)
const calculate = (num) => {
  console.log('복잡한 계산 시작...');
  let result = 0;
  const startTime = performance.now(); 
  for (let i = 0; i < 1000000000; i++) {
    result += num * num;
  }
  const endTime = performance.now(); // 계산 종료 시간 기록
  console.log('복잡한 계산 완료...');
  const elapsedTime = endTime - startTime; // 걸린 시간 계산
  console.log(`계산에 걸린 시간: ${elapsedTime}밀리초`);


  return result;
};

export function UseCallbackComp() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [text, setText] = useState('');
  const [sqnum, setSqnum] = useState(0);

  // useMemo 사용: number가 변경될 때만 calculate 함수 호출
  const squaredNumber = useMemo(() => calculate(number), [number]);

  // useCallback 사용: number2가 변경될 때만 calculate 함수 호출하는 콜백 함수 생성
  const calculateCallback = useCallback(() => {
    if (number2 > 0) {
      let resultNum = calculate(number2);
      setSqnum(resultNum);
      console.log(resultNum);
    }
  }, [number2]);

  // useEffect 사용하여 calculateCallback 함수 호출
  useEffect(() => {
    calculateCallback();
  }, [calculateCallback]);

  return (
    <div>
      <h1>useCallback 예제</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <span> 제곱 결과(useMemo): {squaredNumber}</span>
      <br />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      />
      <span> 제곱 결과(useCallback): {sqnum} </span>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span> 텍스트: {text}</span>
    </div>
  );
};