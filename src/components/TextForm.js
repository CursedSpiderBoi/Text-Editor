import React, { useState } from 'react';

export default function TextForm(props) {
    let check = true;
    const handleUpperClick = (props) => {
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase());
    }
    const countWords = (str) => {
        if (str.length === 0) {
            return 0;
        }
        else {
            return str.trim().split(" ").length;//to fix the bug of double space
        }

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowerClick = (event) => {
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
    const handleSentenceClick = (event) => {
        let newText = text.toLowerCase().split('.').map((sentence) => {
            return sentence.charAt(0) === " " ? sentence.charAt(1).toUpperCase() + sentence.slice(2) : sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }).join('. ');
        setText(newText);
    }
    const handleTitleClick = (event) => {
        let newText = text.toLowerCase().split(' ').map((sentence) => {
            if (sentence === 'and' || sentence === 'is' || sentence === 'as' || sentence === 'but' || sentence === 'for' || sentence === 'if' || sentence === 'nor' || sentence === 'or' || sentence === 'so' || sentence === 'yet' || sentence === 'a' || sentence === 'an' || sentence === 'the' || sentence === 'at' || sentence === 'by' || sentence === 'of' || sentence === 'off' || sentence === 'on' || sentence === 'per' || sentence === 'to' || sentence === 'up' || sentence === 'via') {
                return sentence;
            }
            else {
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            }
        }).join(' ');
        handleSentenceClick();
        setText(newText);
    }
    const handleInverseClick = (event) => {
    let modifiedText = '';
    for (let i = 0; i < text.length; i++) {
        if (check === true) {
            if (i % 2 === 0) {
                modifiedText += text[i].toLowerCase();
            } else {
                modifiedText += text[i].toUpperCase();
            }
        }
        else {
            if (i % 2 !== 0) {
                modifiedText += text[i].toLowerCase();
            } else {
                modifiedText += text[i].toUpperCase();
            }
        }
    }
    check = !check;
    setText(modifiedText);
    };
    const handleICopyClick = (event) => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const [text, setText] = useState('');
    return (<>
        <h2>Text Summary</h2>
        <h3>
            {
                countWords(text) + " words and " + text.length + " characters"
            }
        </h3>
        <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8 "></textarea>
        </div>
        <button className="btn btn-danger mx-3 my-3" onClick={handleClearText}>Remove Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-success mx-3 my-3" onClick={handleICopyClick}>Copy</button>
        {/* <hr/> */}
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpperClick}>UPPER CASE</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLowerClick}>lower case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleSentenceClick}>Sentence case.</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleTitleClick}>Title Case</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleInverseClick}>iNvErSe CaSe</button>
        <div className="container">
            <h2>Preview</h2>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-text">
                        {text}
                    </span>
                </div>
            </nav>
        </div>
    </>)
}
