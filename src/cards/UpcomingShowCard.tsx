import Card from '../components/Card';
import UpcomingShow from '../components/UpcomingShow';

export default function UpcomingShowCard() {
  return (
    <Card slug={'gigs'} title={'Upcoming Shows'}>
      <ul className='text-xs md:text-sm'>
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/NJzqocr9J3DXrVcJA'
          linkFormat='Orono Brewing Company'
          location='Orono, ME'
          date='01.24.25'
          subtitle='Show from 6PM - 9PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/8bShNrWx1Qzezr7r7'
          linkFormat='Fogtown Brewing'
          location='Ellsworth, ME'
          date='01.31.25'
          subtitle='Show from 6PM - 8PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/8bShNrWx1Qzezr7r7'
          linkFormat='Fogtown Brewing'
          location='Ellsworth, ME'
          date='03.16.25'
          subtitle='Show from 4PM - 6PM'
        />
        <UpcomingShow
          linkUrl='https://www.facebook.com/p/Black-Moon-Public-House-61557620630623/'
          linkFormat='Black Moon Public House'
          location='Ellsworth, ME'
          date='04.11.25'
          subtitle='Show from 6PM - 8PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/NJzqocr9J3DXrVcJA'
          linkFormat='Orono Brewing Company'
          location='Orono, ME'
          date='05.02.25'
          subtitle='Show from 6PM - 9PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/8bShNrWx1Qzezr7r7'
          linkFormat='Fogtown Brewing'
          location='Ellsworth, ME'
          date='05.30.25'
          subtitle='Show from 6PM - 8PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/P27EKfqVv18D1hAu9'
          linkFormat="Nor'Easter"
          location='Northeast Harbor, ME'
          date='06.21.25'
          subtitle='Show from 7PM - 10PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/P27EKfqVv18D1hAu9'
          linkFormat="Nor'Easter"
          location='Northeast Harbor, ME'
          date='07.19.25'
          subtitle='Show from 7PM - 10PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/NJzqocr9J3DXrVcJA'
          linkFormat='Orono Brewing Company'
          location='Orono, ME'
          date='07.25.25'
          subtitle='Show from 6PM - 9PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/8bShNrWx1Qzezr7r7'
          linkFormat='Fogtown Brewing'
          location='Ellsworth, ME'
          date='08.01.25'
          subtitle='Show from 6PM - 8PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/P27EKfqVv18D1hAu9'
          linkFormat="Nor'Easter"
          location='Northeast Harbor, ME'
          date='08.16.25'
          subtitle='Show from 7PM - 10PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/P27EKfqVv18D1hAu9'
          linkFormat="Nor'Easter"
          location='Northeast Harbor, ME'
          date='09.13.25'
          subtitle='Show from 6PM - 9PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/NJzqocr9J3DXrVcJA'
          linkFormat='Orono Brewing Company'
          location='Orono, ME'
          date='09.26.25'
          subtitle='Show from 6PM - 8PM'
        />
        <UpcomingShow
          linkUrl='https://maps.app.goo.gl/P27EKfqVv18D1hAu9'
          linkFormat="Nor'Easter"
          location='Northeast Harbor, ME'
          date='10.11.25'
          subtitle='Show from 6PM - 9PM'
        />
      </ul>
    </Card>
  );
}
