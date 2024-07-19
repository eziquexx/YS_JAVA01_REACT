import { useState } from "react";

export function ToggleButton2(props){
  const[ onAir, setOnAir] = useState(false);
  const[ onAir2, setOnAir2] = useState(true);
  const[ onAir3, setOnAir3] = useState(true);
  function func(event, mode){
    console.log(mode, '==>', event.target, 
      '/',event.target.innerText);
    const _text = event.target.innerText;
    if(mode==1){
      if(_text === '방송중'){
        setOnAir(false);
      } else{
        setOnAir(true);
      }
    } else if(mode==2){
      if(_text === '방송중'){
        setOnAir2(false);
      } else{
        setOnAir2(true);
      }
    } else{
      if(_text === '방송중'){
        setOnAir3(false);
      } else{
        setOnAir3(true);
      }
    }
  }
  return (
    <>    
      <button onClick={(event)=>func(event,1)}>
        {onAir? "방송중":"방송중단"}
      </button>
      <button onClick={(event)=>func(event,2)}>
        {onAir2? "방송중":"방송중단"}
      </button>
      <p onClick={(event)=>func(event,3)}>
        {onAir3? "방송중":"방송중단"}
      </p>
    </>
  );
}