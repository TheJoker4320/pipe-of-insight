import React from 'react';
import '../css/Pages/StartPage/StartPage.css';
import SideBar from '../Systems/SideBar';


function VisionPage(props){

    return(
        <div>
            <div className="back-img"></div>
            <div className="back-img-white"></div>

            <SideBar /> 
        </div>       
        
    );

}


export default VisionPage;