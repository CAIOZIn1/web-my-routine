'use client';

import { useState } from "react";
import FrameAuth from "@/components/FrameAuth";
import Button from "@/global/Button";
import Input from "@/global/Input";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Header from "@/global/Header";


export default function Home() {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);

  return (
    <FrameAuth>
        <h1 className="uppercase font-extrabold text-3xl text-zinc-800">Login</h1>

        <form action="submit" className="flex flex-col w-11/12 gap-6 items-center justify-center">
          <div className="flex flex-col w-11/12 gap-2">
            <Input type="text" name="email" placeholder="username@gmail.com" label="Digite seu email:"/>
          </div>

          <div className="flex flex-col w-11/12 gap-2" >
            <label htmlFor="password">Digite sua senha:</label>
            <div className="flex w-full bg-white rounded-md items-center justify-end">
              <input type={passwordIsVisible ? 'text' : 'password'} name="password" className="h-10 rounded-md p-2 outline-none w-full" placeholder="Ex: 123mudar"/>
                {passwordIsVisible ? (<FaRegEye className="mr-4 cursor-pointer rounded-lg text-xl" onClick={() => setPasswordIsVisible(!passwordIsVisible)}/>) : (<FaRegEyeSlash className="mr-4 cursor-pointer text-xl" onClick={() => setPasswordIsVisible(!passwordIsVisible)}/>)}
            </div>
          </div>

          <div className="w-11/12 h-10">
            <Button type="submit">Login</Button>
          </div>

          <div className="flex gap-3 items-center justify-center w-11/12">
            <button className="flex w-full items-center justify-center rounded-md border-2 border-dashed border-gray-800 hover:bg-[#00224D] hover:border-solid p-2 text-zinc-900 hover:text-gray-200 font-extrabold text-lg uppercase transition-all ease-out duration-500 group" type='submit'>
              <FaGoogle className="text-3xl text-zinc-950 group-hover:text-zinc-50 transition-all duration-200"/>
            </button>

            <Button>
              <FaGithub className="text-3xl text-zinc-950 group-hover:text-zinc-50 transition-all duration-200"/>
            </Button>
          </div>

          <Link href={'/createUser'} className="flex underline uppercase text-sm w-11/12 items-center justify-center font-semibold">
            Não tenho login ainda
          </Link>
        </form>
      </FrameAuth>
  );
}
