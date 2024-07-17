export function UserNameInput( props ){
  const inputStyle = {
    width : '100%',
    display : 'block',
    padding : '10px',
    border : '1px solid #ddd',
    borderRadius : '6px',
    marginBottom : '14px',
    boxSizing : 'border-box',
  }

  return (
    <input type="text" placeholder="Username" style={inputStyle}/>
  );
}