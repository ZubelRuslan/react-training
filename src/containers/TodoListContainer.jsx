import React from 'react';
import {TodoList} from '../components/TodoList';
import {AddTodo} from './AddTodo';

const initialTodoItems = [
  {
    id: 1,
    text: 'TODO item 1',
    done: false
  },
  {
    id: 2,
    text: 'TODO item 2',
    done: true
  }
]

export class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: initialTodoItems
    }
  }

  handleCheck = (value) => {
    const resultItems = [...this.state.todoList]
    const index = resultItems.findIndex(item => item.id === value.id)
    resultItems[index] = {
      ...resultItems[index],
      done: value.done
    }
    this.setState({
      ...this.state,
      todoList: resultItems
    })
  }

  addTodo = (event) => {
    const itemToAdd = {
      id: new Date().getTime(),
      text: event.text,
      done: false
    }
    const resultItems = [itemToAdd, ...this.state.todoList];
    this.setState({
      todoList: resultItems
    })
  }

  render() {
    return (
      <>
        <AddTodo handleSubmit={this.addTodo}/>
        <TodoList items={this.state.todoList} handleCheck={this.handleCheck}/>
      </>
    )
  }
}