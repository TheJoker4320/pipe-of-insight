import React, { Component } from 'react';
import '../../static/css/TitleBar/Title.css';

class Title extends Component {

  render() {

    return (
      <ul className="parent">
        <li
        > 
          {this.props.children}
        </li>
        <li>
          <h6 
          style= {this.props.styleName}
          >
            {this.props.appName}
          </h6>
        </li>
      </ul>
    );
  }
}

export default Title;