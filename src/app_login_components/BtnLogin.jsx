export function BtnLogin( props ){
  const btnStyle = {
    width : '100%',
    display : 'block',
    padding : '10px',
    fontSize : '14px',
    color : '#fff',
    border : 'none',
    backgroundColor : '#1a80ed',
    borderRadius : '6px',
    boxSizing : 'border-box',
    cursor : 'pointer',
  }
  
  return (
    <button style={btnStyle}>{props.children}</button>
  );
}