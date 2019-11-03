import React, {Component} from 'react';
import '../css/Pages/StartPage/StartPage.css';
import WelcomeCard from '../Subsystems/Pages/StartPage/WelcomeCard';

const {remote} = window.require('electron');
const path = require('path');

var basepath = remote.app.getAppPath();
const card = `${basepath}\\static\\assets\\JokerCard.png`;

class StartPage extends Component {
     
    render(){
        return(
            <div>
                <div className="back-img"></div>
                <div className="back-img-white"></div>
                <div className="start-page">
                    <WelcomeCard
                    nextStep= {this.props.nextStep}/>
                    <img className= "crad-img" src={card} alt=""/>                         
                </div>
            </div>            
        );
    }
}


export default StartPage;