import React from 'react';
import TitleBar from './Systems/TitleBar.jsx';
import DevBar from './Systems/DevBar.jsx';

import './App.css';
import page_model from './Models/page.model';

import {StoreProvider, createStore} from 'easy-peasy';
import MainPage from './Pages/MainPage.jsx';

const {remote} = window.require('electron');
const path = require('path');
var basepath = remote.app.getAppPath();

const JokerHat = `${basepath}\\static\\assets\\logo\\JokerHat.svg`;

const store = createStore(page_model);


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
    top: '-5px',
    color: '#e83131',//'#38d39f',
    text: 'Pipe Of Insight'
  },
}

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <TitleBar style= {{
          background: '#232323',
        }}
        logo= {JokerHat}
        appName= {Appstyles.name.text}
        design= {Appstyles}
        />
        <MainPage defaulturl= {store.getState().defaultSettings}/>    
      <DevBar/>
    </div>
    </StoreProvider>
  );
}

export default App;
