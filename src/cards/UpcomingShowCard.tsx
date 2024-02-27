import Card from "../components/Card";

export default function UpcomingShowCard() {
  return (
    <Card title={'upcoming shows'}>
      <p className='mt-2 font-thin'>
        I'm playing most weeks at various local open mics (including Fogtown Brewing in Ellsworth & Bar Harbor) along with many other talented local artists.
      </p>
      <ul>
        <li>
          <div className='flex flex-row my-3 text-xs md:text-md'>
            <div className='mr-1 truncate'>
              Criterion Theatre
            </div>
            <p className='font-thin truncate'>
              Bar Harbor, Maine
            </p>
            <div className='flex-1' />
            <p className='tracking-wider'>
              06.15.24
            </p>
          </div>
        </li>
        <li>
          <div className='flex flex-row my-3 text-xs md:text-md'>
            <div className='mr-1 truncate'>
              Rock and Roots Festival
            </div>
            <p className='font-thin truncate'>
              Ellsworth, Maine
            </p>
            <div className='flex-1' />
            <p className='tracking-wider'>
              07.06.24
            </p>
          </div>
        </li>
      </ul>
    </Card>
  );
}