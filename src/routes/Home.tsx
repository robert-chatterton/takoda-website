import AboutMeCard from '../cards/AboutMeCard';
import ContactMeCard from '../cards/ContactMeCard';
import { GalleryCard } from '../cards/GalleryCard';
import UpcomingShowCard from '../cards/UpcomingShowCard';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <div className='bg-cover bg-fixed bg-acadia items-center z-20'>
        <Header />
        <div className='flex flex-col items-center pb-60'>
          <UpcomingShowCard />
          <AboutMeCard />
          <GalleryCard />
          <ContactMeCard />
        </div>
      </div>
      <div className='fixed top-0 left-0 h-screen w-screen bg-black z-0 opacity-10' />
    </>
  );
}
