import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';

export default function AboutMeCard() {
  return (
    <Card slug={'about'} title={'About Me'}>
      <div className='-mt-4'>
        <GalleryMedia src={require('../assets/gallery/IMG_2797.jpeg')} />
      </div>
      <div className='font-thin'>
        <p>
          Takoda Dionne is a live looping singer-songwriter born and raised on
          the coast of Maine. He is currently based in Bar Harbor. Takoda
          started playing music at a young age and writing his own music in
          middle school. His musical journey began with the flute but guitar
          quickly became his instrument of choice. He also plays bass, drums and
          keyboard/piano. He has a passion for guitars and can be seen playing
          at local venues year round.
        </p>
        <GalleryMedia src={require('../assets/gallery/DSC_0272.png')} />
        <p>
          Takoda plays an eclectic selection of covers and originals, both live
          looped and acoustic. His original music is a thoughtful and passionate
          blend of pop, rock, and folk music. Using live looping Takoda layers
          acoustic guitar, percussion, and bass using a single guitar and
          sometimes piano or electric guitar. He adds his passionate vocals that
          often include layered vocal harmonies using a mic connected to his
          looper which creates the illusion of a multi-instrumental band with
          multiple singers. His music is always live with nothing pre-recorded.
        </p>
      </div>
      <GalleryMedia src={require('../assets/gallery/guitar.png')} />
    </Card>
  );
}
