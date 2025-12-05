import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';
import { email } from '../constants/links';

export default function FeaturedImageCard() {
  return (
    <Card title='Takoda Dionne' slug='takoda'>
      <div className='-mt-4'>
        <GalleryMedia src={require('../assets/DSC00564.JPG')} />
        <p className='font-thin mt-3'>
          Send me an{' '}
          <a className='underline' href={`mailto:${email}`}>
            email
          </a>
          {' '}to book me for a private party or event!
        </p>
      </div>
    </Card>
  );
}
