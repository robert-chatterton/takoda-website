import Card from '../components/Card';
import UpcomingShow from '../components/UpcomingShow';

export default function UpcomingShowCard() {
  return (
    <Card slug={'gigs'} title={'Upcoming Shows'}>
      <p className='text-sm mt-2 font-thin'>
        Starting July 11th, I'll be playing at the{' '}
        <a href='https://www.ivymanor.com/' className='underline truncate'>
          Ivy Manor Inn
        </a>{' '}
        from 2PM - 5PM every Thursday!
      </p>
      <ul className='text-xs md:text-sm'>
        <UpcomingShow
          linkUrl='/festival'
          linkFormat='Rock and Roots Festival'
          location='Ellsworth, ME'
          date='07.06.24'
          subtitle="Show starts at 11AM, I'm on at 12PM!"
        />
        <UpcomingShow
          linkUrl='https://www.ivymanor.com/'
          linkFormat='Ivy Manor Inn'
          location='Bar Harbor, ME'
          date='07.04.24'
          subtitle='Show from 11AM - 2PM'
        />
        <UpcomingShow
          linkUrl='https://www.ivymanor.com/'
          linkFormat='Ivy Manor Inn'
          location='Bar Harbor, ME'
          date='07.11.24'
          subtitle='Show from 2PM - 5PM'
        />
        <UpcomingShow
          linkUrl='https://www.mofga.org/'
          linkFormat='MOFGA Benefit'
          location='Lamoine, ME'
          date='08.27.24'
          subtitle='Show from 6PM - 7:30PM'
        />
      </ul>
    </Card>
  );
}
