'use client';

import { useState } from "react";
import FrameAuth from "@/components/FrameAuth";
import Button from "@/global/Button";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { LoginProps } from "@/interface";

const formSchema = z.object({
  email: z.string(),
  password: z.string().min(6, { message: "O campo deve conter um mínimo de 6 caracteres." })
});

type HandleTypeFormData = z.infer<typeof formSchema>;

export default function Home() {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState:{errors}} = useForm<HandleTypeFormData>();

  async function handleLogin(data: LoginProps){
    console.log(data);
  }

  return (
    <FrameAuth>
        <h1 className="uppercase font-extrabold text-3xl text-zinc-800">Login</h1>

        <form onSubmit={handleSubmit(handleLogin)} action="submit" className="flex flex-col w-11/12 gap-6 items-center justify-center">
          <div className="flex flex-col w-11/12 gap-2">
            <label htmlFor="email">Digite seu email:</label>
            <input type="email" className="h-10 w-full rounded-md p-2 outline-none" placeholder="seunome@email.com" required {...register("email")}/>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col w-11/12 gap-2" >
            <label htmlFor="password">Digite sua senha:</label>
            <div className="flex w-full bg-white rounded-md items-center justify-end">
              <input type={passwordIsVisible ? 'text' : 'password'} className="h-10 rounded-md p-2 outline-none w-full" placeholder="Ex: 123mudar" required {...register('password')}/>
              {passwordIsVisible ? (<FaRegEye className="mr-4 cursor-pointer rounded-lg text-xl" onClick={() => setPasswordIsVisible(!passwordIsVisible)}/>) : (<FaRegEyeSlash className="mr-4 cursor-pointer text-xl" onClick={() => setPasswordIsVisible(!passwordIsVisible)}/>)}
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>
          </div>

          <div className="w-11/12 h-10">
            <Button type="submit">Login</Button>
          </div>

          <div className="flex gap-3 items-center justify-center w-11/12">
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="flex w-full items-center justify-center rounded-md border-2 border-dashed border-gray-800 hover:bg-[#00224D] hover:border-solid p-2 text-zinc-900 hover:text-gray-200 font-extrabold text-lg uppercase transition-all ease-out duration-500 group" type='submit'>
              <FaGoogle className="text-3xl text-zinc-950 group-hover:text-zinc-50 transition-all duration-200"/>
            </motion.button>

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
