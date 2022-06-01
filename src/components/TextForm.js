import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        //console.log("Uppercase was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Changed to Upper case","success");
    }
    const handleLoClick= ()=>{
       
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Changed to Lower case","success");
    }
    const handleClearClick= ()=>{
        
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleReverseClick= ()=>{
       
        let splitString = text.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        let newText=joinArray;
        setText(newText)
        props.showAlert("Text reversed","success");
    }
    const handleCopy= ()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard","success");
    }
    const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleSpeak= ()=>{
         msg.text = text;
    window.speechSynthesis.speak(msg);
    }

    const handleOnChange= (event)=>{
       
        setText(event.target.value)
    }
    const msg = new SpeechSynthesisUtterance()
    const [text, setText] = useState('');
    

    
    
  return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#72000087':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReverseClick}>Reverse The Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy The Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpeak}>Speak</button>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Words and {text.length} Character</p>
        <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview!'}</p>
    </div>
    </>
  )
}
