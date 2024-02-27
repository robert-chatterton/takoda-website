import AboutMeCard from '../cards/AboutMeCard';
import UpcomingShowCard from '../cards/UpcomingShowCard';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='bg-cover bg-fixed bg-concert items-center'>
      <Header />
      <div className='flex flex-col items-center pb-60'>
        <UpcomingShowCard />
        <AboutMeCard />
      </div>
    </div>
  );
}
