import { CommentBoxList } from "./CommentBoxList";
import { MemberList } from "../components/MemberList";

export function App(){
  return (
    <>
      <MemberList/>
      <CommentBoxList/>
      {/* <div className="wrapper">
          <div className="image-container">
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  className="image"
                  alt="Profile Image"
              />
          </div>
          <div className="content-container">
              <span className="name-text">홍길동</span>
              <span className="comment-text">정말 재미있는 영화였음</span>
          </div>
      </div>
      <div className="wrapper">
          <div className="image-container">
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  className="image"
                  alt="Profile Image"
              />
          </div>
          <div className="content-container">
              <span className="name-text">홍길동2</span>
              <span className="comment-text">정말 감동적인 영화였음</span>
          </div>
      </div> */}
    </>
  );
}