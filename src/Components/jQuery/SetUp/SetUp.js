import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Switch, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as ROUTESINNTER from '../routesInner/routes';

import Loader from '../../fallback/loader';
import NavBarJQuery from './NavBar.page';
import ScrollToTop from '../../fallback/scrollTop';

const HomePage = lazy(() => import('../SetUp/Home.page'));
const SuperHeroes = lazy(() => import('../SetUp/SuperHeroes.page'));
const RQSuperHeroes = lazy(() => import('../SetUp/RQSuperHeroes.page'));
const HandlingReactError = lazy(() =>
  import('../SecondSetUp/HandlingReactError.pageThree')
);
const HandlingQueryError = lazy(() =>
  import('../SecondSetUp/HandlingQueryError.pageThree')
);
const jQueryDevTools = lazy(() => import('../jQuery/jQueryDevtools.pageFour'));
const jQueryRefetchDefautls = lazy(() =>
  import('../jQuery/jQueryRefetchDefautls.pageFive')
);
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
              path={ROUTESINNTER.SetUpRQSuperHeroes}
              component={RQSuperHeroes}
            />
            <Route
              path={ROUTESINNTER.SetUpHandlingReactError}
              component={HandlingReactError}
            />
            <Route
              path={ROUTESINNTER.SetUpHandlingQueryError}
              component={HandlingQueryError}
            />
            <Route
              path={ROUTESINNTER.SetUpjQueryDevTools}
              component={jQueryDevTools}
            />
            <Route
              path={ROUTESINNTER.SetUpjQueryRefetchDefaults}
              component={jQueryRefetchDefautls}
            />
          </Switch>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        <ScrollToTop />
      </QueryClientProvider>
    </BrowserRouter>
  );
}