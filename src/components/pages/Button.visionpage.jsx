import React, { Component } from 'react';


class Button extends Component {
    
    constructor(props) {
      super(props);
      //importentargs
      this.color = typeof this.props.color === undefined ? "#fff": this.props.color;
      this.bg = typeof this.props.bg === undefined ? "#444": this.props.bg;
      this.state = {
        hovering: false,
        pressed: false
      };
    }
    toggleHover = () => {
      this.setState({
        hovering: !this.state.hovering
      });
    }
  
    togglePressed = () => {

        const pressed = this.state.pressed;
        if(!pressed){
            console.log(this.fill);
        }

        this.setState({
          pressed: !pressed
      });
    }
  
    render() {
      const {
        ariaLabel,
        tabIndex,
        disabled,
        onClick
      } = this.props;
      
      const {
        hovering,
      } = this.state;
      this.fill = 'rgb(165, 165, 165)';
      let backgroundColor = 'transparent';
      let transition = 'fill 0.05s ease';
      if (hovering) {
        this.fill= 'rgb(255, 255, 255)';
      } else if (this.props.name === this.props.current) {
        this.fill= 'rgb(255, 255, 255)';
        transition = 'none';
      }
      let fill = this.fill;
      return (
        <button
          className={this.props.className}
          style={{backgroundColor, transition, fill}}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          onClick={() => {
            if(this.props.current !== this.props.name)
              this.props.setCurrent(this.props.name);
            else
              this.props.setCurrent('');
            if(onClick !== undefined){
              onClick()
            }
          }}
          aria-label={ariaLabel}
          tabIndex={tabIndex}
          close= {this.props.close}
          disabled={disabled} 
          title={this.props.title}
        >
          {this.props.children}
        </button>
      );
    }
  }
  export default Button;