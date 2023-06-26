import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpperClick = (props) => {
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
    }
    const countWords = (str) => {
        if(str.length === 0) {
            return 0;
        }
        else{
            return str.trim().split(" ").length;//to fix the bug of double space
        }

    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleLowerClick = (event) => {
        console.log("Lowercase was clicked");
        setText(text.toLowerCase());
    }
    const handleClearText = (event) => {
        setText("");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;      
        window.speechSynthesis.speak(msg);      
      }

    const [text, setText] = useState('');
    return (<>
        <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8 "></textarea>
        </div>
        <button className="btn btn-danger mx-3 my-3" onClick={handleClearText}>Remove Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-primary mx-3" onClick={handleUpperClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert To Lowercase</button>
        <div className="container">
        <h2>Text Summary</h2>
            <p>
            {
                countWords(text) + " words and " + text.length + " characters"
            }
            </p>
        <h2>Preview</h2>
            <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-text">
                {text}
                </span>
            </div>
            </nav>
        </div> 
    </>)
    }