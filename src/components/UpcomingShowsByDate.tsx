import { UpcomingShowProps } from '../types/UpcomingShow';

function UpcomingShow({
  linkUrl,
  linkFormat,
  location,
  date,
  subtitle,
}: {
  linkUrl: string;
  linkFormat: string;
  location: string;
  date: string;
  subtitle: string;
}) {
  return (
    <li className='py-1 flex flex-row justify-between items-center gap-1'>
      <div className='flex flex-col items-start'>
        <a href={linkUrl} className='underline truncate'>
          {linkFormat}
        </a>
        <p className='text-xs font-thin'>{location}</p>
      </div>

      <div className='flex flex-col items-end'>
        <p className='text-nowrap'>{date}</p>
        <p className='text-nowrap text-xs font-thin text-gray-700'>
          {subtitle}
        </p>
      </div>
    </li>
  );
}

export function UpcomingShowsByDate({ shows }: { shows: UpcomingShowProps[] }) {
  return (
    <>
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
    </>
  );
}
