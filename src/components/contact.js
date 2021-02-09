import React from 'react';
import ReactDom from 'react-dom';
import '../style/style.css'


function Contact(){
    return(
        <div className='contact'>
            <div className='contact-block'>
                <p>CONTACT</p>
            </div>
            <div className='address-block'>
                <i class="fas fa-map-marker-alt"></i>
                <p>Barwah (M.P.)</p>
            </div>
            <div className='phone-block'>
                <i class="fas fa-phone-alt"></i>
                <p>9926743294</p>
            </div>
            <div className='mail-block'>
                <i class="fas fa-envelope"></i>
                <p>bgurjar2000@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact;