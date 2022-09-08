// cSpell: words todos
import TodoState from './components/ToDoState';
import Todos from './components/Todos';
import ShowTodo from './components/ShowTodo';
import {Navigate, Routes, Route} from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <fieldset>
      <legend>App</legend>
    <div className="App">
    <Routes>
      <Route path='/' element={ <Navigate to={'/todos'}/>} />
      <Route path='/todos' element={ <TodoState />} >
        <Route index element={ <Todos /> } />
        <Route path=':id' element={ <ShowTodo />} />
        {/* <Route path=':id/edit' element={ <ShowTodo />} />
        <Route path=':id/delete' element={ <ShowTodo />} /> */}




      </Route>
    </Routes>
    </div>
    </fieldset>
  );
}

export default App;
