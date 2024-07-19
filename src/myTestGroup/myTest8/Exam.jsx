import { useState } from "react";
import Grade from "./Grade";


function Exam() {

  // 각 과목별로 값 담기.
  const [kor, setKor] = useState(0);
  const [eng, setEng] = useState(0);
  const [math, setMath] = useState(0);

  // const changesNum = (e) => {
  //   setKor( Number(e.target.value) );
  //   setEng( Number(e.target.value) );
  //   setMath( Number(e.target.value) );
  // }
  
  return (
    <div>
      <form>
        <div>국어: <input type="text" onChange={ (e) => setKor(Number(e.target.value)) } value={kor}/></div>
        <div>영어: <input type="text" onChange={ (e) => setEng(Number(e.target.value)) } value={eng}/></div>
        <div>수학: <input type="text" onChange={ (e) => setMath(Number(e.target.value)) } value={math}/></div>
      </form>

      <Grade kor={kor} eng={eng} math={math}/>
    </div>
  );
}

export default Exam;