import ColorBox from "./ColorBox";
import ColorInputBox from "./ColorInputBox";
import {useState} from 'react';
import colorNames from "colornames";

const App = () => {
  const [bgColor, setBgColor] = useState('');
  const [hexColor, setHexColor] = useState('');
  const [darkText, setDarkText] = useState(true);

  const handleChange = (e) => {
    setBgColor(e.target.value);
    setHexColor(colorNames(e.target.value));
  }

  return (
    <div>
      <div className="background"></div>
      <div className="App">
        <h3>Color Picker</h3>
        <ColorBox 
          color={bgColor} 
          hexColor={hexColor} 
          darkText={darkText} 
          setDarkText={setDarkText}
        />
        <ColorInputBox
          value={bgColor}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
