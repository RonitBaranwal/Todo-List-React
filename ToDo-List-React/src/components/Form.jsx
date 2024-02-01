import Buttons from "./Buttons";
import { useState } from "react";
import TodoList from "./TodoList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form() {
  const [listItem, setListItem] = useState('');
  const [todoList,setTodoList] = useState([]);
  const handleList = (e) => {
    e.preventDefault();
    setTodoList((prev) => {
      return [...prev, listItem];
    })
    // console.log([...todoList]);
    setListItem('');
    
  }
  const deleteItem = (ind) => {
    const array = [...todoList];
    console.log("form elements")
    array.splice(ind, 1);
    setTodoList(array);
  }
  const clearTodoList = () => {
    setTodoList([]);
  }
  const clearCompletedTask = () => {
    return;
  }

  return (
    <>
      <form id="add-task" className="ui left icon input fluid" onSubmit={handleList}>
        <input id="add-task-input" className="large" value={listItem} type="text" placeholder="Write your task here..." onChange={(e)=>setListItem(e.target.value)} />
        <i className="tasks icon"></i>
      </form>
      <Buttons clearAllTask={clearTodoList} clearCompletedTask={clearCompletedTask} />
      <TodoList todoListItems={todoList} setTodoListItems={deleteItem} />
      <ToastContainer/>
    </>
  )
}
