import React from 'react';
import TitleBar from './Systems/TitleBar.jsx'
import JokerHat from './static/assets/logo/JokerHat.svg';
import './App.css';


const Appstyles = {
  logo:{
    width: '13px',
    height: '13px',
    color: '#e83131',
    padding: '3px'
  },
  name: {
    fontSize: '14px',
    padding: '0px',
    top: '-5px',
    color: '#e83131',//'#38d39f',
    text: 'Pipe Of Insight'
  },
}

function App() {
  return (
    <div className="App">
      <TitleBar style= {{
          background: '#232323',
        }}
        logo= {JokerHat}
        appName= {Appstyles.name.text}
        design= {Appstyles}
        />
          <h1 style= {{
            color: '#e83131',
            paddingLeft: '230px',
            fontSize: '50px',
            fontWeight: 'bold',
            paddingTop: '250px'
          }}>My Cool App</h1>
        
    </div>
  );
}

export default App;
