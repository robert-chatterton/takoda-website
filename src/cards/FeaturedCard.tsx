import Card from '../components/Card';
import { mainSong, youtube, youtubeEmbedLink } from '../constants/links';

export default function FeaturedCard() {
  return (
    <Card title='Listen' slug='featured'>
      <p className='text-sm font-thin mb-2'>
        I just released{' '}
        <a
          href={
            'https://distrokid.com/hyperfollow/takodadionne/train-station?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid'
          }
          className='hover:underline font-semibold'
          target='_blank'
          rel='noreferrer'
        >
          Train Station
        </a>
        , available on all major streaming platforms!
      </p>

      {/* <p className='text-md font-thin text-center'>"I LOVE this track!"</p>
      <p className='text-xs font-thin text-center mb-2'>
        Adam Ayan, 8-time Grammy Award-winning mastering engineer
      </p> */}

      <iframe
        height={250}
        src={youtubeEmbedLink}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />

      <ul className='list-disc text-sm font-semibold pl-3 my-2'>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
            href={
              'https://open.spotify.com/album/0jFujfiUoCixnsBuXJF5uS?si=DpWk9XOIQju63Smgn7_81A'
            }
          >
            Listen on Spotify
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
            href={'https://music.apple.com/us/album/train-station-single/1885216793'}
          >
            Listen on Apple Music
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
            href={
              'https://distrokid.com/hyperfollow/takodadionne/train-station?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid'
            }
          >
            View all streaming platforms
          </a>
        </li>
      </ul>

      <p className='text-sm font-thin mb-2'>
        Check out more of my songs on{' '}
        <a
          className='hover:underline font-semibold'
          href={youtube}
          target='_blank'
          rel='noreferrer'
        >
          my YouTube channel
        </a>{' '}
        or find me on your{' '}
        <a
          className='hover:underline font-semibold'
          href={mainSong}
          target='_blank'
          rel='noreferrer'
        >
          favorite streaming service
        </a>
        !
      </p>

      <iframe
        height={250}
        src={'https://www.youtube.com/embed/w83gyDOEjGU?si=37-HO1EDQhsH7Kl2'}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </Card>
  );
}
