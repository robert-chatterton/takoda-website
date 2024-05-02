import Card from '../components/Card';

export default function UpcomingShowCard() {
  return (
    <Card slug={'gigs'} title={'Upcoming Shows'}>
      {/* <p className='mt-2 font-thin'>
        I'm playing most weeks at various local open mics (including Fogtown
        Brewing in{' '}
        <a
          href='https://maps.app.goo.gl/jnQUgzmrdv7Lvab38'
          className='underline'
        >
          Ellsworth
        </a>{' '}
        &{' '}
        <a
          className='underline'
          href='https://maps.app.goo.gl/mGRbmfdzM1D5VvJu5'
        >
          Bar Harbor
        </a>
        ) along with many other talented local artists.
      </p> */}
      <ul className='text-xs md:text-sm'>
        <li>
          <div className='flex flex-row justify-center items-center my-3'>
            <a
              href='https://www.ivymanor.com/'
              className='mr-1 underline truncate'
            >
              Ivy Manor Inn
            </a>
            <p className='font-thin'>Bar Harbor, ME</p>
            <div className='flex-1' />
            <p>05.09.24</p>
          </div>
          <p className='text-xs font-thin text-gray-700 ml-4 -mt-2'>Show starts at 2PM</p>
        </li> 
        <li>
          <div className='flex flex-row justify-center items-center my-3'>
            <a
              href='https://maps.app.goo.gl/jnQUgzmrdv7Lvab38'
              className='mr-1 underline truncate'
            >
              Fogtown Brewing
            </a>
            <p className='font-thin'>Ellsworth, ME</p>
            <div className='flex-1' />
            <p>05.24.24</p>
          </div>
          <p className='text-xs font-thin text-gray-700 ml-4 -mt-2'>Show starts at 6PM</p>
        </li>
        <li>
          <div className='flex flex-row justify-center items-center my-3'>
            <a
              href='https://maps.app.goo.gl/kHxUAgEgNjV5qsAV8'
              className='mr-1 underline truncate'
            >
              Criterion Theatre
            </a>
            <p className='font-thin'>Bar Harbor, ME</p>
            <div className='flex-1' />
            <p>05.25.24</p>
          </div>
          <p className='text-xs font-thin text-gray-700 ml-4 -mt-2'>Opens at 6PM - Show starts at 7PM</p>
        </li>
        <li>
          <div className='flex flex-row justify-center items-center my-3'>
            <a
              href='https://maps.app.goo.gl/kHxUAgEgNjV5qsAV8'
              className='mr-1 underline truncate'
            >
              Criterion Theatre
            </a>
            <p className='font-thin'>Bar Harbor, ME</p>
            <div className='flex-1' />
            <p>06.15.24</p>
          </div>
          <p className='text-xs font-thin text-gray-700 ml-4 -mt-2'>Opens at 6PM - Show starts at 7PM</p>
        </li>
        <li>
          <div className='flex flex-row justify-center items-center my-3'>
            <a className='mr-1 underline truncate' href='/festival'>
              Rock and Roots Festival
            </a>
            <p className='font-thin'>Ellsworth, ME</p>
            <div className='flex-1' />
            <p>07.06.24</p>
          </div>
          <p className='text-xs font-thin text-gray-700 ml-4 -mt-2'>Show starts at 11AM, I'm on at 12PM!</p>
        </li>
      </ul>
    </Card>
  );
}
