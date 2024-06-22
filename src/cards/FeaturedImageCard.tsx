import Card from '../components/Card';
import GalleryMedia from '../components/GalleryMedia';

export default function FeaturedImageCard() {
  return (
    <Card title='Takoda Dionne' slug='takoda'>
      <div className='-my-4'>
        <GalleryMedia src={require('../assets/gallery/DSC_0365.png')} />
      </div>
    </Card>
  );
}
