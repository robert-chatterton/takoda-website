import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';

export function GalleryCard() {
  return (
    <Card slug={'gallery'} title={'Gallery'}>
      <div className='-mt-4'>
        <GalleryMedia src={require('../assets/gallery/DSC_0746.png')} />
        <GalleryMedia src={require('../assets/gallery/IMG_2117.png')} />
        <GalleryMedia src={require('../assets/gallery/IMG_3255.png')} />
        <GalleryMedia src={require('../assets/gallery/IMG_3257.png')} />
      </div>
    </Card>
  );
}
