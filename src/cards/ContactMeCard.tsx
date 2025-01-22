import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';
import { email } from '../constants/links';

export default function ContactMeCard() {
  return (
    <Card slug={'contact'} title={'Contact Me'}>
      <p className='mt-4 font-thin'>
        To book a private party, benefit, or gig it is best to reach me by my
        email,{' '}
        <a className='underline' href={`mailto:${email}`}>
          {email}
        </a>
        .
      </p>
      <GalleryMedia src={require('../assets/gallery/IMG_3872.jpeg')} />
    </Card>
  );
}
