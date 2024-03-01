import Card from '../components/Card';
import { email } from '../constants/links';

export default function ContactMeCard() {
  return (
    <Card slug={'contact'} title={'Contact Me'}>
      <p className='mt-4 font-thin'>
        It's best to reach me by my email,{' '}
        <a className='underline' href={`mailto:${email}`}>
          {email}
        </a>
        . I'll get back to you as soon as I can!
      </p>
    </Card>
  );
}
