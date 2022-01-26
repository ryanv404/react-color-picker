const ColorBox = ({color}) => {
  return (
    <div 
      className="ColorBox" 
      style={{backgroundColor: color}}
    >
      {color}
    </div>
  );
}

export default ColorBox;
