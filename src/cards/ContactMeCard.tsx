import Card from "../components/Card";

export default function ContactMeCard() {
  return (
    <Card title={'contact me'}>
      <p className='mt-4 font-thin'>
        It's best to reach me by my email, <a className='underline' href='mailto:takodadionne@gmail.com'>takodadionne@gmail.com</a>. I'll get back to you as soon as I can!
      </p>
    </Card>
  );
}
