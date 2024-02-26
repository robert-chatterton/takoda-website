import Card from '../components/Card';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='overscroll-none bg-fixed bg-cover bg-concert items-center'>
      <Header />
      <div className='grid overscroll-none'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
