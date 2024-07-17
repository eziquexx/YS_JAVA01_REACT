export function PwdInput( props ){
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
    <input type="password" placeholder="Username" style={inputStyle}/>
  );
}