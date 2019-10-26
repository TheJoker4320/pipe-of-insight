import React, {Component } from 'react';
import '../../static/css/TitleBar/Buttons.css';
import '../../static/css/TitleBar/Button.css';
import Button from '../../Components/TitleBar/Button.jsx';

const {remote} = window.require("electron");

class Buttons extends Component {

    closeCommand = () => {
        remote.getCurrentWindow().close();
    }
    maxCommand = () => {
        if(remote.getCurrentWindow().isMaximized()){
            remote.getCurrentWindow().unmaximize();
        }else{
            remote.getCurrentWindow().maximize();
        }
    }

    minCommand = () =>{
        remote.getCurrentWindow().minimize();

    }    

    getClose = () => {
        return{
            opacity: '0.9',
            bacgoroundColor: '#d80000',
            color: '#ddd'
                    
        }
    }

    render(){
        return(
            
            <div className= {"container"}>
                <ul>
                    <li style= {{display: "block", float:"right", height: '100%'}}>
                        <Button onClick={this.closeCommand}
                        close={true}>
                            <svg name="TitleBarClose" aria-hidden="false" width="12" height="12" viewBox="0 0 12 12" fill= "currentColor">
                                <polygon fill="currentColor" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon>
                            </svg>
                        </Button>
                    </li>

                    <li style= {{display: "block", float:"right", height: '100%'}}>
                        <Button
                        onClick={this.maxCommand}>                
                            <svg name="TitleBarMaximize" aria-hidden="false" width="12" height="12" viewBox="0 0 12 12" fill= "currentColor">
                                <rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="currentColor"></rect>
                            </svg>
                        </Button>
                    </li>

                    <li style= {{display: "block", float:"right", height: '100%'}}>
                        <Button
                        onClick={this.minCommand}>
                            <svg name="TitleBarMinimize" aria-hidden="false" width="12" height="12" viewBox="0 0 12 12" fill= "currentColor">
                                <rect fill="currentColor" width="10" height="1" x="1" y="6"></rect>
                            </svg>
                        </Button>
                    </li>                   
                </ul>
                
            </div>
        )
    }
}

export default Buttons;
