import { useEffect, useState } from "react";


export function FormTest4() {

  const [haveBreakfast, setHaveBreakFast] = useState(false);
  const [numberOfGuest, setNumberOfGuest] = useState(0);  
  
  useEffect(() => {
    return (
      console.log(haveBreakfast, numberOfGuest)
    )
  }, [haveBreakfast, numberOfGuest]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const breakfastStatus = haveBreakfast ? '먹음' : '안 먹음';

    alert(`아침식사 여부: ${breakfastStatus}, 방문객 수: ${numberOfGuest}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          아침식사 여부:
          <input 
            type="checkbox"
            checked={haveBreakfast} 
            onChange={(e) => setHaveBreakFast(e.target.checked)}
          />
        </label>
        <br />
        <label>
          방문객 수:
          <input 
            type="number" 
            value={numberOfGuest}
            onChange={(e) => setNumberOfGuest(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}