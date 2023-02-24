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
  {/* <div className='grid grid-cols-12 gap-4'>

    <Input  label={'Testando'} type={'text'} name={'teste'} id={'teste'} labelClassName={'block text-xxl font-medium text-gray-700'} onChange={(e:any)=>funcaoTeste(e)} value={teste} className={"col-start-1 col-span-12 md:col-start-5 md:col-span-4"}/>
    
    </div>
    <Button title={"Teste"}/>
    <CriaForm inputs={inputs} className={"grid-cols-3"}/> */}
    <CadastraPaciente/>
    <ListaPacientes/>
    </>

  );
}

export default App;
