import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input/input';
function App() {

  const [teste,setTest]=useState("")

  const funcaoTeste=(e:any)=>{
    setTest(e.target.value)
    console.log(teste)
  }

  return (
    <div className='grid grid-cols-12 gap-4'>
    {/* <div className='col-start-1 col-span-12 md:col-start-5 md:col-span-4'> */}
    <Input  label={'Testando'} type={'text'} name={'teste'} id={'teste'} labelClassName={'block text-xxl font-medium text-gray-700'} onChange={(e:any)=>funcaoTeste(e)} value={teste} className={"col-start-1 col-span-12 md:col-start-5 md:col-span-4"}/>
    </div>
    // </div>
  );
}

export default App;
