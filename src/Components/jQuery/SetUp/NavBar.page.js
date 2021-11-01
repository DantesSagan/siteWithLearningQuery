import { Link } from 'react-router-dom';
import * as ROUTESINNTER from '../routesInner/routes';

export default function NavBarJQuery() {
  return (
    <header className="mt-48" id="navbar">
      <nav className='grid grid-cols-1 shadow-inner p-2 m-2 rounded-b-3xl gridCol border-double border-4 border-black'>
        <div
          id='navOne'
          className='col-span-4 button'
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          <div>
            <Link to={ROUTESINNTER.SetUpMain}>Home(jQuery)</Link>
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
                <Link to={ROUTESINNTER.SetUpSuperHeroes}>SuperHeroes</Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpRQSuperHeroes}>RQSuperHeroes</Link>
              </div>
            </div>
          </button>{' '}
        </div>
      </nav>
    </header>
  );
}
