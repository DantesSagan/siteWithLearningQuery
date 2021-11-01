import { QueryClientProvider, QueryClient } from 'react-query';
import { Switch, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as ROUTESINNTER from '../routesInner/routes';

import Loader from '../../fallback/loader';
import NavBarJQuery from './NavBar.page';

const HomePage = lazy(() => import('../SetUp/Home.page'));
const SuperHeroes = lazy(() => import('../SetUp/SuperHeroes.page'));
const SuperHeroesTwo = lazy(() => import('../SecondSetUp/SuperHeroes.pageTwo'));
const RQSuperHeroes = lazy(() => import('../SetUp/RQSuperHeroes.page'));
const queryClient = new QueryClient();

export default function SetUp() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NavBarJQuery />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={ROUTESINNTER.SetUpMain} component={HomePage} />
            <Route
              path={ROUTESINNTER.SetUpSuperHeroes}
              component={SuperHeroes}
            />
            <Route
              path={ROUTESINNTER.SetUpSuperHeroesTwo}
              component={SuperHeroesTwo}
            />
            <Route
              path={ROUTESINNTER.SetUpRQSuperHeroes}
              component={RQSuperHeroes}
            />
          </Switch>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
