import { ColoredMessage } from "./components/ColoredMessage";
import { ColoredMessage2 } from "./components/ColoredMessage2";

export function App2() {
  const divStyle = {
    border: '1px solid blue'
  }
  
  const btnEvent = () => {
    alert('HELLO WORLD!')
  }
  const redStyle = {
    color: 'red',
    backgroundColor: 'yellow',
  }
  const pinkStyle = {
    color: 'pink',
    fontSize: '20px',
  }


  return (
    <div style={divStyle}>
      {console.log('test')}
      <p style={{color: 'blue', fontSize: '32px'}}>안녕하세요</p>
      {/* <p style={redStyle}>반갑습니다. 잘 지내시죠?</p> */}

      <ColoredMessage color='orange' message='잘 지내시죠?'/>
      <ColoredMessage color='red' message='How do u do?'/>
      <ColoredMessage message='How do u do?'/>

      <ColoredMessage message="메세지1"/>

      <ColoredMessage>메세지2</ColoredMessage>

      <ColoredMessage2 color='blue'>잘 지내시나요?222</ColoredMessage2>
      <ColoredMessage2 color="green" message="잘 못 지내는데요."/>
      <p style={pinkStyle}>잘 지내고 있습니다.</p>
      <button onClick={btnEvent}>버튼</button>
    </div>
  );
}