import { Link } from 'react-router-dom';
import * as ROUTES from '../routes/routes';

export default function Navbar() {
  return (
    <header>
      <nav className='grid grid-cols-3 shadow-inner p-2 m-2 rounded-t-2xl gridCol border-double border-4 border-black'>
        <div
          id='navOne'
          className='col-span-4 button'
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          <div>
            <Link to={ROUTES.Main}>Home</Link>
          </div>
        </div>

        <div className='col-span-4 p-2 rounded-lg'>
          <div className='button bg-white text-black'>
            <Link to={ROUTES.jQuerySetUp}>jQuerySetup</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
