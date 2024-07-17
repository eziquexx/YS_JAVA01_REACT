import './MemberList.css';
import {useState} from 'react';
export function MemberList(){
  const [users, setUsers] = useState(
    [
      
    ]
  );

  // 텍스트값용 변수
  const [name, setName] = useState(''); // 초기값은 없는 걸로
  const changeName = (e) => {setName(e.target.value)};

  const [age, setAge] = useState('');
  const changeAge = (e) => {setAge(e.target.value)};
  
  const [job, setJob] = useState('');
  const changeJob = (e) => {setJob(e.target.value)};


  // 사용자 추가.
  const addUser = (e) => {
    // form 작동 막기.
    e.preventDefault();
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const newUser = {id: newId, name: name, age: Number(age), job: job};
    setUsers([...users, newUser]);
    setName('');
    setAge('');
    setJob('');
  }
  const deleteUser = (_id) =>{
    const updateUsers = users.filter(user=>user.id !==_id);
    setUsers(updateUsers);
  }
  

  return (
    <>
    <div className="input-container">
      <form onSubmit={addUser}>
        <table >
          <tr>
            <td>이름</td>
            <td>
              <input type="text" placeholder="이름" id="nameInput"
            onChange={changeName} value={name}/>
            </td>

            <td rowspan="3"><button type="submit" id="addBtn">추가</button></td>
          </tr>
          <tr>
            <td>나이</td>
            <td><input type="text" placeholder="나이" id="ageInput"
          onChange={changeAge} value={age}/></td>
            {/* 호출시킬 함수들을 입력하기 onChange */}
          </tr>
          <tr>
            <td>직업</td>
            <td><input  type="text" placeholder="직업" id="jobInput"
          onChange={changeJob} value={job}/></td>
          </tr>
        </table>
      </form>
    </div>

    <div className="list-container">
      <ul id="userList">
        { users.map(
          // (user) => {
          //   return <li key={user.id}>{user.name}({user.age}세){user.job} <button className="delBtn">삭제</button></li>
          // }
          (user) => (
            // key값은 나중에 삭제하기 위해서 만든 것.
            <li key={user.id}>{user.id}{user.name}({user.age}세){user.job} <button className="delBtn" onClick={ () => deleteUser(user.id)}>삭제</button></li>
          )
        )}
      </ul>

    </div>
    
  </>
  );
}