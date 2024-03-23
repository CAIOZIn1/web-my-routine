import FrameAuth from "@/Components/FrameAuth";
import Button from "@/global/Button";
import Input from "@/global/Input";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Home() {
  return (
    <FrameAuth>
        <h1 className="uppercase font-extrabold text-4xl text-zinc-800">login</h1>

        <form action="submit" className="flex flex-col w-11/12 gap-6 items-center justify-center">
          <div className="flex flex-col w-11/12 gap-2" >
            <Input type="text" name="email" placeholder="username@gmail.com" label="Digite seu email"/>
          </div>

          <div className="flex flex-col w-11/12 gap-2">
            <Input type="password" placeholder="ex:123mudar" label="Digite sua senha"/>
          </div>

          <div className="w-11/12 h-10">
            <Button type="submit" >Login</Button>
          </div>

          <div className="flex gap-3 items-center justify-center w-11/12">
            <Button>
              <FaGoogle className="text-3xl text-zinc-950 group-hover:text-zinc-50 transition-all duration-200"/>
            </Button>

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
