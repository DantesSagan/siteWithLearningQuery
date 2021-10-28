import { MainProps } from '../exportTypes/MainProps';

type PrivateProps = {
  component: React.ComponentType<MainProps>;
};

export default function Main({ component: Component }: PrivateProps) {
  return (
    <div style={{ marginTop: '100px' }}>
      <Component name='jQuery' />
    </div>
  );
}
