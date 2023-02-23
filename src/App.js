import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import todo from "./UI/Image/todo.png";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ToDO</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="TodoList" />
      </Helmet>
      <div className="header">
        <img className="img" src={todo} alt="logo" />
        <h1 className="title">Finally organize your work and your life.</h1>
      </div>
      <div className="todo-app">
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
