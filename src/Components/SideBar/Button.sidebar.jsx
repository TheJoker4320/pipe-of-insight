import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHover: false,
            isFocused: false
        }
    }

    modifyIsHover(){
        const {isHover}= this.state;
        this.setState({isHover: !isHover});
    }

    onClick(func) {
        this.modifyIsHover();
        func();
    }

    render() {
        const {isHover, isFocused}= this.state;
        var color = "#adadad";
        if(isHover){
            this.setState({isHover: !isHover});
            color = "#fff";

        }else{
            this.setState({isHover: !isHover});
            color = "#adadad";
        }

        

        return (
            <div classNam="side-bar-btn">
                <button
                style = {{
                    color: color,

                }}
                onMouseEnter = {this.modifyIsHover}
                onMouseLeave = {this.modifyIsHover}>
                    {this.props.children}
                </button>
            </div>
        )
    }
}
