import Button from '../components/button/button';
import { useAxios } from '../service/useAxios'
import { Paciente } from '../types/types';
import Text from '../components/text/text';


const ListaPacientes = ({ }) => {
    const [{ data: listaPacientes }] = useAxios<Paciente[]>({
        url: "/pacientes",
        method: "get",
    });


    return <div className={"h-full p-2 grid grid-cols-12 gap-4 "}>

        <div className={"relative my-10 py-10 border border-slate-200 rounded-2xl shadow-2xl shadow-blue-500/50  box-border  col-start-0 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 xxl:col-start-4 xxl:col-span-6"}>
            <Text className={"text-center mb-10 text-4xl"} type={"h1"} text={"Pacientes"} />
            <div className={"border-b  border-b-blue-400 px-10 grid grid-cols-2 sm:grid-cols-5  gap-0"}>

                <div className={"self-center hidden sm:block"}><Text className={"font-bold"} text={`Nome`} /></div>
                <div className={"self-center hidden sm:block"}><Text className={"font-bold"} text={`Idade`} /></div>
                <div className={"self-center hidden sm:block"}><Text className={"font-bold"} text={`Sexo`} /></div>
                <div className={"self-center hidden sm:block"}><Text className={"font-bold"} text={`Nascimento`} /></div>
                <div className={"self-center hidden sm:block"}></div>
            </div>

            <>{listaPacientes?listaPacientes.map(({ id, Nome, Sobrenome, Idade, Sexo, Data_Nascimento, Data_Avaliação }: Paciente) => {

                return <div className={" border-b  border-b-blue-400  px-10 grid grid-cols-2 sm:grid-cols-5  gap-0 "} key={id}>
                    <div className={"self-center"}><Text className={"sm:hidden font-bold"} text={`Nome:`} /><Text text={`${Nome} ${Sobrenome}`} /></div>
                    <div className={"self-center"}><Text className={"sm:hidden font-bold"} text={`Idade:`} /><Text text={`${Idade}`} /></div>
                    <div className={"self-center"}><Text className={"sm:hidden font-bold"} text={`Sexo:`} />{`${Sexo}`}</div>
                    <div className={"self-center"}><Text className={"sm:hidden font-bold"} text={`Nascimento:`} />{`${Data_Nascimento}`}</div>
                    <Button title={"Exibir"} className={"w-full col-start-0 col-span-2 sm:col-start-5 sm:w-30"} />
                </div>


            }):<Text className={"text-rose-700 text-center my-10 text-3xl"} type={"h2"} text={"Sem pacientes cadastrados"}  />}</>



        </div>
    </div>


}


export default ListaPacientes