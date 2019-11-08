import React from 'react';
import '../css/Pages/StartPage/StartPage.css';
import Card from '../components/pages/Card.startpage';

// only for dev
import card from '../static/assets/JokerCard.png';
// When prod
/*const {remote} = window.require('electron');


var basepath = remote.app.getAppPath();
const card = `${basepath}\\static\\assets\\JokerCard.png`;*/

export default function Start({nextStep, setFile}) {
    return (
        <div className="start-page">
            <Card 
            nextStep = {nextStep}
            setFile = {setFile}
            />
            <img 
            className= "crad-img" 
            src={card} alt="card"
            />                
        </div>
    )
}
