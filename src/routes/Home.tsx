import AboutMeCard from '../cards/AboutMeCard';
import FeaturedCard from '../cards/FeaturedCard';
import FeaturedImageCard from '../cards/FeaturedImageCard';
import { GalleryCard } from '../cards/GalleryCard';
import UpcomingShowCard from '../cards/UpcomingShowCard';
import Header from '../components/Header';
import { email } from '../constants/links';

export default function Home() {
  return (
    <>
      <div className='overscroll-none flex flex-col items-center z-20 scroll-py-96'>
        <Header />
        <div className='h-[120px]' />
        <div className='lg:w-4/5 grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-center'>
            <FeaturedImageCard />
            <AboutMeCard />
          </div>
          <div className='flex flex-col items-center'>
            <FeaturedCard />
            <GalleryCard />
          </div>
        </div>
        <div className='w-full flex flex-col items-center'>
          <UpcomingShowCard />
        </div>
        <div className='my-10 flex flex-col items-center'>
          <p className='text-white font-thin'>To book a private party, benefit, or gig it is best to reach me by my email,{' '}
            <a className='underline' href={`mailto:${email}`}>
              {email}
            </a>
          </p>
          <p className='text-white font-thin'>Photography by Bos Lisy</p>
        </div>
      </div>
      <div className='fixed top-0 left-0 h-screen w-screen bg-black z-0 opacity-10' />
    </>
  );
}
