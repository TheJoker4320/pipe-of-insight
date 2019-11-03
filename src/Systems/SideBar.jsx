import React, {Component, useState} from 'react';
import Button from '../Components/SideBar/Button.sidebar';
import '../css/Pages/VisionPage/SideBar.css';

class SideBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            settings: ''
        };
    }

    render() {
        return(
            <div>
                {this.props.btns.map((obj, i) => {
                        return(<Button 
                        className="menu-btn"
                        settings={obj}
                        />);})}
            </div>
        );
    }
}

export default SideBar;