import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';

export function GalleryCard() {
  return (
    <Card slug={'gallery'} title={'gallery'}>
      <GalleryMedia src={require('../assets/gallery/1.png')} />
      <GalleryMedia src={require('../assets/gallery/3.png')} />
      <GalleryMedia src={require('../assets/gallery/5.png')} />
      <GalleryMedia src={require('../assets/gallery/4.png')} />
      <GalleryMedia src={require('../assets/gallery/6.png')} />
    </Card>
  );
}
