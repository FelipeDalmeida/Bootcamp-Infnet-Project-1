import useAxios from "axios-hooks"
import { useEffect, useState } from "react"
import Button from "../components/button/button"
import CriaForm from "../components/input/criaform"
import Input from "../components/input/input"
import { Paciente } from "../types/types"
import Text from "../components/text/text"
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom"


const PacientePage = ({ }) => {
    const params=useParams()
    const id=params.id;
    const navigate=useNavigate();
    const goToPage=(page:string)=>{navigate(page)}

    const text ={
        labelNome: "Nome",
        labelSobrenome: "Sobrenome",
        labelIdade: "Idade",
        labelSexo: "Sexo",
        labelData_Nascimento: "Data de nasciemnto",
        labelData_Avaliacao: "Data da Avaliação",
    }
    const forminicial:Paciente={
        
            Nome: "Paciente",
            Sobrenome: "",
            Idade: "",
            Sexo: "",
            Data_Nascimento: "",     
            Data_Avaliacao:""
    }

    const [{ data: infoPaciente },getPaciente] = useAxios<Paciente>(
        {
        url: `/pacientes/${id}`,
        method: "get",
    },
    {
      manual: true,
     }
    );
    
    const [form, setForm] = useState(forminicial);
    const [disabled,setDisabled]=useState(true)

   
    useEffect(()=>{
        getPaciente()
        console.log("Atualizado")
    },[])

    useEffect(() => {

        if (infoPaciente) {
          setForm(infoPaciente);
        }
      }, [infoPaciente]);

    const inputs = [
        <Input label={text.labelNome} onChange={(e: any) => setForm({ ...form, Nome: e.target.value })} value={form.Nome} disabled={disabled}/>,
        <Input label={text.labelSobrenome} onChange={(e: any) => setForm({ ...form, Sobrenome: e.target.value })} value={form.Sobrenome} disabled={disabled}/>,
        <Input label={text.labelIdade} onChange={(e: any) => setForm({ ...form, Idade: e.target.value })} value={form.Idade} disabled={disabled}/>,
        <Input label={text.labelSexo} onChange={(e: any) => setForm({ ...form, Sexo: e.target.value })} value={form.Sexo} disabled={disabled}/>,
        <Input label={text.labelData_Nascimento} onChange={(e: any) => setForm({ ...form, Data_Nascimento: e.target.value })} value={form.Data_Nascimento} disabled={disabled}/>,
        <Input label={text.labelData_Avaliacao} onChange={(e: any) => setForm({ ...form, Data_Avaliacao: e.target.value })} value={form.Data_Avaliacao} disabled={disabled}/>,
    ]

    return <div className={"h-[calc(100vh-theme(spacing.20))] md:h-auto p-2 grid grid-cols-12 gap-4 "}>
        <form className={"sm:relative my-10 pb-10 border border-slate-200 rounded-2xl shadow-2xl shadow-blue-500/50  box-border  col-start-0 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 xxl:col-start-4 xxl:col-span-6"}>
            <Text className={"text-center mt-6 text-4xl"} type={"h1"} text={`${form.Nome} ${form.Sobrenome}`} />
            <CriaForm inputs={inputs} className={"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} />
            {/* <div className={"mx-10 "}>
                <Button title={"Cadastar Paciente"} className={"m-0 p-2 w-full md:absolute md:right-12 md:bottom-6 md:w-60"} onClick={sendData} />
            </div> */}
        </form>
    </div>
}

export default PacientePage