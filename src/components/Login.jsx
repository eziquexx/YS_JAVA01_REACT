import './login.css';

export function Login(){
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh', backgroundColor:'rgb(235, 235, 235)'
      }}>
      <form style={{ display: 'flex', flexDirection: 'column'}}>
          <h2>Login</h2>
          <input type='text' placeholder='Usename' />
          <br/>
          <input type='password' placeholder='Password' />
          <br/>
          <button formAction=''>
              Login
          </button>
          <p>Don't have an account? <a href="#">Register</a></p>
      </form>
    </div>
  );
}