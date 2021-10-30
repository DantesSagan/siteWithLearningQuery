import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Fallback = () => (
  <FallbackContainer>
    <Loader type='Dots' color='#F8F0FB' height={80} width={80} timeout={3000} />
  </FallbackContainer>
);

export default Fallback;

const FallbackContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0.5turn);
  background: black;
  border-radius: 40px;
`;
