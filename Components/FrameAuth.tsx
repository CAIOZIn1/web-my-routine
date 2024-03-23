import { ReactNode } from "react";

const FrameAuth = ({children}: {children: ReactNode}) => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black to-zinc-800">
      <div className="w-11/12 max-w-[500px] h-5/6 bg-slate-200 flex flex-col rounded-xl items-center justify-evenly gap-10 text-zinc-700">
        {children}
      </div>
    </main>
   );
}

export default FrameAuth;
