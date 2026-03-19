import Card from '../components/Card';

export default function PreviouslyPlayed() {
  return (
    <Card slug={'previous-venues'} title={'Previous Venues'}>
      <div className='font-thin'>
        <p>Orono Brewing Company, Orono</p>
        <p>Fogtown Brewing Company, Ellsworth</p>
        <p>The Black Moon Public House, Ellsworth</p>
        <p>The Annex, Bar Harbor</p>
        <p>The Ivy Manor Inn, Bar Harbor</p>
        <p>The Criterion Theatre, Bar Harbor</p>
        <p>The Nor'Easter, Northeast Harbor</p>
        <p>The Thirsty Pig, Portland</p>
        <p>Paddy's Irish Pub, Bar Harbor</p>
        <p>The Pickled Wrinkle, Birch Harbor</p>
        <p>Nocturnem Draft Haus, Bangor</p>
        <p>The Travelin Lobster, Bar Harbor</p>
        <p>Horn Run Brewing, Eastport</p>
        <p>Brickyard Hollow Brewing, Skowhegan, Sugarloaf, and Portland</p>
        <p>Shipyard Brew Haus, Sugarloaf</p>
        <br />
        <a
          href={`https://www.youtube.com/watch?v=Do_yTNvO4q0`}
          className='text-sm font-bold hover:underline'
          target='_blank'
          rel='noreferrer'
        >
          My interview on the Nite Show Performance Series
        </a>
        <br />
        <ul className='list-disc ml-4'>
          <li>
            <a
              href={`https://www.youtube.com/watch?v=T_6N4c1uRVA`}
              className='text-sm font-bold hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Performing "Back To"
            </a>
          </li>
          <li>
            <a
              href={`https://www.youtube.com/watch?v=M3Cdff2G5lg`}
              className='text-sm font-bold hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Performing a cover of "The Scientist" by Coldplay
            </a>
          </li>
        </ul>
        <br />
        <a
          href={`https://www.mainepublic.org/northeast-corner/2026-02-22/northeast-corner-february-22nd-2026`}
          className='text-sm font-bold hover:underline'
          target='_blank'
          rel='noreferrer'
        >
          My interview on Northeast Corner on MPR
        </a>
        <br />
        <a
          href={`https://star977fm.com/index.php/star-morning-show/morning-music-showcase/`}
          className='text-sm font-bold hover:underline'
          target='_blank'
          rel='noreferrer'
        >
          Live performances/interviews on Star 97.7 radio!
        </a>
      </div>
    </Card>
  );
}
