import useAxios from "axios-hooks"
import axios from "axios"
import { useState } from "react"
import Button from "../components/button/button"
import CriaForm from "../components/input/criaform"
import Input from "../components/input/input"
import { Paciente } from "../types/types"


const CadastraPaciente = ({})=>{

    // type UseAxiosResult ={
    //     response:any;
    //     loading:any;
    //     error:any;
    // }

    const post=async (url:string,data:any)=>{  //TODO: Utilizar usAxios
        await axios({
            method:"post",
            url:url,
            data
        })
    
    }

    const [form,setForm]=useState({
        labelNome:"Nome",
        Nome:"",
        labelSobrenome:"Sobrenome",
        Sobrenome:"",
        labelIdade:"Idade",
        Idade:"",
        labelSexo:"Sexo",
        Sexo:"",
        labelData_Nascimento:"Data de nasciemnto",
        Data_Nascimento:"",
        labelData_Avaliação:"Data da Avaliação",
        Data_Avaliação:"",
      })

    //   const [{response},sendData] = useAxios<Paciente>({
    //     method: 'post',
    //     url: '/pacientes',
    //     data:{
    //         Nome:form.Nome,
    //         Sobrenome:form.Sobrenome,
    //         Idade:Number(form.Idade),
    //         Sexo:form.Sexo,
    //         Data_Nascimento:form.Data_Nascimento,
    //         Data_Avaliação:new Date(),
    //     },
    // });

    // const send =()=>{
    //     console.log(response)
    //     sendData()
    // }

     const sendData= async ()=>{
       await post('http://localhost:8080/pacientes',{
           Nome:form.Nome,
           Sobrenome:form.Sobrenome,
           Idade:Number(form.Idade),
           Sexo:form.Sexo,
           Data_Nascimento:form.Data_Nascimento,
           Data_Avaliação:new Date(),
       })
    }
    
      const inputs=[
      <Input  label={form.labelNome} onChange={(e:any)=>setForm({...form,Nome:e.target.value})} value={form.Nome} />,
      <Input  label={form.labelSobrenome} onChange={(e:any)=>setForm({...form,Sobrenome:e.target.value})} value={form.Sobrenome} />,
      <Input  label={form.labelIdade} onChange={(e:any)=>setForm({...form,Idade:e.target.value})} value={form.Idade} />,
      <Input  label={form.labelSexo} onChange={(e:any)=>setForm({...form,Sexo:e.target.value})} value={form.Sexo} />,
      <Input  label={form.labelData_Nascimento} onChange={(e:any)=>setForm({...form,Data_Nascimento:e.target.value})} value={form.Data_Nascimento} />,
    //   <Input  label={form.labelData_Avaliação} onChange={(e:any)=>setForm({...form,Data_Avaliação:e.target.value})} value={form.Data_Avaliação} />,
    ]

    return <div className={"p-2 grid grid-cols-12 gap-4 "}>
        <div className={"relative my-10 pb-10 border-slate-100 rounded-2xl shadow-2xl shadow-blue-500/50  box-border  col-start-0 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 xxl:col-start-4 xxl:col-span-6"}>
        <CriaForm inputs={inputs} className={"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}/>
        <div className={"mx-10 "}>
            <Button title={"Cadastar Paciente"} className={"m-0 p-2 w-full sm:absolute sm:right-12 sm:bottom-6 sm:w-60"} onClick={sendData}/>
        </div>
        </div>
        </div>
}

export default CadastraPaciente