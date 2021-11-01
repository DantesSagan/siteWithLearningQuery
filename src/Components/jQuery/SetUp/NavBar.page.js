import { Link } from 'react-router-dom';
import * as ROUTESINNTER from '../routesInner/routes';

export default function NavBarJQuery() {
  return (
    <header className='mt-48' id='navbar'>
      <nav className='grid grid-cols-1 shadow-inner p-2 m-2 rounded-2xl gridCol border-double border-4 border-black'>
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
            jQueryFetchingData
            <div className='dropdown-content'>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpSuperHeroes}>SuperHeroes</Link>
              </div>
              <div className='button'>
                <Link to={ROUTESINNTER.SetUpRQSuperHeroes}>
                  Fetching Data with useQuery
                </Link>
              </div>
            </div>
          </button>{' '}
        </div>
      </nav>
    </header>
  );
}
