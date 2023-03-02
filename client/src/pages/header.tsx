import Nav from "../components/nav/nav"
import {Link } from 'react-router-dom';



const Header=()=>{

    const anchor=[<Link to='/cadastro'>{"Cadastar Paciente"}</Link>,<Link to='/pacientes'>{"Pacientes"}</Link>]
    const anchor2=[<Link to='/login'>{"Login"}</Link>,<Link to='/registro'>{"Registro"}</Link>]

    return <Nav anchor={anchor} anchor2={anchor2}/>
}

export default Header