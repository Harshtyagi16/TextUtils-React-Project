import React, { useState } from 'react'

const About = () => {
    const [myStyle, setMyStyle] = useState({
        color:'white',
        backgroundColor :'black'
    })
    const [btntext, setBtnText] = useState("Enable Light Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color:'black',
                backgroundColor :'white'
            })
            setBtnText("Enable Dark mode");
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor :'black'
            })
            setBtnText("Enable Light mode");
            
        }
    }
  return (
    <>
    <div classNameName='container' style ={myStyle}>
    <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style ={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze the text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={myStyle}>
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count,character count and all.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style ={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={myStyle}>
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given a text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style ={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compitable 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={myStyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>

    </div>
    <div className='container'>
<button type="button "  onClick ={toggleStyle} class="btn btn-dark my-2">{btntext}</button>
</div>
</>
  )
}

export default About
