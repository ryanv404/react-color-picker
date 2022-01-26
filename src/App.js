import ColorBox from "./ColorBox";
import ColorInputBox from "./ColorInputBox";
import {useState} from 'react';
;

const App = () => {
  const [bgColor, setBgColor] = useState('');

  const handleChange = (e) => {
    setBgColor(e.target.value);
  }

  return (
    <div className="App">
      <h3>React Color Picker</h3>
      <ColorBox color={bgColor}/>
      <ColorInputBox 
        value={bgColor} 
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
