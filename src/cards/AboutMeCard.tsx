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
          Takoda Dionne is a singer-songwriter born and raised on the coast of
          Maine. He currently lives in Bar Harbor. Takoda started playing music
          at a young age and writing his own music in middle school. His musical
          journey started with the flute but quickly changed to guitar but he
          also plays bass, drums and keyboard. He has a passion for guitars and
          can be seen playing at local venues year round.
        </p>
        <GalleryMedia src={require('../assets/gallery/DSC_0272.png')} />
        <p>
          Some of his influences include: Ed Sheeran, Shawn Mendes, Passenger,
          Chris Cornell, Noah Kahan and Pearl Jam. Takoda plays an eclectic
          selection of covers and his original music is a thoughtful and
          passionate blend of pop, rock, and folk music. Takoda layers acoustic
          guitar, percussion, and bass using a single guitar with live looping
          and passionate vocals often including layered harmonies.
        </p>
      </div>
      <GalleryMedia src={require('../assets/gallery/guitar.png')} />
    </Card>
  );
}
