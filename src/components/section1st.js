import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css'

function Section(){
    return(
        <div className="section">
            <div className="section-div1st">

                <h1>About me</h1>
                <p>I am a ambitious and hardworking individual, with broad skills.I am able to handle multiple tasks on a daily basis. I am always energetic and eager to learn new skills.</p>
            </div>
            <div className="section-div2nd">

                <h1>Education</h1>
                <ul>
                    <li><b>2019-2021 - pursuing BCA</b><br />Chameli devi institute of professional studies,Indore</li>
                    <li><b>2018-2019 - 12th</b><br/>Shri rewa gurjar school ,Sanavad</li>
                    <li><b>2016-2017 - 10th</b><br />Patra Gurukul international school,Barwaha</li>
                </ul>
            </div>
        </div>
    )
}

export default Section;