import {lazy, Suspense, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';
import CriaForm from './components/input/criaform';

function App() {

  // const [teste,setTest]=useState("")

  // const funcaoTeste=(e:any)=>{
  //   setTest(e.target.value)
  //   console.log(teste)
  // }


const CadastraPaciente =lazy(()=>import('./pages/cadastraPaciente'))
const ListaPacientes =lazy(()=>import('./pages/listaPacientes'))

  
  return (
  <Router>      
    <Suspense fallback={"<Load/>"}>
    <Routes>
      <Route path="/" element={<CadastraPaciente/>}/>
      <Route path="/cadastro" element={<CadastraPaciente/>}/>
      <Route path="/pacientes" element={<ListaPacientes/>}/>
    
    </Routes>
    </Suspense>
  </Router>

  );
}

export default App;
