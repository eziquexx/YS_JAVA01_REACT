import { useState, useRef } from "react";

function InputSample(){
  
  const [inputs, setInputs] = useState(
    // 초기값 -> inputs로 들어감.
    {
      name : '',
      nickname: '',
    }
  );
  
  // 처음에 useRef(); 소괄호 안에 기본으로 null 값을 줘야함.
  const nameInput = useRef(null);

  // input에서 받아온 vlue의 값들
  const { name, nickname } = inputs;
  // console.log({name});
  // console.log({nickname});
  
  const onChange = (e) => {
    
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [ name ] : value
      
    })
    // current 뜻이 현재의
    // 즉, 현재 포커스 되어 있다.?
    nameInput.current.focus();

    // const e.target = value
    // const e.target = name
    // [ name ] : value
    // 키 : 값
    // 변수를 키로 사용하려면 [ ] 대괄호 사용.
  }

  
  
  // onReset이 실행되는 건 inputs에 초기화를 시켜주는 것.
  // 초기화 시켜주려면 setInputs에 초기값으로 빈 문자를 넣어주면 됨.
  const onReset = () => {
    setInputs({
      name : '',
      nickname: '',
    })
    // nameInput을 준 곳으로 포커싱해라.
    nameInput.current.focus();
  }

  return (
    <div>
      <input 
        name="name" 
        onChange={ onChange } 
        value={ name }
        placeholder="이름"  
        ref={ nameInput }
      />
      <input 
        name="nickname" 
        onChange={ onChange } 
        value={ nickname } 
        placeholder="닉네임" 
      />
      <button onClick={ onReset }>초기화</button>
      <div>
        <b>값: </b>
        name: { name }, nickname: { nickname }
      </div>
    </div>
  );
}

export default InputSample;