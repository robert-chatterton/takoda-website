import { useMemo, useState } from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { PiLinktreeLogo } from 'react-icons/pi';
import { MdOutlineSchedule } from 'react-icons/md';
import {
  linktree
} from '../constants/links';

export default function Header() {
  const { width } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(false);

  const menu = useMemo(() => {
    return (
      <ul className='flex flex-col md:flex-row gap-3 font-bold text-md items-start tracking-tight md:items-center'>
        <li>
          <a href='#shows' onClick={() => setOpenMenu(false)}>
            <div className='flex flex-row items-center gap-1 hover:underline'>
              <MdOutlineSchedule
                color={width >= 768 ? '#000' : '#fff'}
                size={28}
              />
              <p className='text-nowrap'>Upcoming Shows</p>
            </div>
          </a>
        </li>
        {/* <li>
          <a href={youtube}>
            <div className='flex flex-row items-center gap-2'>
              <FaYoutube color={width >= 768 ? '#000' : '#fff'} size={28} />
              {width < 768 && <p>{youtubeHandle}</p>}
            </div>
          </a>
        </li>
        <li>
          <a href={instagram}>
            <div className='flex flex-row items-center gap-2'>
              <FaInstagram color={width >= 768 ? '#000' : '#fff'} size={28} />
              {width < 768 && <p>{instagramHandle}</p>}
            </div>
          </a>
        </li>
        <li>
          <a href={facebook}>
            <div className='flex flex-row items-center gap-2'>
              <FaFacebook color={width >= 768 ? '#000' : '#fff'} size={28} />
              {width < 768 && <p>{facebookHandle}</p>}
            </div>
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`}>
            <div className='flex flex-row items-center gap-2'>
              <IoMdMail color={width >= 768 ? '#000' : '#fff'} size={28} />
              {width < 768 && <p>{email}</p>}
            </div>
          </a>
        </li> */}
        <li>
          <a href={linktree}>
            <div className='flex flex-row items-center gap-1 hover:underline'>
              <PiLinktreeLogo color={width >= 768 ? '#000' : '#fff'} size={28} />
              <p className='text-nowrap'>My Socials</p>
            </div>
          </a>
        </li>
      </ul>
    );
  }, [width]);

  return (
    <>
      <div className='fixed top-0 left-0 bg-white text-black w-full h-[120px] flex flex-row items-center pt-10 px-10 z-20 shadow-lg'>
        <div className='flex flex-col md:flex-row items-center gap-0 md:gap-4'>
          <p className='text-xl md:text-3xl font-semibold tracking-wide text-nowrap'>
            Takoda Dionne
          </p>
          <p className='text-lg md:text-xl font-light md:tracking-widest  text-nowrap'>
            Live Looping Musician
          </p>
        </div>
        <div className='flex-1' />
        {width < 768 ? (
          <button onClick={() => setOpenMenu(true)}>
            <IoMdMenu size={32} />
          </button>
        ) : (
          menu
        )}
      </div>

      {openMenu && (
        <div className='bg-black fixed top-0 left-0 w-screen h-screen z-20 flex flex-row justify-center items-start pt-16 px-10 text-white'>
          <div className='mt-1'>
            <p className='text-xl font-semibold tracking-wide mb-5 text-nowrap'>
              Takoda Dionne
            </p>
            {menu}
          </div>
          <div className='flex-1' />
          <button
            className='hover:bg-slate-800 rounded-full'
            onClick={() => setOpenMenu(false)}
          >
            <IoMdClose size={32} />
          </button>
        </div>
      )}
    </>
  );
}
