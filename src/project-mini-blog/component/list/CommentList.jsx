import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  :not(:last-child) {
    margin-bottom: 6px;
  }
`

function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      { comments.map((comment, index) => {
        return (
          <CommentList 
            key={comment.id}
            comment={comment} 
          />
        );
      })
      }
    </Wrapper>
  )
}

export default CommentList;