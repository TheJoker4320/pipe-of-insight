import React from 'react';
import './App.css';
import Layout from './Layout';
import Main from './pages/Main.page';

function App() {
  const url = 'https://raw.githubusercontent.com/TheJoker4320/vision-framework/develop/examples/example.json'

  return (
    <Layout className="App">
      <Main defaulturl= {url}/>
    </Layout>
  );
}

export default App;
