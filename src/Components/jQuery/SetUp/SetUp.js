import { Switch, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as ROUTESINNTER from '../routesInner/routes';

import Loader from '../../fallback/loader';
import NavBarJQuery from './NavBar.page';
const HomePage = lazy(() => import('../SetUp/Home.page'));
const SuperHeroes = lazy(() => import('../SetUp/SuperHeroes.page'));
const RQSuperHeroes = lazy(() => import('../SetUp/RQSuperHeroes.page'));

export default function SetUp() {
  return (
    <BrowserRouter>
      <NavBarJQuery />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={ROUTESINNTER.SetUpMain} component={HomePage} />
          <Route path={ROUTESINNTER.SetUpSuperHeroes} component={SuperHeroes} />
          <Route path={ROUTESINNTER.SetUpRQSuperHeroes} component={RQSuperHeroes} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
