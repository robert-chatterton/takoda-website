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
    <li>
      <div className='flex flex-row justify-center items-center my-3'>
        <a href={linkUrl} className='mr-1 underline truncate'>
          {linkFormat}
        </a>
        <p className='font-thin'>{location}</p>
        <div className='flex-1' />
        <p>{date}</p>
      </div>
      <p className='text-xs font-thin text-gray-700 ml-4 -mt-2'>{subtitle}</p>
    </li>
  );
}
