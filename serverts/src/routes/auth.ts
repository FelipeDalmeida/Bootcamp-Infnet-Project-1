import express from 'express'
import { singInModified, singUpModified, verifyUserConected } from '../authfirebase/auth';

export const auth = express.Router();





//lista todas as Avaliações Antropométricas de um paciente
auth.get('/login',async(req,res)=>{
    const response=await singInModified(req.body.email,req.body.senha)
 
    if (response.code){
        res.status(401).json({code:response.code,success:false})
    } else {
        res.status(200).json({success:true})
    }
    
});

auth.post('/register',async(req,res)=>{
    let err={}
    const response = await singUpModified(req.body.email,req.body.senha)
    console.log(response)
    if(response.code){
        res.status(403).json({code:response.code,success:false})
    }
    else{
        res.status(200).json({success:true})
    }

});

