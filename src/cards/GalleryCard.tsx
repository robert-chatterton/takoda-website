import Card from "../components/Card";

export function GalleryCard() {
  return (
    <Card title={'gallery'}>
      <div className='grid grid-cols-2 gap-2 mt-4'>
        <img src={require('../assets/gallery/2.png')} alt='' />
        <img src={require('../assets/gallery/4.png')} alt='' />
        <img src={require('../assets/gallery/1.png')} alt='' />
        <img src={require('../assets/gallery/3.png')} alt='' />
        <img src={require('../assets/gallery/5.png')} alt='' />
        <img src={require('../assets/gallery/6.png')} alt='' />
      </div>
    </Card>
  );
}
