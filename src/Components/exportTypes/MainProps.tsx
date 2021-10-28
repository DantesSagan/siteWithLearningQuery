export type MainProps = {
  name: string;
};

export default function MainProperty(prop: MainProps) {
  return (
    <div>
      Hello this is a site for learning sequence operations{' '}
      <span
        style={{ fontSize: '25px', fontStyle: 'italic', background: 'blue' }}
      >
        {prop.name}
      </span>{' '}
      with some lesson's.
    </div>
  );
}
