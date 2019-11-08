import React from 'react'
import Title from './Title.titlebar';
import Buttons from './Buttons.titlebar';
import '../../css/TitleBar/TitleBar.css';



export default function Titlebar(props) {

    switch(process.platform){

        case 'darwin':{
          //For macOS users
          return (
            <div>
              
            </div>
          )
        }
        case 'linux':{
          break;
        }
        default:{
          //For normal people
          return (
            <div className= "title-bar"
            style={props.style}>
              <Buttons />
              <Title 
                appName = {props.appName} 
                styleName = {props.design.name} 
              >
                <div style= {props.design.logo}>
                 <img src={props.logo} 
                  alt="logo"
                  width='14px'
                  color='#333333'/>
                </div>   
              </Title>
            </div>
          );
        }
      }
}
