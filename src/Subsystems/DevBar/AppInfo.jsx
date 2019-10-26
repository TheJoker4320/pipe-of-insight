import React, {Component} from 'react';
import '../../static/css/DevBar/AppInfo.css';

class AppInfo extends Component {

    titleCase =  (str) =>{

        str = str.toLowerCase().split('-');
     
        let final = [ ];
     
         for(let  word of str){
           final.push(word.charAt(0).toUpperCase()+ word.slice(1));
         }
     
       return final.join(' ')
     
    }
    render(){
        return(

        <div>
            <ul>
                <li className= "data"><h5>{this.titleCase(this.props.appName)}</h5></li>
                <li className= "data"><h5 style= {{marginRight: "8px"}}>v{this.props.version}</h5></li>
                <li className= "data"><h4 style= {{fontSize: "14px"}}>{(this.props.type).toUpperCase()}</h4></li>
            </ul>
        </div>
    )};

};


export default AppInfo;