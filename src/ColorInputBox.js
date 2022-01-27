const ColorInputBox = ({value, onChange}) => {
  return (
    <div className="ColorInputBox">
      <input 
        type="text" 
        id="color-input"
        value={value}
        onChange={onChange} 
        placeholder="Enter a color name"
        />
    </div>
  );
}

export default ColorInputBox;
