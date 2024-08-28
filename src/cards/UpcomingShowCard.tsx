import Card from '../components/Card';
import UpcomingShow from '../components/UpcomingShow';

export default function UpcomingShowCard() {
  return (
    <Card slug={'gigs'} title={'Upcoming Shows'}>
      <ul className='text-xs md:text-sm'>
        <UpcomingShow
          linkUrl='https://www.ivymanor.com/'
          linkFormat='Ivy Manor Inn'
          location='Bar Harbor, ME'
          date='08.29.24'
          subtitle='Show from 2PM - 5PM'
        />
        <UpcomingShow
          linkUrl='https://www.facebook.com/p/Black-Moon-Public-House-61557620630623/'
          linkFormat='Black Moon Public House'
          location='Ellsworth, ME'
          date='08.31.24'
          subtitle='Show from 6PM - 8PM'
        />
        <UpcomingShow
          linkUrl='https://www.ivymanor.com/'
          linkFormat='Ivy Manor Inn'
          location='Bar Harbor, ME'
          date='09.02.24'
          subtitle='Show from 12PM - 2:30PM'
        />
        <UpcomingShow
          linkUrl='https://www.facebook.com/TheAnnexBH/'
          linkFormat='The Annex'
          location='Bar Harbor, ME'
          date='09.04.24'
          subtitle='Show from 8PM - 10PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/NJzqocr9J3DXrVcJA'
          linkFormat='Orono Brewing Company'
          location='Orono, ME'
          date='09.06.24'
          subtitle='Show from 6PM - 8PM'
        />
        <UpcomingShow
          linkUrl='https://www.ivymanor.com/'
          linkFormat='Ivy Manor Inn'
          location='Bar Harbor, ME'
          date='09.07.24'
          subtitle='Show from 2PM - 5PM'
        />
        <UpcomingShow
          linkUrl='https://www.ivymanor.com/'
          linkFormat='Ivy Manor Inn'
          location='Bar Harbor, ME'
          date='09.12.24'
          subtitle='Show from 2PM - 5PM'
        />
        <UpcomingShow
          linkUrl='https://www.facebook.com/TheAnnexBH/'
          linkFormat='The Annex'
          location='Bar Harbor, ME'
          date='09.25.24'
          subtitle='Show from 8PM - 10PM'
        />
        <UpcomingShow
          linkUrl='https://www.facebook.com/TheAnnexBH/'
          linkFormat='The Annex'
          location='Bar Harbor, ME'
          date='10.09.24'
          subtitle='Show from 8PM - 10PM'
        />
        <UpcomingShow
          linkUrl='https://www.facebook.com/TheAnnexBH/'
          linkFormat='The Annex'
          location='Bar Harbor, ME'
          date='10.16.24'
          subtitle='Show from 8PM - 10PM'
        />
        <UpcomingShow
          linkUrl='https://www.barharbormusicfestival.org/'
          linkFormat='Bar Harbor Music Festival'
          location='Bar Harbor, ME'
          date='10.20.24'
          subtitle='Show from 2PM - 5PM @ the Ivy Manor Inn'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/NJzqocr9J3DXrVcJA'
          linkFormat='Orono Brewing Company'
          location='Orono, ME'
          date='11.22.24'
          subtitle='Show from 6PM - 8PM'
        />
      </ul>
    </Card>
  );
}
