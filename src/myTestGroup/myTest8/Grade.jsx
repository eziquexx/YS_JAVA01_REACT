import { useState } from "react";


function Grade (props){ // kor, eng, math

  // 총점
  const [total, setTotal] = useState(0);
  // 평균
  const [avg, setAvg] = useState(0);
  // 과락
  const [mark, setMark] = useState(0);
  // 합격여부
  const [pass, setPass] = useState('');

  function grading(){
    // let totalNum = props.kor + props.eng + props.math;
    setTotal(props.kor + props.eng + props.math);

    let avgNum = Math.round( (total / 3 ) * 10 ) / 10;
    setAvg( avgNum );

    // 평균 점수 합격 여부
    if (avgNum >= 60){
       setPass('합격');
    } else {
      setPass('불합격');
    }

    // 과목 과락 건수
    let markNum = 0;
    if(props.kor < 40){ markNum++; }
    if(props.eng < 40){ markNum++; }
    if(props.math < 40){ markNum++; }
    setMark( markNum );


  }

  return (
    <>
      <button onClick={grading}>판정</button>
      <div>국어: {props.kor}점 / 영어: {props.eng}점 / 수학: {props.math} 점 </div>
      <div>총점: {total}</div>
      <div>평균: {avg}</div>
      <div>과락: {mark}</div>
      <div>합격여부: {pass}</div>
    </>
  );
}

export default Grade;