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
        <p>Brickyard Hollow Brewing, Showhegan</p>
        <p>Shipyard Brew Haus @Sugarloaf Inn, Carrabassett Valley</p>
        <br />
        <a
          href={`https://star977fm.com/index.php/star-morning-show/morning-music-showcase/`}
          className='text-sm font-bold hover:underline'
        >
          Live performances/interviews on Star 97.7 radio!
        </a>
      </div>
    </Card>
  );
}
