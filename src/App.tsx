import { useState } from 'react'
import './App.css'

//import React, { useState } from 'react';
import FormView from './views/FormCodigos';
import ZipResultView from './views/ZipResultView';
import { handleFormSubmit, handleClearHistory } from './controllers/FormCodeController';
import { ZipResult } from './models/CodeZipModel';

function App() {
  const [results, setResults] = useState<ZipResult[]>([]);
  const [recentZips, setRecentZips] = useState<string[]>([]);

  return (
    <div className="App" style={{textAlign:'center', backgroundColor:'lightblue'}}>
      <h2 className="centered-div" >Buscador de Ciudades por Codigo Zip</h2>
      <FormView 
        onSubmit={(formData) => handleFormSubmit(formData, setResults, setRecentZips)} 
        onClearHistory={() => handleClearHistory(setRecentZips)} 
      />
      <ZipResultView results={results} recentZips={recentZips} />
    </div>
  );
}

export default App;
