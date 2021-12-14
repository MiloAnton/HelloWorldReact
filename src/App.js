import './App.css';
import Button from './components/Button';
import IconFct from './components/icon';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('haha')
  let randString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return (
    <div className="App">
      <header className="App-header">
          <IconFct value={name}/>
          <Button value={"Random Avatar"} onClick={() => setName(randString)}/>
      </header>
    </div>
  );
}
export default App;
