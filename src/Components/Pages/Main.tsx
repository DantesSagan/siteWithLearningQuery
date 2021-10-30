import MainProperty from '../exportTypes/MainProps';

export default function Main() {
  return (
    <div
      style={{ marginTop: '300px' }}
      className='p-4 m-4  text-3xl rounded-b-2xl gridCol shadow-inner border-double border-4 border-black'
    >
      <MainProperty name='jQuery' />
    </div>
  );
}
