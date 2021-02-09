import React, { Profiler } from 'react';
import ReactDom from 'react-dom';
import profile from './images/profile.jpeg'
import '../style/style.css'

function Header(){
    return(
       <div className="header">
           <img src={profile} ></img>
           <p>Bhojraj <br /> Gurjar</p>
       </div> 
    );
}



export default Header;