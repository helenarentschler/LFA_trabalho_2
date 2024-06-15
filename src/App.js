import './App.css';
import Form from './components/Form';
import Automaton from './components/Automaton';
import Sobre from './components/Sobre';
import FormalDef from './components/FormalDef';
import { useState } from 'react';
import Grammar from './models/Grammar';

function App() {

  const [ grammar, setGrammar ] = useState(null);

  return (
    <div className="App">
      <div className="header">
        <h1>Conversor de Gramática Regular para Autômato - GLUD para AFND-&#949;</h1>
      </div>
      <div className="Container">
        <Form setGrammar={setGrammar}/>
        <FormalDef/>
        <Sobre/> 
      </div>
      <hr></hr>
      <Automaton grammar={grammar}/>
    </div>
  );
}

export default App;
