import React, {Component} from 'react';
import '../static/css/Pages/StartPage/StartPage.css';
import card from '../static/assets/JokerCard.png';
import WelcomeCard from '../Subsystems/Pages/StartPage/WelcomeCard';



class StartPage extends Component {
     
    render(){
        return(
            <div>
                <div className="back-img"></div>
                <div className="start-page">
                    <WelcomeCard/>
                    <img className= "crad-img" src={card} alt=""/>
                </div>
            </div>            
        );
    }
}


export default StartPage;