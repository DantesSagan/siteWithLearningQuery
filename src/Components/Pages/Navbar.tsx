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

        <div className=' p-2 rounded-lg' style={{ display: 'inline-block' }}>
          <button
            className='buttonM dropdown hover:border-red-600'
            style={{ display: 'inline-block', backgroundColor: 'white' }}
          >
            jQuery
            <div className='dropdown-content'>
              <div className='button'>
                <Link to={ROUTES.Query}>jQuery1</Link>
              </div>

              <div className='button'>
                <Link to='/'>Home1</Link>
              </div>
              <div className='button'>
                <Link to='/'>Home2</Link>
              </div>
            </div>
          </button>{' '}
        </div>
      </nav>
    </header>
  );
}
