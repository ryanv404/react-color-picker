const ColorBox = ({color, hexColor, darkText, setDarkText}) => {
  let textColor = darkText ? "#000" : "#FFF"

  return (
    <div 
      className="ColorBox" 
      style={{
        backgroundColor: color,
        color: textColor
      }}
    >
      <p>{color ? color : "Empty value"}</p>
      <p>{hexColor ? hexColor : null}</p>
      <button className="textButton" onClick={() => setDarkText(!darkText)}>
        Use {darkText ? "Light" : "Dark"} Text
      </button>
    </div>
  );
}

export default ColorBox;
