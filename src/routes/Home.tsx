import AboutMeCard from '../cards/AboutMeCard';
import ContactMeCard from '../cards/ContactMeCard';
import FeaturedCard from '../cards/FeaturedCard';
import FeaturedImageCard from '../cards/FeaturedImageCard';
import { GalleryCard } from '../cards/GalleryCard';
import UpcomingShowCard from '../cards/UpcomingShowCard';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <div className='overscroll-none flex flex-col items-center z-20 scroll-py-96'>
        <Header />
        <div className='h-[120px]' />
        <div className='lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 pb-60'>
          <div className='flex flex-col items-center'>
            <FeaturedImageCard />
            <FeaturedCard />
            <AboutMeCard />
            <ContactMeCard />
          </div>
          <div className='flex flex-col items-center'>
            <GalleryCard />
            <UpcomingShowCard />
          </div>
        </div>
      </div>
      <div className='fixed top-0 left-0 h-screen w-screen bg-black z-0 opacity-10' />
    </>
  );
}
