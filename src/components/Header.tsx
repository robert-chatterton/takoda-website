import { useMemo, useState } from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function Header() {
  const { width } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(false);

  const menu = useMemo(() => {
    return (
      <ul className='flex flex-col md:flex-row gap-3 font-light'>
        <li>
          <a href='https://www.youtube.com/@TakodaDionne'>
            <div className='flex flex-row items-center'>
              <div className='mr-2'>
                <FaYoutube color={width > 768 ? '#000' : '#fff'} size={28} />
              </div>
              { width <= 768 && <p>@TakodaDionne</p>}
            </div>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/takodadionne/'>
            <div className='flex flex-row items-center'>
              <div className='mr-2'>
                <FaInstagram color={width > 768 ? '#000' : '#fff'} size={28} />
              </div>
              { width <= 768 && <p>@takodadionne</p>}
            </div>
          </a>
        </li>
      </ul>
    );
  }, [width]);

  return (
    <>
      <div className='sticky top-0 left-0 bg-white text-black w-full h-[120px] flex flex-row items-center pt-10 px-10 z-10 shadow-lg'>
        <p className='text-xl font-semibold tracking-wider'>takoda dionne</p>
        <div className='flex-1' />
        {width < 768 ? (
          <button onClick={() => setOpenMenu(true)}>
            <IoMdMenu size={32} />
          </button>
        ) : menu }
      </div>

      {
        openMenu && (
          <div className='bg-black fixed top-0 left-0 w-screen h-screen z-20 flex flex-row justify-center items-start pt-16 px-10 text-white'>
            <div className='mt-1'>
              <p className='text-xl font-semibold tracking-wider mb-5'>takoda dionne</p>
              { menu }
            </div>
            <div className='flex-1' />
            <button className='hover:bg-slate-800 rounded-full' onClick={() => setOpenMenu(false)}>
              <IoMdClose size={32} />
            </button>
          </div>
        )
      }
    </>
  );
}
