import Axios from 'axios'
import {configure} from 'axios-hooks'
export {default as useAxios} from 'axios-hooks'

const axios=Axios.create({
    url:'http://localhost:8080'
})

axios.get('')

configure({axios});

//Para usar axios-hooks:
// import {useAxios} from './service/useAxios.ts'
// const [{data : tipo}] = useAxios<tipo[]>({
//  url: /diretorio
//  method    
//})