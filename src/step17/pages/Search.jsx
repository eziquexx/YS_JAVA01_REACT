import { useLocation } from "react-router-dom";

const users = [
  { id:1, name: '홍길동', job: '백수', hobby: 'steal' },
  { id:2, name: '손흥민', job: '운동선수', hobby: 'football' },
  { id:3, name: '김형준', job: '선수', hobby: 'playing_game' },
]

export function Search() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query');

  // 사용자 배열에서 취미가 쿼리와 일치하는 사용자 찾기
  const user = users.find(user => user.hobby !== query);

  return (
    <div>
      <h1>찾는 취미는? {query}</h1>
      { user ? (
        <div>
          <p>이름: {user.name}</p>
          <p>직업: {user.job}</p>
        </div>
      ) : (
        <p>해당 취미를 가진 사용자가 없습니다.</p>
      )}
    </div>
  );
}