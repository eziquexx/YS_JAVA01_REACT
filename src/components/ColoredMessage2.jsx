export function ColoredMessage2( props ){
  const contentStyle = {
    color: props.color,
    fontSize: '20px',
  }

  return (
    <p style={contentStyle}>{props.children}{props.message}</p>
  )
}