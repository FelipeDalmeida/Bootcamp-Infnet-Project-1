import Button from "./button/button";
import Input from "./input/input";
import PropTypes from 'prop-types'

type MessageProps = {
    label: string;
    type?:string;
    name?:string;
    id?:string;
    placeholder?:string;
    labelClassName?:string;
    onChange?: (e:any) => void;
    value?:any;
    className?:string;
    error?:string
  }



const CriaForm =({inputs,className}:any)=>{  //spamar input

  className=`m-10 grid grid-cols-4 gap-4 ${className}`
    // return <div className="m-10 grid grid-cols-4 gap-4">
    //   {inputs.map((input:MessageProps)=>{
    //         return <Input label={input.label}
    //         type={input.type}
    //         name={input.name}
    //         id={input.id} 
    //         placeholder={input.placeholder} 
    //         onChange={input.onChange} 
    //         value={input.value} 
    //         className={input.className} 
    //         error={input.error}/>;

       
    // })}
    // </div>
    return <div className={className}>
    {inputs.map((input:any)=>{
          return input;

     
  })}
  </div>

}

export default CriaForm