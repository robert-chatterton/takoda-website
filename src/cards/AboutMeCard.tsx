import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';

export default function AboutMeCard() {
  return (
    <Card slug={'about'} title={'About Me'}>
      <div className='-mt-4'>
        <GalleryMedia src={require('../assets/takoda_climbing.png')} />
      </div>
      <div className='font-thin'>
        <p>
          Hi! I'm Takoda, a singer-songwriter born and raised on the coast of Maine currently living in Bar Harbor. I received my first guitar,
          a Little Martin LX1E, for Christmas 2020. I wrote my first song in
          2021 while in the seventh grade and started performing at local open
          mics in July 2023.
        </p>
        <br />
        <p>
          My original music is a thoughtful and
          passionate blend of pop, rock, and folk music. Some of my biggest influences
          include Pearl Jam, Chris Cornell, Ed Sheeran, Passenger, and Nirvana.
        </p>
        <br />
        <p>
          I layer acoustic guitar, percussion, and bass using a single
          guitar with live looping and vocals often including layered
          harmonies.
        </p>
      </div>
      <GalleryMedia src={require('../assets/gallery/2.png')} />
    </Card>
  );
}
