/* eslint-disable jsx-a11y/anchor-is-valid */
import UpcomingShow from '../components/UpcomingShow';
import { fogtownBrewingCompany, ivyManor, norEaster, oronoBrewingCompany, travelinLobster, UpcomingShowProps } from '../types/UpcomingShow';

export default function UpcomingShowCard() {
  const shows: UpcomingShowProps[] = [
    {
      ...oronoBrewingCompany,
      date: '01.24.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '01.31.25',
      subtitle: '6PM - 8PM'
    },
    {
      ...fogtownBrewingCompany,
      date: '03.16.25',
      subtitle: '4PM - 6PM'
    },
    {
      url: 'https://www.facebook.com/p/Black-Moon-Public-House-61557620630623/',
      format: 'Black Moon Public House',
      location: 'Ellsworth, ME',
      date: '04.11.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...oronoBrewingCompany,
      date: '05.02.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...ivyManor,
      date: '05.04.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...ivyManor,
      date: '05.09.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...norEaster,
      date: '05.17.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...ivyManor,
      date: '05.18.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...ivyManor,
      date: '05.25.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...travelinLobster,
      date: '05.26.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '05.30.25',
      subtitle: '6PM - 8PM'
    },
    {
      ...ivyManor,
      date: '06.01.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...ivyManor,
      date: '06.08.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...travelinLobster,
      date: '06.09.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...norEaster,
      date: '06.21.25',
      subtitle: '7PM - 10PM',
    },
    {
      ...travelinLobster,
      date: '06.23.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...ivyManor,
      date: '07.04.25',
      subtitle: '11AM - 2PM',
    },
    {
      ...travelinLobster,
      date: '07.07.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...norEaster,
      date: '07.19.25',
      subtitle: '7PM - 10PM',
    },
    {
      ...travelinLobster,
      date: '07.21.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...oronoBrewingCompany,
      date: '07.25.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '08.01.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...travelinLobster,
      date: '08.04.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...norEaster,
      date: '08.16.25',
      subtitle: '7PM - 10PM',
    },
    {
      ...travelinLobster,
      date: '08.18.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...travelinLobster,
      date: '09.01.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...norEaster,
      date: '09.13.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...oronoBrewingCompany,
      date: '09.26.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...norEaster,
      date: '10.11.25',
      subtitle: '6PM - 9PM',
    },
  ];

  return (
    <div className='w-4/5 max-w-[700px] flex flex-col mt-10 bg-white p-5 text-black font-light z-10 shadow-lg'>
      <div className='flex flex-row items-center justify-between'>
        <a id={'shows'} className='font-semibold text-lg tracking-wider'>
          Upcoming Shows
        </a>
        {/* <p>slider</p> */}
      </div>
      <div className='text-xs flex flex-row items-center justify-between font-extralight uppercase mt-2'>
        <p>Venue</p>
        <p>Date</p>
      </div>
      <ul className='flex flex-col text-xs md:text-sm divide-y'>
        {shows.map((show, idx) => (
          <UpcomingShow
            key={idx}
            linkUrl={show.url}
            linkFormat={show.format}
            location={show.location}
            date={show.date}
            subtitle={show.subtitle}
          />
        ))}
      </ul>
    </div>
  );
}
