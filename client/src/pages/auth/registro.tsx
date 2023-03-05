import CriaForm from "../../components/input/criaform"
import Input from "../../components/input/input"
import Text from "../../components/text/text"
import Button from "../../components/button/button"
import { useState } from "react"
import Img from "../../components/img/img"
import Logo from '../../assets/img/logo192.png'

const Register=({})=>{
    const text={
        labelEmail:"E-mail",
        labelSenha:"Senha",
        labelEmailCheck:"Repita seu e-mail",
        labelSenhaCheck:"Repita sua senha",
        labelTitle:"Registro",
        labelButton:"Registrar"
    }
    const [email,setEmail]=useState("")
    const [emailCheck,setEmailCheck]=useState("")
    const [senha,setSenha]=useState("")
    const [senhaCheck,setSenhaCheck]=useState("")

    const inputs=[
        <Input label={text.labelEmail} type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}/>,
        <Input label={text.labelEmailCheck} type={"email"} value={emailCheck} onChange={(e)=>setEmailCheck(e.target.value)}/>,
        <Input label={text.labelSenha} type={"password"} value={senha} onChange={(e)=>setSenha(e.target.value)}/>,
        <Input label={text.labelSenhaCheck} type={"password"} value={senhaCheck} onChange={(e)=>setSenhaCheck(e.target.value)}/>
    ]

    return <div className={"h-auto p-2 grid grid-cols-12 gap-4 "}>
    
    <div className={"sm:relative my-10 pb-10 border border-slate-200 rounded-2xl shadow-2xl shadow-blue-500/50  box-border  col-start-0 col-span-12 md:col-start-4 md:col-span-6 lg:col-start-5 lg:col-span-4"}>
    <div className={"h-40 flex justify-center"}><Img img={Logo}/></div>
        <Text className={"text-center mt-6 text-4xl"} type={"h1"} text={text.labelTitle} />
        <CriaForm inputs={inputs} className={"grid-cols-1"} />
        <div className={"mx-10 "}>
            <Button title={text.labelButton} className={"m-0 p-2 w-full "} onClick={()=>{}} />
        </div>
    </div>
</div>
}

export default Register