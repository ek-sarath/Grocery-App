import React, {useState} from 'react';
import Introduction from './components/Introduction';
import GroceryListApp from './components/GroceryListApp';
import '../src/App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {!started ? (
        <Introduction onStart={() => setStarted(true)} />
      ) : (
        <GroceryListApp />
      )}
    </div>
  );
}

export default App;
