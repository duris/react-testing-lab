import './App.css';
import Greet from './Greet';

function App() {
  return (
    <div className="App">
     <Greet name="John" location="Spain"/>
     <button>Test</button>
     <select data-testid="fruit">
      <option>Pear</option>
      <option>Bannana</option>
      <option>Orange</option>
     </select>
    </div>
  );
}

export default App;
