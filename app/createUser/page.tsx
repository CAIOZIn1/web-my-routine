'use client';

import {motion} from 'framer-motion';
import FrameAuth from "@/components/FrameAuth";
import Button from "@/global/Button";
import Input from "@/global/Input";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const CreateUser = () => {
    return (
      <FrameAuth>
        <div className="flex w-11/12 items-center justify-between">
            <Link href={'/'} className="border-2 border-dashed border-gray-800 p-2 rounded-full hover:bg-[#00224D] hover:border-solid hover:text-gray-200 transition-all ease-out duration-500 hover:scale-125 cursor-pointer">
              <motion.div
                whileHover={{
                  rotate: [0, 360],
                }}
              >
                <IoArrowBack className='text-1xl font-extrabold'/>
              </motion.div>
            </Link>
            <h1 className="uppercase font-extrabold text-xl text-zinc-800">Criar Usuário</h1>
          <div />
        </div>

        <form action="submit" className="flex flex-col w-11/12 gap-6 items-center justify-center">
          <div className="flex flex-col w-11/12 gap-2" >
            <Input label="Nome do usuário:" type="text" placeholder="Digite o nome do usuário" name="name"/>
          </div>

          <div className="flex flex-col w-11/12 gap-2" >
            <Input label="Email do usuário:" type="email" placeholder="Digite o email do usuário" name="email"/>
          </div>

          <div className="flex flex-col w-11/12 gap-2" >
            <Input label="Senha do usuário:" type="password" name="password"/>
          </div>

          <div className="flex flex-col w-11/12 gap-2" >
            <Input label="Confirme sua senha:" type="password" name="password"/>
          </div>

          <div className="w-11/12 h-10 m-7">
            <Button type="submit">Criar novo usuário</Button>
          </div>
        </form>
      </FrameAuth>
    );
}

export default CreateUser;
