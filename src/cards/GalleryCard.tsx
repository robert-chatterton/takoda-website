import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';

export function GalleryCard() {
  return (
    <Card slug={'gallery'} title={'Gallery'}>
      <div className='-mt-4'>
        <GalleryMedia src={require('../assets/gallery/DSC00137.jpeg')} />
        <GalleryMedia src={require('../assets/gallery/DSC_0746.png')} />
        <GalleryMedia src={require('../assets/gallery/IMG_3403.jpeg')} />
        <GalleryMedia src={require('../assets/gallery/IMG_3872.jpeg')} />
      </div>
    </Card>
  );
}
