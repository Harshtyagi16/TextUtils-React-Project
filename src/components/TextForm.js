import React , {useState}from 'react'


export default function TextForm(props) {

    const handleUpClick =()=>{
        
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        
        let newText =text.toLowerCase();
        setText(newText);
    }
    const handleRemoveClick =()=>{
       
        let newText ="";
        setText(newText);
    }
    const handleReverseClick =()=>{
       
        let newText =text.split('').reverse().join('')
        setText(newText);
    }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const[text, setText] = useState("");
    
  return (
    <>
    <h2>{props.heading}</h2>  
    <div className="mb-3">
 
  <textarea className="form-control" value ={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'grey':'light'}} id="my-box" rows="8"></textarea>
    </div>
    <button className='btn btn-secondary mx-1 my-1' onClick ={handleUpClick}>Convert Uppercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick ={handleLoClick}>Convert Lowercase</button>
    <button className='btn btn-secondary mx-1 my-1' onClick ={handleRemoveClick}>Clear Text</button>
    <button className='btn btn-primary mx-1 my-1' onClick ={handleReverseClick}>Reverse </button>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
    </div>
    <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


