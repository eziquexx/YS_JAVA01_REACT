import { useParams } from "react-router-dom";

const users = [
  { id:1, name: '홍길동', job: '백수' },
  { id:2, name: '손흥민', job: '운동선수' },
  { id:3, name: '김형준', job: '선수' },
]

export function User() {
  const { id } = useParams();
  // users 배열 안에 있는 객체를 하나씩 불러온다.
  // item.id 와 Number(id)가 동일.
  // item.id는 현재 요소의 'id'값
  // Number(id)는 useParams에서 가져온 'id' 문자열을 숫자로 변환.
  const user = users.find(item => item.id === Number(id));

  return (
    <div>
      { user ? (
        <>
          <h2>사용자 아이디: {id}</h2>
          <p>이름: {user.name}</p>
          <p>직업: {user.job}</p>
        </>
      ) : (
        <p>자료없음</p>
      )}
      
    </div>
  );
}