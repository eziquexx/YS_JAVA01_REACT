const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirction: 'row',
    border: '1px solid gray',
    borderRadius: 16,
  },

  imageContainer: {
    height: 50,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  contentContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  commentText: {
    color: 'grey',
    fontSize: 16,
  }
}


// 파라미터로 comm의 값을 받아와야한다.
// comm 으로 들어오는 값은 App.jsx 에 있는
// const comments = [ {}, {} ] 배열의 객체들.
// 처음에는 첫번째 {} 객체의 내용이 값으로 들어온다.
// 첫번째가 끝나면 두번째 {} 객체의 내용이 값으로 들어온다.

export function CommentBox(comm){

  return (
    <div className="wrapper" style={ styles.wrapper } >
        <div className="image-container" style={ styles.imageContainer }>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                className="image" style={ styles.image }
                alt="Profile Image"
            />
        </div>
        <div className="content-container" style={ styles.contentContainer }>
            {/* {comm.name} 은 App.jsx에서 가져온   */}
            {/* const comments = [ {}, {} ] 안에 있는 {} 중괄호 안에 있는 값들이다 */}
            {/* {} 중괄호 안에 있는 값이 comm의 값으로 들어오고 comm.name은 */}
            {/* comm에 들어온 값중 name이라는 프로퍼티(속성)을 뜻한다. */}
            {/* 아래 comm.comment 도 마찬가지이다. */}
            <span className="name-text" style={ styles.nameText }>{comm.name}</span>
            <span className="comment-text" style={ styles.commentText }>{comm.comment}</span>
        </div>
    </div>
  );
}