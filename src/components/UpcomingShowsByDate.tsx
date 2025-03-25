import { UpcomingShowProps } from '../types/UpcomingShow';

function UpcomingShow({
  url,
  format,
  location,
  date,
  subtitle,
  bonusText,
}: UpcomingShowProps) {
  return (
    <li className='py-1 flex flex-row justify-between items-start gap-1 max-w-full'>
      <div className='flex flex-col items-start w-[200px] md:w-auto'>
        <a href={url} className='w-full underline truncate'>
          {format}
        </a>
        <p className='text-xs font-thin'>{location}</p>
      </div>

      <div className='flex flex-col items-end w-fit'>
        <p className='text-nowrap'>{date}</p>
        <p className='text-nowrap text-xs font-thin text-gray-700'>
          {subtitle}
        </p>
        {bonusText && (
          <p className='w-full text-nowrap truncate text-xs font-thin text-gray-700'>
            {bonusText}
          </p>
        )}
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
            url={show.url}
            format={show.format}
            location={show.location}
            date={show.date}
            subtitle={show.subtitle}
            bonusText={show.bonusText}
          />
        ))}
      </ul>
    </>
  );
}
