import React, { Component } from 'react';
import '../static/css/DevBar/DevBar.css';
import InfoApp from '../Subsystems/DevBar/AppInfo.jsx';

class DevBar extends Component {

  render() {
    var pjson = require('../../package.json');

    return(
        <div className= "dev-bar">
            <InfoApp
            version= {pjson.version}
            appName= {pjson.name}
            type= "alpha"/>
        </div>
  )};
}


export default DevBar;
