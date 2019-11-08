import React, {useState} from 'react';
import './App.css';
import Layout from './Layout';
import Main from './pages/Main.page';

function App() {
  const url = 'https://raw.githubusercontent.com/TheJoker4320/vision-framework/develop/examples/example.json'

  const [fileName, SetFileName] = useState('Welcome');
  
  return (
    <Layout className="App"
      fileName= {fileName}
    >
      <Main defaulturl= {url}
      setTop = {SetFileName}
      />
    </Layout>
  );
}

export default App;
