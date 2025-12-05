import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';

export default function AboutMeCard() {
  return (
    <Card slug={'about'} title={'About Me'}>
      <div className='font-thin'>
        <p>
          Takoda Dionne is a live looping singer-songwriter born and raised on
          the coast of Maine and currently based in Bar Harbor.
        </p>
        <p>
          He plays a curated selection of covers and originals, both live looped
          and acoustic, using guitar and piano. Takoda's music is a thoughtful
          blend of pop, rock, folk and hip-hop with honest lyrics. His
          impressive live performances are celebrated for his songwriting
          ability and technical musical skills.
        </p>
        <GalleryMedia src={require('../assets/DSC_0272.png')} />
        <p>
          Using live looping, Takoda layers acoustic guitar, percussion, bass
          and vocals using a single guitar and piano. He adds his fiery vocals
          and layered harmonies to create the sound of a multi-instrumental band
          with multiple singers. His music is always live with nothing
          pre-recorded.
        </p>
        <p>
          Takoda is a tireless performer who performs a two hour concert with
          enthusiasm and effortless charm. Catch him if you can!
        </p>
      </div>
      <GalleryMedia src={require('../assets/DSC00743.JPG')} />
      <GalleryMedia src={require('../assets/IMG_9008.jpeg')} />
    </Card>
  );
}
