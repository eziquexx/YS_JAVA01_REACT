import { MemberItem } from './MemberItem';
import './MemberList.css';
// import './MemberList2.css';

import { useState } from 'react';

export function MemberList(){
  const [users, setUsers] = useState(
    [
    ]
  );

  // 텍스트값용 변수    
  const [name, setName] = useState('');
  const changeName = (e)=>{setName(e.target.value);}

  const [age, setAge] = useState('');
  const changeAge = (e)=>{setAge(e.target.value);}

  const [job, setJob] = useState('');
  const changeJob = (e)=>{setJob(e.target.value);}

  const addUser = (e) => {
    e.preventDefault();

    // 새로운 ID 생성
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    // 3 4 5 6 +1 -> 7
    
    const newUser = {id:newId, name:name ,age:Number(age), job:job};
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
  <div class="input-container">
    <form id="userForm" onSubmit={addUser}>
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
        </tr>
        <tr>
          <td>직업</td>
          <td><input  type="text" placeholder="직업" id="jobInput"
          onChange={changeJob} value={job}/></td>
        </tr>
      </table>
    </form>
  </div>

  <div class="list-container">
    <ul id="userList">
      {
        users.map(
          (user)=>(
            <MemberItem id={user.id} name={user.name} age={user.age} job={user.job} call_func={deleteUser} />

            // <li key={user.id}>{user.id}. {user.name}({user.age}세){user.job} <button className="delBtn" onClick={()=>deleteUser(user.id)}>삭제</button></li>
          )
        )
      }
      
    </ul>
  </div>
  </>
  );
}