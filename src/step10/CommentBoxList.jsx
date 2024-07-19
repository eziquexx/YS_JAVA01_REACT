import { CommentBox } from './CommentBox';
// import ('./Comment.css');

// 이름 배열로 만들기
const comments = [
  // 배열의 아이템들을 객체 형태로 만들거임.
  {name: '손흥민', comment: '정말 재미있는 영화였음'},
  {name: '홍길동', comment: '정말 감동의 서사시였음'},
]

export function CommentBoxList(){
 return (
  <>
  
  {
    // const comments를 보면 배열 안의 객체들은 반복되는 거다.
    // 그렇기 때문에 .map()함수를 사용하자.
    // .map()함수는 간단하게 말하자면 처음부터 끝까지 순회한다고 생각하자.
    // .map()함수안에 화살표함수를 만들었다. () => {}
    // 화살표 함수에서 () 중괄호 안에 들어가는 comm은 
    // const comments = [ {}, {} ] 배열(대괄호)안에 있는 {} 중괄호들의 값이다.
    // {} 중괄호들은 객체이며 배열의 값이다.
    // comm 에 들어온 배열의 값들이 하나씩 들어와서 실행되는 거다.
    comments.map(
      (comm) => {
        // return <p>{comm.name} : {comm.comment}</p>
        return (
          // CommentBox 훅을 가져와서 사용할거다.
          // CommentBox 안에 있는 내용 중 namm은
          // CommentBox.jsx에서 생성한 훅(=함수)인 CommentBoxs
          <CommentBox name={comm.name} comment={comm.comment}></CommentBox>
        )
      }
    )
  }
  </>
 );
}