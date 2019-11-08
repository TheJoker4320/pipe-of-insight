import React from 'react';
import TitleBar from './components/TitleBar/Titlebar';
import DevBar from './components/DevBar/DevBar';
import JokerHat from './static/assets/logo/JokerHat.svg';


const Appstyles = {
    logo:{
      width: '13px',
      height: '13px',
      color: '#b31616',
      padding: '3px'
    },
    name: {
      fontSize: '14px',
      padding: '0px',
      paddingLeft: '4px',
      margin: '0px',
      top: '-5px',
      color: '#e83131',//'#38d39f',
      text: 'Pipe Of Insight'
    },
}

export default function Layout(props) {
    return (
        <div className={props.className}>
            <TitleBar style= {{
                    background: '#232323',
                    }}
                    logo= {JokerHat}
                    appName= {Appstyles.name.text}
                    design= {Appstyles}
                    fileName= {props.fileName}
            />
                {/* Page placehoder*/}
                {props.children}
            <DevBar/>
        </div>
        
    )
}
