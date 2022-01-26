const ColorInputBox = ({value, onChange}) => {
  return (
    <div className="ColorInputBox">
      <input 
        type="text" 
        id="color-input"
        value={value}
        onChange={onChange}
        />
    </div>
  );
}

export default ColorInputBox;
