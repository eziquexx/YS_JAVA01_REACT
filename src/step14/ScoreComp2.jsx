import { useState } from "react";


function Grade(props) {
  if(props.score > 60) {
    return (
      <p>합격입니다.</p>
    );
  } else {
    return (
      <p>불합격 입니다.</p>
    );
  }
}


export function ScoreComp2(props) {
  const [score, setScore] = useState(0);
  function changeText(e) {
    console.log(e.target.value);
    let _score = Number(e.target.value);
    setScore(_score);
  }


  const { text1, text2, text3 } = score;
  console.log('score', score);

  const onChangeEvent = (e) => {
    const { value } = e.target;
    console.log('value값', value);
  }


  return (
    <>
      <div>
        국어: 
        <input type="text" onChange={onChangeEvent} value={text1}></input>
      </div>
      <div>
        영어: 
        <input type="text" onChange={onChangeEvent} value={text2}></input>
      </div>
      <div>
        수학: 
        <input type="text" onChange={onChangeEvent} value={text3}></input>
      </div>
      <Grade score={ score } />
    </>
  );
}

export default ScoreComp2;