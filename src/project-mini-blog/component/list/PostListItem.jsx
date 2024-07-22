import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: poiner;
  background: white;
  :hover {
    background: lightgrey;
  }
`

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`


function PostListItem(props) {

  return (
    <Wrapper onClick={onclick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  )
}

export default PostListItem;