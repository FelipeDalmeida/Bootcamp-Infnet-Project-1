import {lazy, Suspense, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';
import CriaForm from './components/input/criaform';
import Header from './pages/header';
function App() {

  // const [teste,setTest]=useState("")

  // const funcaoTeste=(e:any)=>{
  //   setTest(e.target.value)
  //   console.log(teste)
  // }


const CadastraPaciente =lazy(()=>import('./pages/cadastraPaciente'))
const ListaPacientes =lazy(()=>import('./pages/listaPacientes'))
const Hemograma =lazy(()=>import('./pages/hemograma'))
const PacientePage=lazy(()=>import('./pages/Paciente'))
  
  return (
  <Router>      
    <Suspense fallback={"<Load/>"}>
    <Header/>
    <Routes>
      <Route path="/" element={<CadastraPaciente/>}/>
      <Route path="/cadastro" element={<CadastraPaciente/>}/>
      <Route path="/pacientes" element={<ListaPacientes/>}/>
      <Route path="/pacientes/:id" element={<PacientePage/>}/>
    
    </Routes>
    </Suspense>
  </Router>

  );
}

export default App;
