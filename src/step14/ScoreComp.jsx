import { useState } from "react";

function Grade(props){
  if(props.score > 60){
    return (<p>합격입니다.</p>);    
  } else {
    return (<p>불합격입니다.</p>);    
  }

}

export function ScoreComp(props){
  const [score, setScore] = useState(50);
  function changeText(event){
    console.log(event.target.value);
    let _score = Number(event.target.value);
    setScore(_score);
  }
  return (
    <>
      <input type="text" onChange={(event)=>changeText(event)}></input>
      <Grade score={score}></Grade>
    </>
  );
}