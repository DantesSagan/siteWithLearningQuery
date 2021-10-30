type MainProps = {
  name: string;
};

export default function MainProperty(prop: MainProps) {
  return (
    <div>
      Hello, this is a site for learning sequence operations -
      <span className='p-4 text-3xl underline'>{prop.name}</span> with some lesson's.
    </div>
  );
}
