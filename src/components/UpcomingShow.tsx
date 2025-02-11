export default function UpcomingShow({
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
        <p className='text-nowrap text-xs font-thin text-gray-700'>{subtitle}</p>
      </div>
    </li>
  );
}
