/* eslint-disable jsx-a11y/anchor-is-valid */
import { PropsWithChildren } from 'react';

export default function Card({
  slug,
  title,
  children,
}: { title: string; slug: string } & PropsWithChildren) {
  return (
    <div className='w-4/5 max-w-[500px] flex flex-col mt-10 bg-white p-5 text-black font-light z-10 shadow-lg'>
      <a id={slug} className='mb-2 font-semibold text-lg tracking-wider'>
        {title}
      </a>
      {children}
    </div>
  );
}
