// cSpell: words todos
import TodoState from './components/ToDoState';

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
      </Route>
    </Routes>
    </div>
    </fieldset>
  );
}

export default App;
