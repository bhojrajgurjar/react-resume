import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css'

function Last(){
    return (
        <div className='section2nd'>
            <div className='hobbies'>
                <h1>Hobbies</h1>
                <ul>
                    <li><b>Coding</b></li>
                    <li><b>Travelling</b></li>
                    <li><b>Shoping</b></li>
                    <li><b>Scrolling insta feed</b></li>
                </ul>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ul>
                    <li><b>HTML</b></li>
                    <li><b>CSS</b></li>
                    <li><b>JAVASCRIPT</b></li>
                    <li><b>NODE JS</b></li>
                </ul>
            </div>
        </div>
    )
}

export default Last;