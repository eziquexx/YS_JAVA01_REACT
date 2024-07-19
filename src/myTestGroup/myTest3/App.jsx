import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {

  // isSpecial={ true } 는 isSpecial과 동일한 의미.
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;