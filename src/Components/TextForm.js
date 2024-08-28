//import React from 'react';
import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const handleupperCase= () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase= () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCapitalizedCase = () => {
    console.log("Capitalized case was clicked");
    let newText = text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
  };

  const handleSpaces = () => {
    console.log("Lowercase was clicked");
    let newText = text
      .replace(/\s+/g, ' ')
      .trim(); 
    setText(newText);
  };

  const handleClipboard = () => {
    console.log("Copy to clipboard was clicked");
  
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      props.showAlert("Clipboard API not supported");
      return;
    }
  
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        props.showAlert("Copied to clipboard successfully.");
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
        props.showAlert("Failed to copy text");
      });
  };
  

  const handleClear= () => {
    console.log("Clear was clicked");
    setText("");
  };
  const handleonChange= (event) => {
    setText(event.target.value);
    setCount(text.split(" ").length);
  };

  return (
    <>
    <div className="container">
      <h1 className="Heading font">{props.Mainheading}</h1>
      <div className="mb-3">
        <textarea className="form-control my-3 textbg" value = {text} onChange={handleonChange} id="box" rows="8" placeholder="Enter Text Here"></textarea>
      </div>
      <button className="btn btn-primary mx-2 btncolour" onClick={handleupperCase}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2 btncolour" onClick={handleLowerCase}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2 btncolour" onClick={handleCapitalizedCase}>
        Capitalized Case
      </button>
      <button className="btn btn-primary mx-2 btncolour" onClick={handleSpaces}>
        Remove Extra spaces
      </button>
      <button className="btn btn-primary mx-2 btncolour" onClick={handleClear}>
        Clear
      </button>
      <button className="btn btn-primary mx-2 btncolour" onClick={handleClipboard}>
        Copy To ClipBoard
      </button>
      </div>
    <div className="conatiner my-3">
      <h2>Your Text Summary</h2>
      <p> {count} words , {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Required to Read</p>
      <h2>Preview</h2>
      <p >{text.length>0?text:"Enter Something to preview Here."}</p>
    </div>

    </>
  );
}

