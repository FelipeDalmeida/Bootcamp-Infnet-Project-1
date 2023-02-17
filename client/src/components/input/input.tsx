import { useState } from "react";
import PropTypes from 'prop-types'
import { FaEye,FaEyeSlash } from "react-icons/fa";


interface MessageProps {
    label: string;
    type:string;
    name?:string;
    id?:string;
    placeholder?:string;
    labelClassName:string;
    onChange?: (e:any) => void;
    value?:any;
    className?:string;
    error?:string
  }

const Input =({label,type,name,id,placeholder,onChange,value,className,error}:MessageProps)=>{
    
  const [hover,setHover]=useState(false)  
  const [showPassorwd,setShowPassword]=useState(false)
  const changePasswordVisibility=()=>setShowPassword(!showPassorwd);
  const chageHover=()=>{setHover(!hover)}

  className=`${className} mt-10`

  

    return <div className={className} onMouseEnter={chageHover} onMouseLeave={chageHover}>
    
   
    
    <div className="relative" >
    <span className={(hover || value)?'bottom-8 pl-3 absolute':"pl-3 bottom-2.5 absolute"}><label htmlFor="price" className="bg-white" >
    {label}
    </label>
    </span>
      <input
        type={'password'?(showPassorwd?'text':type):type}
        name={name}
        id={id}
        className={`block w-full border rounded-md p-2 focus-visible:outline-none border-slate-400 focus:border-sky-600 focus:border-2 ${error?"border-2 border-rose-600 focus:border-rose-600 focus:border-rose-600":""}`}
        placeholder={placeholder?placeholder:""}
        onChange={onChange}
        value={value}
      />
    <button className="absolute right-3 bottom-3 text-xl" onClick={changePasswordVisibility}>{type==='password'?(showPassorwd?<FaEyeSlash/>:<FaEye/>):null}</button>
    </div>
    <p className="pl-2 text-rose-600">{error?error:""}</p>
  </div>
}

Input.propTypes={
  type: PropTypes.string,
  label:PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onchange: PropTypes.func,
  className:PropTypes.string,
  value:PropTypes.string,
  error:PropTypes.string,
}

Input.defaultProps={
  type:"text",
  label:"",
  id:"",
  name:"",
  onchange:null,
  value:null,
  className:"",
  error:false,
}


export default Input
