import React, { useState, useEffect } from "react";


const MAX_CAPACITY = 10;

// export const Counter = (props) => {
export function Counter(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, setCount] = useState(0);

    const increaseCount = ()=>{
      let newCount = count+1;
      setIsFull(newCount >= MAX_CAPACITY);
      setCount(newCount);
    }

    const decreaseCount = ()=>{
      let newCount = count-1;
      setIsFull(newCount >= MAX_CAPACITY);
      if(newCount>=0){
        setCount(newCount);
      }
    }

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}