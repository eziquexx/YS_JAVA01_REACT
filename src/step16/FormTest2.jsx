import { useState } from "react";


export function FormTest2() {

  const [request, setRequest] = useState('123');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(request);
  }
 
  const handleChange = (e) => {
    setRequest(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          요청사항:
          <textarea 
            value={request} 
            onChange={handleChange}>
              {request}
          </textarea>
        </label>
        <button type="submit">제출</button>
      </form>
    </>
  );
}