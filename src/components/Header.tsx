import { useMemo, useState } from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

export default function Header() {
  const { width } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(false);

  const menu = useMemo(() => {
    return (
      <ul className={`flex flex-col md:flex-row gap-1 font-light`}>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>five</li>
      </ul>
    );
  }, []);

  return (
    <>
      <div className='sticky top-0 left-0 bg-black opacity-70 text-white w-full h-[120px] flex flex-row items-center pt-10 px-10'>
        <p className='font-semibold tracking-wider'>takoda dionne</p>
        <div className='flex-1' />
        {width < 768 ? (
          <button onClick={() => setOpenMenu(true)}>
            <IoMdMenu size={32} />
          </button>
        ) : menu }
      </div>

      {
        openMenu && (
          <div className='bg-white fixed top-0 left-0 w-screen h-screen z-10 flex flex-row justify-around items-start pt-10'>
            { menu }
            <button className='hover:bg-slate-100 rounded-full' onClick={() => setOpenMenu(false)}>
              <IoMdClose size={32} />
            </button>
          </div>
        )
      }
    </>
  );
}
