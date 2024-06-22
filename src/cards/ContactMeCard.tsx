import Card from '../components/Card';
import { email } from '../constants/links';

export default function ContactMeCard() {
  return (
    <Card slug={'contact'} title={'Contact Me'}>
      <p className='mt-4 font-thin'>
        To book a private party or gig it is best to reach me by my email,{' '}
        <a className='underline' href={`mailto:${email}`}>
          {email}
        </a>
        .
      </p>
    </Card>
  );
}
