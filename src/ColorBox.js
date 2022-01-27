const ColorBox = ({color}) => {
  return (
    <div 
      className="ColorBox" 
      style={{backgroundColor: color}}
    >
      {color ? color : "Empty value"}
    </div>
  );
}

export default ColorBox;
