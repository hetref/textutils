import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  var timeToRead =
    0.008 *
    text.split(" ").filter((element) => {
      return element.length !== 0;
    }).length;

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Up the text!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed from your text!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length===0} className={"mx-1 my-1 btn btn-success"} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}
          className={"mx-1 my-1 btn btn-success"}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}
          className={"mx-1 my-1 btn btn-success"}
          onClick={handleExtraSpaces}
        >
          Remove Extra
        </button>
        <button disabled={text.length===0}
          className={"mx-1 my-1 btn btn-success"}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        {/* <p> {text.split(" ").length} Words and {text.length} Characters</p> */}
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element !== "";
              }).length
          }{" "}
          Words and {text.length} Characters.
        </p>
        <p>
          Average time the text will take to read is - {timeToRead.toFixed(3)}{" "}
          Minutes
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter the text above to preview it here!"}
        </p>
      </div>
    </>
  );
}
