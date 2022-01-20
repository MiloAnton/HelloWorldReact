import './App.css';
import Button from './components/Button';
import IconFct from './components/icon';
import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'micah', label: 'Micah' },
  { value: 'adventurer', label: 'Adventurer' },
  { value: 'avataaars', label: 'Avataaars' },
  { value: 'big-ears', label: 'Big-Ears' },
  { value: 'bottts', label: 'Bottts' },
  { value: 'croodles', label: 'Croodles' },
  { value: 'croodles-neutral', label: 'Croodles Neutral' },
  { value: 'identicon', label: 'Identicon' },
  { value: 'miniavs', label: 'Miniavs' },
  { value: 'open-peeps', label: 'Open Peeps' },
  { value: 'personas', label: 'Personas' },
  { value: 'pixel-art', label: 'Pixel Art' },
  { value: 'pixel-art-neutral', label: 'Pixel Art Neutral' },
];

function App() {
  const [name, setName] = useState('basicLove')
  let randString = Math.random().toString(36).substring(2, 15);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
          <IconFct seed={name} type={selectedOption} />
          <Button value={"Random Avatar"} onClick={() => setName(randString)}/>
          <Select
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="selectype"
          />
          <p className="pied">
            All avatars are generated using Dicebear's Avatars API
          </p>
      </header>
      
    </div>
  );
}
export default App;
