/* eslint-disable jsx-a11y/anchor-is-valid */
import { BandsInTownShowList } from '../components/BandsInTown';

export default function UpcomingShowCard() {
  return (
    <div className='w-4/5 flex flex-col mt-10 bg-white py-5 px-3 text-black font-light z-10 shadow-lg gap-2'>
      <a id={'shows'} className='font-semibold text-lg tracking-wider px-2'>
        Upcoming Shows
      </a>
      <BandsInTownShowList />
    </div>
  );
}
