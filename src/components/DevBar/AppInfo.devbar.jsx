import React from 'react';
import '../../css/DevBar/AppInfo.css';


const titleCase =  (str) =>{

    str = str.toLowerCase().split('-');
 
    let final = [ ];
 
     for(let  word of str){
       final.push(word.charAt(0).toUpperCase()+ word.slice(1));
     }
 
   return final.join(' ')
 
}

export default function AppInfo(props) {
    return (
        <div>
            <ul>
                <li className= "data" id="move"><h5>{titleCase(props.appName)}</h5></li>
                <li className= "data"><h5 style= {{marginRight: "8px"}}>v{props.version}</h5></li>
                <li className= "data"><h4 style= {{fontSize: "14px"}}>{(props.type).toUpperCase()}</h4></li>
            </ul>
        </div>
    )
}
