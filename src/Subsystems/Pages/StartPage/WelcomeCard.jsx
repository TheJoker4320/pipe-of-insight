import React, {Component } from 'react';
import '../../../static/css/Pages/StartPage/WelcomeCard.css';


class WelcomeCard extends Component {

    render(){
        return(
            <div className="welcome-card">
                <h1 className= "title">Welcome!</h1>
                <p className= "content">This is the offcial app for the FRC team 4320 The Joker
                    for their vision framework, enjoy using it.
                </p>
                <p className= "writter"><b>- The Joker 4320</b></p>
                <ul className= "create-pipes">
                    <li><button style={{
                        backgroundImage: "linear-gradient(to right, #0a0a0a, #330a0a)",
                        color: "#dfdfdf"
                    }}>New Pipeline</button></li>
                    <li><button style={{
                        backgroundImage: "linear-gradient(to left, #0a0a0a, #dfdfdf)",
                        color: "#0a0808"
                    }}>Use Pipeline</button></li>
                </ul>  
            </div>
        )
    }
}

export default WelcomeCard;
