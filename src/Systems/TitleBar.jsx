import React, { Component } from 'react';
import '../static/css/TitleBar/TitleBar.css';
import Buttons from '../Subsystems/TitleBar/Buttons';
import Title from '../Components/TitleBar/Title.jsx';

class TitleBar extends Component {

  render() {
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
          <div className= {"title-bar"}
          style={this.props.style}>
            <Buttons />
            <Title 
              appName = {this.props.appName} 
              styleName = {this.props.design.name} 
            >
              <div style= {this.props.design.logo}>
               <img src={this.props.logo} 
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
}

export default TitleBar;
