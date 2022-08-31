import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "jane" lastName = "Doe" age = {45} hairColor = "Black" /> 
      <PersonCard firstName = "John" lastName = "Smith" age = {88} hairColor = "Brown" /> 
      <PersonCard firstName = "Millard" lastName = "Fillmore" age = {50} hairColor = "Brown" /> 
      <PersonCard firstName = "Maria" lastName = "Smith" age = {62} hairColor = "Brown" /> 
      <button onClick={ () => alert("This button has been clicked!") }>Click Me</button>

      

    </div>
  );
}

export default App;
