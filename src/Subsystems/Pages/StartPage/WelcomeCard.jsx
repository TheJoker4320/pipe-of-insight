import React, {Component} from 'react';
import '../../../static/css/Pages/StartPage/WelcomeCard.css';


class WelcomeCard extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){

        return(
            <div className="welcome-card">
                <h1 className= "title">Welcome!</h1>
                <p className= "content">This is the offcial app for the FRC team 4320 The Joker
                    for their vision framework, enjoy using it.
                </p>
                <p className= "writter"><b>- The Joker 4320</b></p>
                <ul className= "create-pipes">

                    <li><button className="pipes-btns" id= "new-pipe" onClick= {this.continue}>New Pipeline</button></li>
                    <li><button className="pipes-btns" id= "use-pipe" >Use Pipeline</button></li>
                </ul>  
            </div>
        )
    }
}

export default WelcomeCard;
