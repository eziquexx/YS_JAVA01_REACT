import ('./reset.css');
import ('./app003_InputUser.css');

export function InputUser(){



  return (
    <fieldset class="inputWrap">
      <legend>Input User</legend>
    
        <div class="addUserInputWrap">
          <div>
            <label for="userName">이름 : </label>
            <input type="text" id="userName"></input>
          </div>
          <div>
            <label for="userAge">나이 : </label>
            <input type="text" id="userAge"></input>
          </div>
          <div>
            <label for="userJob">직업 : </label>
            <input type="text" id="userJob"></input>
          </div>
        </div>
        <button class="addBtn">추가</button>
    </fieldset>
  )
}