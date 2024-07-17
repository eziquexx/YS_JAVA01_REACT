import { InputUser } from './components/App003_InputUser';
import { OutputUser } from './components/App003_OutputUser';

export function App(){
  
  const formStyle = {
    width: '60%',
    display: 'block',
    margin: '20px auto',
  }

  const addUser = () => {
    // input값 담기.
    let test = [];

    const inputName = document.getElementById('userName');
    const inputAge = document.getElementById('userAge');
    const inputJob = document.getElementById('userJob');

    let a = inputName.value;
    let b = inputAge.value;
    let c = inputJob.value;

    function userList(name, age, job){
      this.name = name;
      this.age = age;
      this.job = job;
    };

    




    // addBtn 클릭하면 Output User에 뿌려주기
  }

  return (
    <form style={formStyle}>
      {/* Input User */}
      <InputUser></InputUser>

      {/* Add User */}
      <OutputUser></OutputUser>
    </form>
  );
}