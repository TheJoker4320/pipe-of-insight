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
                <p className= "writter">- The Joker 4320</p>
            </div>
        )
    }
}

export default WelcomeCard;
