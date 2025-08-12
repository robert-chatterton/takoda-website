/* eslint-disable jsx-a11y/anchor-is-valid */
import { Switch } from '@mui/material';
import {
  annex,
  blackMoonPublicHouse,
  brickyard,
  exploreAcadiaCottages,
  fogtownBrewingCompany,
  hornRunBrewing,
  ivyManor,
  nocturnemDraftHaus,
  norEaster,
  oronoBrewingCompany,
  paddysIrishPub,
  patsPizza,
  pickledWrinkle,
  privateEvent,
  travelinLobster,
  UpcomingShowProps,
} from '../types/UpcomingShow';
import { useState } from 'react';
import { UpcomingShowsByDate } from '../components/UpcomingShowsByDate';
import { UpcomingShowsByVenue } from '../components/UpcomingShowsByVenue';

export default function UpcomingShowCard() {
  const [showMode, setShowMode] = useState('date');

  const shows: UpcomingShowProps[] = [
    {
      ...oronoBrewingCompany,
      date: '01.24.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '01.31.25',
      subtitle: '6PM - 8PM',
    },
    {
      url: 'https://maps.app.goo.gl/KidB63rPYS8hxinL9',
      format: 'The Thirsty Pig',
      location: 'Portland, ME',
      date: '02.20.25',
      subtitle: '5:30PM - 6PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '03.16.25',
      subtitle: '4PM - 6PM',
    },
    {
      ...blackMoonPublicHouse,
      date: '04.11.25',
      subtitle: '6PM - 8PM',
      bonusText: "Takoda's Birthday Bash!",
    },
    {
      url: 'https://maps.app.goo.gl/nabWPNGqSZnWSTwz9',
      format: 'The Studio Portland',
      location: 'Portland, ME',
      date: '04.23.25',
      subtitle: 'Doors 6PM, Show 7PM',
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
      ...annex,
      date: '05.21.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...patsPizza,
      date: '05.23.25',
      subtitle: '6PM - 8PM',
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
      ...annex,
      date: '05.28.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '05.30.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...ivyManor,
      date: '06.01.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...annex,
      date: '06.04.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...patsPizza,
      date: '06.06.25',
      subtitle: '6PM - 8PM',
    },
    {
      url: 'https://maps.app.goo.gl/zJ3wN8ev8ntyn7gQ6',
      format: 'Frost Farms',
      location: 'Bar Harbor, ME',
      date: '06.07.25',
      subtitle: '11AM - 2PM',
      bonusText: '10th Anniversary Celebration!',
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
      ...annex,
      date: '06.11.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...pickledWrinkle,
      date: '06.13.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...nocturnemDraftHaus,
      date: '06.14.25',
      subtitle: '7PM - 9PM',
    },
    {
      ...ivyManor,
      date: '06.15.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...exploreAcadiaCottages,
      date: '06.17.25',
      subtitle: '4:30PM - 7PM',
    },
    {
      ...annex,
      date: '06.18.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      url: 'https://maps.app.goo.gl/KidB63rPYS8hxinL9',
      format: 'The Thirsty Pig',
      location: 'Portland, ME',
      date: '06.19.25',
      subtitle: '5PM - 8PM',
    },
    {
      ...norEaster,
      date: '06.21.25',
      subtitle: '7PM - 10PM',
    },
    {
      ...ivyManor,
      date: '06.22.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...travelinLobster,
      date: '06.23.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...annex,
      date: '06.25.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...ivyManor,
      date: '06.26.25',
      subtitle: '11:30AM - 2PM',
    },
    {
      ...blackMoonPublicHouse,
      date: '06.27.25',
      subtitle: '7PM - 9PM',
    },
    {
      ...ivyManor,
      date: '06.29.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...annex,
      date: '06.30.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...annex,
      date: '07.02.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...ivyManor,
      date: '07.04.25',
      subtitle: '11AM - 2PM',
    },
    {
      ...paddysIrishPub,
      date: '07.07.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...travelinLobster,
      date: '07.07.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...annex,
      date: '07.09.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...hornRunBrewing,
      date: '07.10.25',
      subtitle: '4PM - 7PM',
    },
    {
      ...patsPizza,
      date: '07.11.25',
      subtitle: '7PM - 9PM',
    },
    {
      ...ivyManor,
      date: '07.13.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...exploreAcadiaCottages,
      date: '07.15.25',
      subtitle: '4:30PM - 7PM',
    },
    {
      ...annex,
      date: '07.16.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...hornRunBrewing,
      date: '07.17.25',
      subtitle: '4PM - 7PM',
    },
    {
      ...ivyManor,
      date: '07.18.25',
      subtitle: '2:30PM - 5PM',
    },
    {
      ...norEaster,
      date: '07.19.25',
      subtitle: '7PM - 10PM',
    },
    {
      ...ivyManor,
      date: '07.20.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...travelinLobster,
      date: '07.21.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...annex,
      date: '07.23.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...hornRunBrewing,
      date: '07.24.25',
      subtitle: '4PM - 7PM',
    },
    {
      ...oronoBrewingCompany,
      date: '07.25.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...ivyManor,
      date: '07.27.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...annex,
      date: '07.28.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...annex,
      date: '07.30.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...hornRunBrewing,
      date: '07.31.25',
      subtitle: '4PM - 7PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '08.01.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...privateEvent,
      location: 'Alexander, ME',
      date: '08.02.25',
      bonusText: '40th High School Reunion',
      subtitle: '3:30PM - 6:30PM',
    },
    {
      ...ivyManor,
      date: '08.03.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...travelinLobster,
      date: '08.04.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...annex,
      date: '08.06.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '08.07.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...nocturnemDraftHaus,
      date: '08.08.25',
      subtitle: '7PM - 9PM',
    },
    {
      ...ivyManor,
      date: '08.10.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...ivyManor,
      date: '08.11.25',
      subtitle: '2:30PM - 5PM',
    },
    {
      ...ivyManor,
      date: '08.12.25',
      subtitle: '2:30PM - 5PM',
    },
    {
      ...annex,
      date: '08.13.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '08.14.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...norEaster,
      date: '08.16.25',
      subtitle: '7PM - 10PM',
    },
    {
      ...ivyManor,
      date: '08.17.25',
      subtitle: '12PM - 2:30PM',
    },
    {
      ...travelinLobster,
      date: '08.18.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...exploreAcadiaCottages,
      date: '08.19.25',
      subtitle: '4:30PM - 7PM',
    },
    {
      ...annex,
      date: '08.20.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      url: 'https://maps.app.goo.gl/QyDa7oa9KFpY9Ly76',
      format: 'The Grand Waterfront Concert Series at Harbor Park',
      location: 'Ellsworth, ME',
      date: '08.22.25',
      subtitle: '6PM - 7PM',
    },
    {
      ...ivyManor,
      date: '08.23.25',
      subtitle: '2PM - 5PM',
    },
    {
      url: 'https://maps.app.goo.gl/QyDa7oa9KFpY9Ly76',
      format: 'The Grand Waterfront Concert Series at Harbor Park',
      location: 'Ellsworth, ME',
      date: '08.24.25',
      subtitle: '4PM',
      bonusText: 'Rain date',
    },
    {
      ...annex,
      date: '08.27.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '08.28.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...blackMoonPublicHouse,
      date: '08.30.25',
      subtitle: '7PM - 9PM',
    },
    {
      ...ivyManor,
      date: '08.31.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...travelinLobster,
      date: '09.01.25',
      subtitle: '5PM - 7PM',
    },
    {
      ...annex,
      date: '09.03.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '09.04.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...pickledWrinkle,
      date: '09.05.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...privateEvent,
      location: 'Bailyville, ME',
      date: '09.06.25',
      subtitle: '4PM - 7PM',
    },
    {
      ...ivyManor,
      date: '09.07.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...annex,
      date: '09.10.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '09.11.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...norEaster,
      date: '09.13.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...privateEvent,
      location: 'Northeast Harbor, ME',
      date: '09.13.25',
      subtitle: '9PM - 11PM',
    },
    {
      ...ivyManor,
      date: '09.14.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...exploreAcadiaCottages,
      date: '09.16.25',
      subtitle: '4:30PM - 7PM',
    },
    {
      ...annex,
      date: '09.17.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...privateEvent,
      location: 'Boothbay Harbor, ME',
      date: '09.19.25',
      subtitle: '6:30PM - 8PM',
    },
    {
      ...ivyManor,
      date: '09.22.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...annex,
      date: '09.24.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '09.25.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...oronoBrewingCompany,
      date: '09.26.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '09.27.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...ivyManor,
      date: '09.28.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...annex,
      date: '10.01.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '10.02.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...brickyard,
      date: '10.04.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...ivyManor,
      date: '10.05.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...annex,
      date: '10.08.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '10.09.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...pickledWrinkle,
      date: '10.10.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...norEaster,
      date: '10.11.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...ivyManor,
      date: '10.12.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...annex,
      date: '10.15.25',
      subtitle: '5PM - 7:30PM',
    },
    {
      ...paddysIrishPub,
      date: '10.16.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...paddysIrishPub,
      date: '10.18.25',
      subtitle: '12PM - 3PM',
      bonusText: 'Music Harbor Festival',
    },
    {
      ...ivyManor,
      date: '10.19.25',
      subtitle: '2PM - 5PM',
      bonusText: 'Music Harbor Festival',
    },
    {
      ...paddysIrishPub,
      date: '10.23.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...blackMoonPublicHouse,
      date: '10.24.25',
      subtitle: '7PM - 9PM',
    },
    {
      ...ivyManor,
      date: '10.26.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...paddysIrishPub,
      date: '10.30.25',
      subtitle: '2PM - 5PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '10.31.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...ivyManor,
      date: '11.01.25',
      subtitle: '2:30PM - 5PM',
    },
    {
      ...oronoBrewingCompany,
      date: '11.07.25',
      subtitle: '6PM - 9PM',
    },
    {
      ...brickyard,
      date: '11.08.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...blackMoonPublicHouse,
      date: '11.15.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...blackMoonPublicHouse,
      date: '12.06.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...fogtownBrewingCompany,
      date: '12.19.25',
      subtitle: '6PM - 8PM',
    },
    {
      ...nocturnemDraftHaus,
      date: '12.20.25',
      subtitle: '7PM - 9PM',
    },
    {
      ...oronoBrewingCompany,
      date: '01.16.26',
      subtitle: '6PM - 9PM',
    },
  ];

  return (
    <div className='w-4/5 max-w-[700px] flex flex-col mt-10 bg-white p-5 text-black font-light z-10 shadow-lg'>
      <div className='flex flex-row items-center justify-between'>
        <a id={'shows'} className='font-semibold text-lg tracking-wider'>
          Upcoming Shows
        </a>
        <div className='text-xs flex flex-row items-center font-extralight uppercase'>
          <p>Venue</p>
          <Switch
            color={'error'}
            defaultChecked
            value={showMode === 'venue'}
            onChange={() =>
              setShowMode((prev) => (prev === 'date' ? 'venue' : 'date'))
            }
          />
          <p>Date</p>
        </div>
      </div>
      {showMode === 'date' && <UpcomingShowsByDate shows={shows} />}
      {showMode === 'venue' && <UpcomingShowsByVenue shows={shows} />}
    </div>
  );
}
