import Card from '../components/Card';
import { mainSong, youtube, youtubeEmbedLink } from '../constants/links';

export default function FeaturedCard() {
  return (
    <Card title='Listen' slug='featured'>
      <p className='text-sm font-thin'>
        I just released{' '}
        <a
          href={
            'https://distrokid.com/hyperfollow/takodadionne/back-to?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid'
          }
          className='hover:underline font-semibold'
          target='_blank'
          rel='noreferrer'
        >
          Back To
        </a>
        , available on all major streaming platforms!
      </p>

      <p className='text-md font-thin text-center'>"I LOVE this track!"</p>
      <p className='text-xs font-thin text-center'>
        Adam Ayan, 7-time Grammy Award-winning mastering engineer
      </p>

      <ul className='list-disc text-sm font-semibold pl-3 my-2'>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
            href={
              'https://open.spotify.com/album/3AK9ytsKHMciNN1w3moCqi?referral=labelaffiliate&utm_source=1110lPbHtWw&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate'
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
            href={'https://music.apple.com/us/album/back-to-single/1860161361'}
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
              'https://distrokid.com/hyperfollow/takodadionne/back-to?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid'
            }
          >
            View all streaming platforms
          </a>
        </li>
      </ul>

      <iframe
        height={250}
        src={youtubeEmbedLink}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />

      <p className='text-sm font-thin mt-2'>
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
    </Card>
  );
}
