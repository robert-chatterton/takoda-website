import Card from '../components/Card';

export default function UpcomingShowCard() {
  return (
    <Card slug={'gigs'} title={'upcoming shows'}>
      <p className='mt-2 font-thin'>
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
      </p>
      <ul>
        <li>
          <div className='flex flex-row my-3 text-xs md:text-md'>
            <a
              href='https://maps.app.goo.gl/kHxUAgEgNjV5qsAV8'
              className='mr-1 underline truncate'
            >
              Criterion Theatre
            </a>
            <p className='font-thin truncate'>Bar Harbor, Maine</p>
            <div className='flex-1' />
            <p className='tracking-wider'>06.15.24</p>
          </div>
        </li>
        <li>
          <div className='flex flex-row my-3 text-xs md:text-md'>
            <p className='mr-1 truncate'>Rock and Roots Festival</p>
            <p className='font-thin truncate'>Ellsworth, Maine</p>
            <div className='flex-1' />
            <p className='tracking-wider'>07.06.24</p>
          </div>
        </li>
      </ul>
      <a className='text-sm font-thin underline' href='#contact'>
        Contact me about performance opportunities!
      </a>
    </Card>
  );
}
