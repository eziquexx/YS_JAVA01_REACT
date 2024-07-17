
import { BtnLogin } from "./app_login_components/BtnLogin"
import { UserNameInput } from "./app_login_components/UsernameInput"
import { PwdInput } from "./app_login_components/PwdInput"
import "./app_login_components/app_login.css"

export function AppLogin() {

  const divWrapStyle = {
    position : 'relative',
    width : '100%',
    height: '100%',
    padding: '0',
    margin: '0',

  }
  const divStyle = {
    width : '50%',
    position : 'relative',
    margin : '0 auto',
    border : '1px solid #ddd',
    borderRadius : '10px',
    padding: '30px',
    boxSizing : 'border-box',
    textAlign : 'center',
    backgroundColor : '#fff',
    boxShadow : '0px 6px 12px 0 rgba(0, 0, 0, 0.1)',
  }

  const divTextStyle = {
    width : '100%',
    marginTop : '14px',
  }

  return (
    <div style={divWrapStyle}>
      <div style={divStyle}>
        <h1 style={{ display:'block', boxSizing:'border-box' }}>Login</h1>
        <UserNameInput/>
        <PwdInput/>
        <BtnLogin>Login</BtnLogin>
        <div style={divTextStyle}>
          <span style={{ marginRight: '10px' }}>Don't have an account?</span>
          <a href="#">Register</a>
        </div>
      </div>
    </div>

  );
}