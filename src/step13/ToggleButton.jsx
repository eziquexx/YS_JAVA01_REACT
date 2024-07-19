import { useState } from "react";

export function ToggleButton(props){
  const[ onAir, setOnAir] = useState(false);
  const[ onAir2, setOnAir2] = useState(false);
  function func1(){
    setOnAir(!onAir);
  }
  const func2 = ()=>{
    setOnAir2(!onAir2);
  }
  return (
    <>    
      <button onClick={func1}>
        {onAir? "방송중":"방송중단"}
      </button>
      <button onClick={func2}>
        {onAir2? "방송중":"방송중단"}
      </button>
    </>
  );
}