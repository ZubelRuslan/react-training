export const TodoItem = (props) => {
  const emitChecked = () => {
    props.handleCheck({
      done: !props.done,
      id: props.itemId
    })
  }
  return <div>
    <input type="checkbox" checked={props.done} onChange={emitChecked}/>
    <span>{props.text}</span>
  </div>
}