import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const TodoElement = props => {
  return(
    <li>
      {props.content}
    </li>
  );
}

const AddTodo = props => {
  return(
    <div>
      <input type='text' value={props.value} onChange={props.onChange} />
      <button onClick={props.add}>追加</button>
    </div>
  );
}

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    const newTodo = {id: todoList.length, content: value};
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setValue("");
  };
  return (
    <div>
      <h1>TODO App</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        add={add}
      />
      <ul>{todoList.map(todo => {
        return (
          <TodoElement key={todo.i} content ={todo.content} />
        );
      })}</ul>
      <button onClick={add}>追加</button>

    </div>
  );
};



ReactDOM.render(
  <TodoApp />,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
