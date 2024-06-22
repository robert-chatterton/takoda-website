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
          Takoda Dionne is a singer-songwriter born and raised on the coast of
          Maine. He currently lives in Bar Harbor. Takoda received his first
          guitar, a Little Martin LX1E, for Christmas 2020 but he played it so
          much it needed to take early retirement. He has played at numerous
          local venues including Fogtown Brewing Company, the Ivy Manor Inn and
          Criterion Theatre in Bar Harbor.
        </p>
        <br />
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
