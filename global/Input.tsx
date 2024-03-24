'use client';

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

interface Props{
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'time'
    | 'date'
    | 'datetime-local';
  name?: string,
  label?: string | boolean;
  placeholder?: string;
}

const Input = ({type, name, label, placeholder, ...inputProps}: Props) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);

  return (
    <>
      {label && (
        <label htmlFor={name}>{label}</label>
      )}
        {type === 'password' ? (
          <div className="flex w-full bg-white rounded-md items-center justify-end">
          <input type={passwordIsVisible ? 'text' : 'password'} name="password" className="h-10 rounded-md p-2 outline-none w-full" placeholder="Ex: 123mudar"/>
            {passwordIsVisible ? (<FaRegEye className="mr-4 cursor-pointer rounded-lg text-xl" onClick={() => setPasswordIsVisible(!passwordIsVisible)}/>) : (<FaRegEyeSlash className="mr-4 cursor-pointer text-xl" onClick={() => setPasswordIsVisible(!passwordIsVisible)}/>)}
        </div>
        ) : (
          <input type={type} name={name} className={`h-10 w-full rounded-md p-2 outline-none ${inputProps}`} placeholder={placeholder}/>
        )}

    </>
    );
}

export default Input;
