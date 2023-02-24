import {useAxios} from '../service/useAxios'
import { Paciente } from '../types/types';

const ListaPacientes =({})=>{
    const [{ data: listaPacientes }] = useAxios<Paciente[]>({
        url: "/pacientes",
        method: "get",
      });

    return <>
    {listaPacientes?
        <ul>
        {listaPacientes.map(({id,Nome,Sobrenome,Idade,Sexo,Data_Nascimento,Data_Avaliação}:Paciente)=>{
            return <li  key={id}>{`Nome: ${Nome} ${Sobrenome}`}</li>
        })}
        {/* {listaPacientes?.map((paciente:Paciente)=>{
            <li key={paciente.id}>{`${paciente.Nome} ${paciente.Sobrenome}`}</li>
        })} */}
    </ul>:
    "Sem Pacientes"}
    </>
}


export default ListaPacientes