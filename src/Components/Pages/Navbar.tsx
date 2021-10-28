import { Link } from 'react-router-dom';
import * as ROUTES from '../routes/routes';

export default function Navbar() {
  return (
    <header>
      <nav id='navbar'>
        <div id='navOne'>
          <div>
            <Link to={ROUTES.Main}>Home</Link>
          </div>
          <div>
            <Link to={ROUTES.Query}>jQuery</Link>
          </div>
        </div>
        <div id='navTwo'>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/'>Home</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
