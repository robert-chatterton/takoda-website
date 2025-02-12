export default function GalleryMedia({ src }: { src: any }) {
  return (
    <div className='my-4'>
      <img src={src} alt='' />
    </div>
  );
}
