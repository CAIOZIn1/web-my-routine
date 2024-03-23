import { ReactNode } from "react";

interface Props {
  type?: 'submit' | 'reset' | 'button';
  children: string | ReactNode;
}

const Button = ({children, type}: Props) => {
  return (
    <button className="flex w-full items-center justify-center rounded-md border-2 border-dashed border-gray-800 hover:bg-[#00224D] hover:border-solid p-2 text-zinc-900 hover:text-gray-200 font-extrabold text-lg uppercase transition-all ease-out duration-500 group" type={type}>
      {children}
    </button>
   );
}

export default Button;
