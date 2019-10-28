import React, { Component } from 'react';

import  '../../static/css/TitleBar/Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    //importentargs
    this.color = typeof this.props.color === undefined ? "#fff": this.props.color;
    this.bg = typeof this.props.bg === undefined ? "#444": this.props.bg;
    this.state = {
      hovering: false,
      focused: false
    };
  }
  toggleHover = () => {
    this.setState({
      hovering: !this.state.hovering
    });
  }

  toggleFocus = () => {
    this.setState({
      focused: !this.state.focused
    });
  }

  render() {
    const {
      ariaLabel,
      tabIndex,
      disabled,
      close,
      onClick
    } = this.props;

    const {
      hovering,
      focused
    } = this.state;
    let backgroundColor = 'transparent';
    let opacity = 0.5;
    let transition = 'background-color 0.1s ease';
    let color = this.context.windowControlsColor;
    if (hovering) {
      opacity = 1;
      color = this.props.close ? "#fff" : color;
      backgroundColor = close ? "rgb(240,71,71)" : this.context.windowDefaultBackground;
    } else if (focused) {
      opacity = 1;
      color = this.props.close ? this.context.windowCloseHover : color;
      backgroundColor = this.props.close ? this.context.windowCloseActive : this.context.windowDefaultActive;
      transition = 'none';
      this.toggleFocus();
    }

    return (
      <button
        className={"Button"}
        style={{backgroundColor, opacity, transition, color }}
        onFocus={this.toggleFocus}
        onBlur={this.toggleFocus}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={onClick}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        close= {this.props.close}
        disabled={disabled}

      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;