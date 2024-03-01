import Card from '../components/Card';
import { youtube, youtubeEmbedLink } from '../constants/links';

export default function FeaturedCard() {
  return (
    <Card title='Listen' slug='featured'>
      <iframe
        height={250}
        src={youtubeEmbedLink}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
      <p className='font-thin mt-3'>
        Check out more of my songs on{' '}
        <a className='underline' href={youtube}>
          my YouTube channel
        </a>
        !
      </p>
    </Card>
  );
}
