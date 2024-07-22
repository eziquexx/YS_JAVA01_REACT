import { useState, useEffect } from "react";

export function FormTest3() {
  
  const [select, setSelect] = useState('');

  useEffect(() => {
    console.log('useEffect =>', select);
  }, [select]);


  // value값을 출력하는 방법
  // const handleSelectChange = (e) => {
  //   setSelect(e.target.value);
  // }

  // textContent를 출력하는 방법
  const handleSelectChange2 = (e) => {
    const selectEle = e.target;
    const selectOpt = selectEle.options[selectEle.selectedIndex]; // 선택된 옵션의 index값 저장
    const text = selectOpt.textContent; // 선택된 옵션의 textContent 값 저장
    setSelect(text); // 선택된 옵션의 textContent 값 출력
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(select);
  }

  // 선택한 option값을 담기.
  return (
    <>
      <form onSubmit={handleSubmit}>
        <select id="fruit" onChange={handleSelectChange2}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="melon">멜론</option>
        </select>
        <button type="submit">제출</button>
      </form>
    </>
  );
}