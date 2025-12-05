import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';

export function GalleryCard() {
  return (
    <Card slug={'gallery'} title={'Gallery'}>
      <div className='-mt-4'>
        <GalleryMedia src={require('../assets/DSC00578.JPG')} />
        <GalleryMedia src={require('../assets/DSC00765.JPG')} />
        <GalleryMedia src={require('../assets/IMG_8379.jpg')} />
      </div>
    </Card>
  );
}
