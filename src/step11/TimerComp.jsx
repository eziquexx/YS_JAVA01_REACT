import {Timer} from './Timer';
import { useState, useEffect } from "react";
export function TimerComp() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? '타이머 정지' : '타이머 시작'}
      </button>
      {showTimer && <Timer />}  
    </div>
  );
}