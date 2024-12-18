import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Login from "./Components/Login"
import Todo from "./Components/Todo"
import AddTodo from "./Components/AddTodo"
import EditTodo from "./Components/EditTodo"
import ProtectedRoute from "./ProtectedRoute";
import './style.css';

function App() {
  // const location = useLocation()
  // const isLoginPage = location.pathname === "/";
  return (
    <div >
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/todos" element={<Todo />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/todos/add" element={<AddTodo />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/todos/edit/:todoId" element={<EditTodo />} />
          </Route>
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
