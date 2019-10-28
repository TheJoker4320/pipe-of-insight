import React, {Component} from 'react';
import '../static/css/Pages/StartPage/StartPage.css';
import card from '../static/assets/JokerCard.png';



class VisionPage extends Component {
     
    render(){
        return(
            <div>
                <div className="back-img"></div>
                <div className="back-img-white"></div>
                <div className="start-page">
                    <img className= "crad-img" src={card} alt=""/>                         
                </div>
            </div>            
        );
    }
}


export default VisionPage;