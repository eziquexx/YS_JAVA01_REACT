import { useState } from "react";


export function FormTest1(){

  const [name, setName] = useState('');
  const submitEvent = (event) => {
    event.preventDefault();
    alert(name);
  }

  return (
    // onsubmit="자바스크립트 함수명"
    <form onSubmit={submitEvent}>
      <label>이름</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">제출</button>
    </form>
  );
}