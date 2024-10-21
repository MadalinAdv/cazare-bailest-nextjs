import React from 'react'

const Button = () => {
  return (
    <div> 
        <div className="wapp">
            <a aria-label="Chat on WhatsApp" href="https://wa.me/40722465185"><img alt="Chat on WhatsApp" src="assets/images/wicon.png" /> </a>
        </div>  
        <div className="mail">
            <a href="mailto:office@cazarebailesti.ro"><img alt="Mail" src="assets/images/mailu.png" /> </a>
        </div>   
    </div>
  )
}

export default Button