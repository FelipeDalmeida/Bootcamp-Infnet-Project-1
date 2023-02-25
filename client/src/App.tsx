import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';
import CriaForm from './components/input/criaform';
import CadastraPaciente from './pages/cadastraPaciente';
import ListaPacientes from './pages/listaPacientes';
function App() {

  // const [teste,setTest]=useState("")

  // const funcaoTeste=(e:any)=>{
  //   setTest(e.target.value)
  //   console.log(teste)
  // }





  
  return (<>    

    <CadastraPaciente/>
    <ListaPacientes/>
    </>

  );
}

export default App;
