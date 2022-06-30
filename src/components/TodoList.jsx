import {TodoItem} from './Todo';

export const TodoList = (props) =>
  <div>
    {props.items.map((item, index) => <TodoItem key={index} itemId={item.id} text={item.text} done={item.done}
                                                handleCheck={props.handleCheck}/>)}
  </div>