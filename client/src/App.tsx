import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';
import CriaForm from './components/criaform';
function App() {

  const [teste,setTest]=useState("")

  const funcaoTeste=(e:any)=>{
    setTest(e.target.value)
    console.log(teste)
  }

  const modificaValue=(e:any,Label:any,set:any)=>{
    set({...Label,value:e.target.value})
  }

  const [Label1,setLabel1]=useState({label:"Opção 1",value:""})
  const [Label2,setLabel2]=useState({label:"Opção 2",value:""})
  const [Label3,setLabel3]=useState({label:"Opção 3",value:""})
  const [Label4,setLabel4]=useState({label:"Opção 4",value:""})
  const [Label5,setLabel5]=useState({label:"Opção 5",value:""})
  const [Label6,setLabel6]=useState({label:"Opção 6",value:""})
  const [Label7,setLabel7]=useState({label:"Opção 7",value:""})
  const [Label8,setLabel8]=useState({label:"Opção 8",value:""})
  const [Label9,setLabel9]=useState({label:"Opção 9",value:""})

  const inputs=[
  <Input  label={Label1.label} onChange={(e:any)=>modificaValue(e,Label1,setLabel1)} value={Label1.value} />,
  <Input  label={Label2.label} onChange={(e:any)=>modificaValue(e,Label2,setLabel2)} value={Label2.value} />,
  <Input  label={Label3.label} onChange={(e:any)=>modificaValue(e,Label3,setLabel3)} value={Label3.value} />,
  <Input  label={Label4.label} onChange={(e:any)=>modificaValue(e,Label4,setLabel4)} value={Label4.value} />,
  <Input  label={Label5.label} onChange={(e:any)=>modificaValue(e,Label5,setLabel5)} value={Label5.value} />,
  <Input  label={Label6.label} onChange={(e:any)=>modificaValue(e,Label6,setLabel6)} value={Label6.value} />,
  <Input  label={Label7.label} onChange={(e:any)=>modificaValue(e,Label7,setLabel7)} value={Label7.value} />,
  <Input  label={Label8.label} onChange={(e:any)=>modificaValue(e,Label8,setLabel8)} value={Label8.value} />,
  <Input  label={Label9.label} onChange={(e:any)=>modificaValue(e,Label9,setLabel9)} value={Label9.value} />,
]

  
  return (<>    <div className='grid grid-cols-12 gap-4'>

    <Input  label={'Testando'} type={'text'} name={'teste'} id={'teste'} labelClassName={'block text-xxl font-medium text-gray-700'} onChange={(e:any)=>funcaoTeste(e)} value={teste} className={"col-start-1 col-span-12 md:col-start-5 md:col-span-4"}/>
    
    </div>
    <Button title={"Teste"}/>
    <CriaForm inputs={inputs} className={"grid-cols-3"}/>
    </>

  );
}

export default App;
