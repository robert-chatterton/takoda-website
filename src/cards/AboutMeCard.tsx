import Card from "../components/Card";

export default function AboutMeCard() {
  return (
    <Card title={'about me'}>
      <div className='mt-2'>
        <img src={require('../assets/takoda_climbing.png')} alt='' />
      </div>
      <p className='mt-4 font-thin'>
        I'm a singer-songwriter born and raised on the coast of Maine. He currently lives in Bar Harbor, Maine. Takoda received his first guitar, a Little Martin LX1E, for Christmas 2020. He wrote his first song in 2021 while in the seventh grade and started performing at local open mics in July 2023. Takoda's original music is a thoughtful and passionate blend of pop, rock, and folk music. Some of his influences include: Pearl Jam, Chris Cornell, Ed Sheeran, Passenger, and Nirvana. Takoda layers acoustic guitar, percussion, and bass using a single guitar with live looping and passionate vocals often including layered harmonies.
      </p>
    </Card>
  );
}
