import React from 'react';
import '../../css/TitleBar/Title.css';

const Title = (props) => {
    return (
      <ul className="parent">
        <li> 
          {props.children}
        </li>
        <li>
          <h6 style= {props.styleName}>
            {props.appName}
          </h6>
        </li>
      </ul>
    );
}


export default Title;