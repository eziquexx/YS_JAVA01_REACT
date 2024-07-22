import styled from "styled-components";

// width: calc(100% - 32px); css calc() 함수다.
// 윈도우 브라우저 너비가 100%이라고 하면.
// 불여도 32px이 고정영역으로 자리잡고 있다.
const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  
  ${(props) =>
    props.height &&
    `
    height: ${props.height}px;
    `
  }

  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`

// props 값을 가져옴.
function TextInput(props) {
  const { height, value, onChange } = props;

  return <StyledTextarea height={height} value={value} onChange={onChange} />
}

export default TextInput;