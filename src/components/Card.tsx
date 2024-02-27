import { PropsWithChildren } from "react";

export default function Card({ title, children }: { title: string } & PropsWithChildren) {
  return (
    <div className='w-4/5 max-w-[500px] flex flex-col mt-10 bg-white p-5 text-black font-light'>
      <p className='mb-2 font-semibold text-lg tracking-wider'>
        {title}
      </p>
      { children }
    </div>
  );
}
