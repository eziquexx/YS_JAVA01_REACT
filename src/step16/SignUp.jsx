import { useState } from "react";


export function SignUp() {
  const [name, setName] = useState('');
  const [gender, setGentder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`${name}, ${gender}`);
  }
  
  const genderChange = (e) => {
    const genderTarget = e.target;
    const genderSelected = genderTarget.options[genderTarget.selectedIndex];
    const text = genderSelected.textContent;
    setGentder(text);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          성별:
          <select value={gender} onChange={genderChange}>
            <option value="male">남자</option>
            <option value="female">여자</option>
          </select>
        </label>
        <button type="submit">제출</button>
      </form>
    </>
  );
}