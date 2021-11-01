import Button from '@restart/ui/esm/Button'
import React, {useState} from 'react'



export default function TextForm(props) {

    const [text, setText]= useState('');
     
    const handleUpperCaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Upper Case!", "success")

    }

    const handleLowerCaseClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lower Case!", "success")
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert(" Text Area Cleared!", "success")
    }

    const handleCopy = () =>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied To Clipboard !", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Removed Extra Spaces !", "success")
    }


    const handleOnChange = (event)=>{
        console.log("on change running")
        setText(event.target.value)
    }

    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h3>{props.heading}</h3> 
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <Button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert To UpperCase</Button>
            <Button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert To LowerCase</Button>
            <Button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Box</Button>
            <Button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</Button>
            <Button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</Button>



        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary :</h3>
            <p>
                {text.split(" ").length} words and {text.length} Characters
            </p>
            <p>
                Can read in {0.008 * text.split(" ").length} Minutes.
            </p>
            <h3>Preveiw</h3>
            <p>
                {text.length>0?text:"Enter something in the textbox above to Preview it here"}
            </p>
            
        </div>
        </>
    )
}
