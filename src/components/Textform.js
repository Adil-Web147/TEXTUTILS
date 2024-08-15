import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","sucess");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","sucess");
  };

  const handleClclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text-Box are Cleared!","sucess");
  };

  const HandleCopy = () => {
    var textArea = document.getElementById("MyBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Text are Coyped!","sucess");
  };

  const RemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are Removed!","sucess");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            id="MyBox" 
            rows="8" 
            value={text} 
            onChange={handleOnChange} 
            style={{ 
              backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', // Update the background color
              color: props.mode === 'dark' ? 'white' : '#042743' 
            }}
          ></textarea>
        </div>
        <button type="button" className="btn btn-warning mx-1" onClick={handleUpclick}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to LowerCase</button>
        <button type="button" className="btn btn-danger mx-1" onClick={handleClclick}>Clear Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={HandleCopy}>Copy Text</button>
        <button type="button" className="btn btn-warning mx-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something in the TextBox to Preview it Here"}</p>
      </div>
    </>
  );
}
