import * as ROUTES from './Components/routes/routes';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import Loader from './Components/fallback/loader';

import './App.css';


const MainProps = lazy(() => import('./Components/Pages/Main'));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={ROUTES.Main} component={MainProps} />
          <Route path={ROUTES.Query} />
          <Route path='/' />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
