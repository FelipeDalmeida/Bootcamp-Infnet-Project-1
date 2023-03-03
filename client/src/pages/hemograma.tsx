import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/button/button";
import CriaForm from "../components/input/criaform";
import Input from "../components/input/input";
import { delay } from "../service/delay";
import type { Hemograma } from "../types/types";
import Text from "../components/text/text";

const ExameHemograma=()=>{
    const params=useParams()
    const id=params.id;
    const navigate=useNavigate();
    const goToPage=(page:string)=>{navigate(page)}

    const forminicial:Hemograma={  
        Hemacias:"",
        Hemoglobina:"",
        Hematocritos: "",
        Leucocitos: "",
        VGM: "",
        HGM: "",
        CHGM: "",
        RDW: "",
        Plaquetas: "",
}

const text ={
    labelHemacias:"Hemacias",
    labelHemoglobina:"Hemoglobina",
    labelHematocritos: "Hematocritos",
    labelLeucocitos:"Leucocitos",
    labelVGM:"VGM",
    labelHGM:"HGM",
    labelCHGM:"CHGM",
    labelPlaquetas: "Plaquetas",
    labelButtonAtualizar:"Atualizar"
}

const [form, setForm] = useState(forminicial);
const [disabled,setDisabled]=useState(true);

    const [{ data: infoHemograma },getHemograma] = useAxios<Hemograma>(
        {
        url: `/hemograma/${id}`,
        method: "get",
    },
    {
      manual: true,
     }
    );

    const [,editHemograma]=useAxios<Hemograma>(
        {
            url: `/hemograma/${id}`,
            method:"patch",
            data:{
                ...form
            }
        },
        {
            manual: true,
        }
    )

    const [,deleteHemograma] = useAxios<Hemograma>(
        {
        url: `/hemograma/${id}`,
        method: "delete",
    },
    {
      manual: true,
     }
    );



    const editarForm=()=>{
        setDisabled(!disabled)
    }

    const atualizaForm=()=>{
        editHemograma()
        setDisabled(true)
    }

    const deletaForm=async ()=>{
        deleteHemograma()
        await delay(0.5)
        goToPage(`/pacientes/${id}`)
    }
   
    useEffect(()=>{
        getHemograma()
        console.log("Atualizado")
    },[])

    useEffect(() => {
        if (infoHemograma) {
          setForm(infoHemograma);
        }
      }, [infoHemograma]);




    const inputs = [
        <Input label={text.labelHemacias} onChange={(e: any) => setForm({ ...form, Hemacias: e.target.value })} value={form.Hemacias} disabled={disabled}/>,
        <Input label={text.labelHemoglobina} onChange={(e: any) => setForm({ ...form, Hemoglobina: e.target.value })} value={form.Hemoglobina} disabled={disabled}/>,
        <Input label={text.labelHematocritos} onChange={(e: any) => setForm({ ...form, Hematocritos: e.target.value })} value={form.Hematocritos} disabled={disabled}/>,
        <Input label={text.labelLeucocitos} onChange={(e: any) => setForm({ ...form, Leucocitos: e.target.value })} value={form.Leucocitos} disabled={disabled}/>,
        <Input label={text.labelHGM} onChange={(e: any) => setForm({ ...form, HGM: e.target.value })} value={form.HGM} disabled={disabled}/>,
        <Input label={text.labelCHGM} onChange={(e: any) => setForm({ ...form, CHGM: e.target.value })} value={form.CHGM} disabled={disabled}/>,
        <Input label={text.labelPlaquetas} onChange={(e: any) => setForm({ ...form, Plaquetas: e.target.value })} value={form.Plaquetas} disabled={disabled}/>,

    ]



    return <div className={"h-[calc(100vh-theme(spacing.20))] md:h-auto p-2 grid grid-cols-12 gap-4 "}>
    <div className={"relative my-10 pb-10 border border-slate-200 rounded-2xl shadow-2xl shadow-blue-500/50  box-border col-start-0 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 xxl:col-start-4 xxl:col-span-6"}>
    <form className={"   "}>
        <Text className={"text-center mt-6 text-4xl"} type={"h1"} text={`Hemograma`} />
        <CriaForm inputs={inputs} className={"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} />
        
        
    </form>
    
    <button className={`absolute  top-2 left-6 ${disabled?"hidden":""}`}>{<FaTrashAlt className={"text-red-700 h-10 w-5"} onClick={deletaForm}/>}</button>
    <button className={`absolute top-3 right-6`}>{<FaPen className={"text-sky-700 h-10 w-5"} onClick={()=>{editarForm()}}/>}</button>
    <div className={`mx-10 ${disabled?"hidden":""}`}>
            <Button title={text.labelButtonAtualizar} className={"m-0 p-2 w-full md:absolute md:right-12 md:bottom-6 md:w-60"} onClick={atualizaForm} />
    </div>
    </div>
</div>
}

export default ExameHemograma