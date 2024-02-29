export default function GalleryMedia({ src }: { src: any }) {
  console.log(src);
  return (
    <div className='my-4'>
      <img src={src} alt='' />
    </div>
  );
}
