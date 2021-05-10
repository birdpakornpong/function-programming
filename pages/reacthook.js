import React, { useState } from "react";
import "todomvc-app-css/index.css";
import UseContextDemo1 from "../components/UseContextDemo1";
import TodoStoreContext from "../store/index";
export default function reacthook() {
  const TodoItem = ({ title }) => {
    return (
      <>
        <input className="toggle" type="checkbox" />
        <label dangerouslySetInnerHTML={{ __html: title }} />
        <button className="destroy" />
      </>
    );
  };
  const TodoInput = () => {
    const [textInput, setTextInput] = useState("");
    function onChangeText(e) {
      setTextInput(e.target.value);
    }
    return (
      // <input className="new-todo" value={textInput} onChange={onChangeText} />
      <TodoStoreContext.Consumer>
        {(store) => {
          function onEnterPress(e) {
            if (e.key === "Enter") {
              store.submitTodos(textInput);
              setTextInput("");
            }
          }
          return (
            <input
              onKeyPress={onEnterPress}
              className="new-todo"
              value={textInput}
              onChange={onChangeText}
            />
          );
        }}
      </TodoStoreContext.Consumer>
    );
  };
  const TodoList = () => {
    return (
      <TodoStoreContext.Consumer>
        {(store) => (
          <ul className="todo-list">
            {store.todos.map((todo) => (
              <li key={todo.title}>
                <TodoItem {...todo} />
              </li>
            ))}
          </ul>
        )}
      </TodoStoreContext.Consumer>
      // <div></div>
    );
  };

  const TodoStoreProvider = ({ children }) => {
    const [todos, setTodos] = useState([
      {
        title: "Touch myself.",
      },
      {
        title: "Sleep peacefully",
      },
    ]);
    const store = {
      todos,
      submitTodos: (title) => setTodos(todos.concat({ title })),
    };
    return (
      <TodoStoreContext.Provider value={store}>
        {children}
      </TodoStoreContext.Provider>
    );
  };
  const TodoCount = () => {
    const store = React.useContext(TodoStoreContext);
    return (
      <span className="todo-count">
        <strong>{store.todos.length}</strong>
        item{store.todos.length === 1 ? "" : "s"} left
      </span>
    );
  };
  const TodoFilters = () => <div />;
  const Footer = () => <div />;
  return (
    <TodoStoreProvider>
      <UseContextDemo1 />
      <div className="App todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        <section className="main">
          <TodoList />
        </section>
        <footer className="footer">
          <TodoCount />
          <TodoFilters />
        </footer>
      </div>
      <Footer />
    </TodoStoreProvider>
  );
}
