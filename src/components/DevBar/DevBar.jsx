import React from 'react';
import '../../css/DevBar/DevBar.css';
import InfoApp from './AppInfo.devbar';

export default function DevBar() {
    var pjson = require('../../../package.json');

    return (
        <div className= "dev-bar">
            <InfoApp
            version= {pjson.version}
            appName= {pjson.name}
            type= "alpha"/>
        </div>
    )
}
