import { useState } from 'react';

import ('./components/ex1.css');
import ('./components/reset.css');

// const [title, setTitle] = useState(['제목1', '제목2', '제목3']);

export function App() {
  
  return (
    <>
      <div className='App'>
        <div className='black-nav'>
          <h4>ReactBlog</h4>
        </div>
        <div className="list">
          <h4>글제목</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>글제목</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>글제목</h4>
          <p>2월 17일 발행</p>
        </div>
      </div>
    </>
  )
}