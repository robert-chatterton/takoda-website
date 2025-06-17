import Card from '../components/Card';
import { mainSong, youtube, youtubeEmbedLink } from '../constants/links';

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
        <a
          className='underline'
          href={youtube}
          target='_blank'
          rel='noreferrer'
        >
          my YouTube channel
        </a>{' '}
        or find me on your{' '}
        <a
          className='underline'
          href={mainSong}
          target='_blank'
          rel='noreferrer'
        >
          favorite streaming service
        </a>
        !
      </p>
    </Card>
  );
}
