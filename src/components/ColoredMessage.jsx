

export function ColoredMessage( props ) {
  const contentStyle = {
    color: props.color,
    fontSize: '20px',
  }

  return (
    <p style={contentStyle}>{props.message}{props.children}</p>
  )
}