import React, {useState} from 'react'



export default function TextFrom(props) {

    const handelUpClick = () =>{
//console.log("uppper case" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convert to UperCase" , "success");
    }
    const handelLoClick = () =>{
        //console.log("loweer case" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert to LowerCase" , "success");
    }
    const handelClClick = () =>{
                //console.log("loweer case" + text);
        let newText = ' ';
        setText(newText)
        props.showAlert("convert to Clear" , "success");
    }  
    const handleCopy = () => {
       console.log("i am copy ");
       let text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("convert to Copy" , "success");
    }      
    const handelOnChange = (event) =>{
      //  console.log("On change");
        setText(event.target.value);
    }
    const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("convert to ExtraSpaces" , "success");
    }
    const [text,setText] = useState('');
    //text = "new text "  //wrong way to set text
    //setText("new text")  // correct way to set text
  return (
    < >
    <div className="container" style={{color : props.mode==='dark' ?'white':'#042743'}} >
        <h1>{props.heading} </h1>
       <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor : props.mode==='dark' ?'grey':'white',color:props.mode==='dark' ?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handelUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handelLoClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handelClClick}>clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove ExtraSpaces</button>

    </div>
    <div className="container my-3" style={{color : props.mode==='dark' ?'white':'#042743'}} > 
            <h2>your text summery </h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ?text:"Enter something in the text box above to  preview it here "}</p>
    </div>
    </>
  )

}