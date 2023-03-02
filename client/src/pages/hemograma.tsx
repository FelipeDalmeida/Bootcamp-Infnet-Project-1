import { useParams } from "react-router-dom"

const Hemograma=()=>{
    const params=useParams()
    const id=params.id;

    return <>{id}</>
}

export default Hemograma