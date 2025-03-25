import { useMemo } from 'react';
import { UpcomingShowProps } from '../types/UpcomingShow';

export function UpcomingShowsByVenue({
  shows,
}: {
  shows: UpcomingShowProps[];
}) {
  const venueRecords = useMemo(() => {
    const map = new Map<string, UpcomingShowProps[]>();
    shows.forEach((show) => {
      if (map.has(show.format)) {
        const existing = map.get(show.format) as UpcomingShowProps[];
        map.set(show.format, [...existing, show]);
      } else {
        map.set(show.format, [show]);
      }
    });
    const records: { format: string; shows: UpcomingShowProps[] }[] = [];
    map.forEach((shows, format) => {
      records.push({ format, shows });
    });

    return records.sort((a, b) => b.shows.length - a.shows.length);
  }, [shows]);

  return (
    <>
      <div className='text-xs flex flex-row items-center justify-between font-extralight uppercase mt-2'>
        <p>Venue</p>
        <p>Date</p>
      </div>
      <ul className='flex flex-col text-xs md:text-sm divide-y gap-1'>
        {venueRecords.map(({ format, shows }, idx) => (
          <li key={idx} className='flex flex-row justify-between'>
            <div className='flex flex-col items-start mt-1 w-[200px] md:w-auto truncate'>
              <a href={shows[0]?.url} className='underline truncate w-full'>
                {format}
              </a>
              <p className='text-xs font-thin'>{shows[0]?.location}</p>
            </div>
            <div className='mt-1 flex flex-row gap-2'>
              {shows.length === 1 ? (
                <div className='flex flex-col items-end text-nowrap text-xs text-right'>
                  <p>{shows[0]?.date}</p>
                  <p className='font-thin text-gray-700'>
                    {shows[0]?.subtitle}
                  </p>
                </div>
              ) : (
                <>
                  <div className='flex flex-col items-end text-nowrap text-xs text-right'>
                    {shows.map((show, showIdx) => (
                      <p key={showIdx}>{show.date}</p>
                    ))}
                  </div>
                  <div className='flex flex-col items-end text-nowrap text-xs text-right font-thin text-gray-700'>
                    {shows.map((show, showIdx) => (
                      <p key={showIdx}>{show.subtitle}</p>
                    ))}
                  </div>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
