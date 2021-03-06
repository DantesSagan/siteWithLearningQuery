import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Switch, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as ROUTESINNTER from '../routesInner/routes';

import Loader from '../../fallback/loader';
import NavBarJQuery from './NavBar.page';
import ScrollToTop from '../../fallback/scrollTop';
import DynamicParallelPage from '../jQuery/DynamicParallelPage.pageTenTwo';
import QueryDependetQuery from '../jQuery/jQueryDependentQuery.pageEleven';

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
const jQueryIntervalRefetch = lazy(() =>
  import('../jQuery/jQueryIntervalRefetch.pageSix')
);
const jQueryOnClick = lazy(() => import('../jQuery/jQueryOnClick.pageSeven'));
const SetUpjQueryOnSuccessOnError = lazy(() =>
  import('../jQuery/jQueryErrorCallback.pageEight')
);
const RQSuperHeroesTwo = lazy(() => import('../SetUp/RQSuperHeroes.pageTwo'));
const RQSuperHeroesId = lazy(() => import('../jQuery/RQSuperHeroes'));
const ParallelQueries = lazy(() =>
  import('../jQuery/ParallelQueries.pageNine')
);
const InitialQuery = lazy(() => import('../SetUp/RqSuperHeroes.pageThree'));
const RQSuperHeroesIdThree = lazy(() => import('../jQuery/jQueryInitialData'));
const PaginatedQuery = lazy(() =>
  import('../jQuery/jQueryPaginatedQuery.pageTwelve')
);
const InfiniteQueries = lazy(() =>
  import('../jQuery/jQueryInfiniteQueries.pageThirteen')
);
const RQSuperHeroesMutations = lazy(() =>
  import('../SetUp/RQSuperHeroes.pageFour')
);
const RQSuperHeroesMutationsFourId = lazy(() =>
  import('../jQuery/jQueryMutations')
);
const RQSuperHeroesInvalidation = lazy(() =>
  import('../SetUp/RQSuperHeroes.pageFive')
);
const RQSuperHeroesMutationsFiveId = lazy(() =>
  import('../jQuery/jQueryInvalidation')
);
const RQSuperHeroesMutationResponse = lazy(() =>
  import('../SetUp/RQSuperHeroes.pageSix')
);
const RQSuperHeroesOptimisticMutation = lazy(() =>
  import('../SetUp/RQSuperHeroes.pageSeven')
);
const RQSuperHeroesAxiosInterceptor = lazy(() =>
  import('./RQSuper-heroes.pageEight')
);
const queryClient = new QueryClient();

export default function SetUp() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NavBarJQuery />
        <Suspense fallback={<Loader />}>
          <Switch>
            {/* Main page */}
            <Route path={ROUTESINNTER.SetUpMain} component={HomePage} />
            {/* SetUpSuperHeroes */}
            <Route
              path={ROUTESINNTER.SetUpSuperHeroes}
              component={SuperHeroes}
            />
            {/* SetUpRQSuperHeroes */}
            <Route
              path={ROUTESINNTER.SetUpRQSuperHeroes}
              component={RQSuperHeroes}
            />
            {/* SetUpHandlingReactError */}
            <Route
              path={ROUTESINNTER.SetUpHandlingReactError}
              component={HandlingReactError}
            />
            {/* SetUpHandlingQueryError */}
            <Route
              path={ROUTESINNTER.SetUpHandlingQueryError}
              component={HandlingQueryError}
            />
            {/* SetUpjQueryDevTools */}
            <Route
              path={ROUTESINNTER.SetUpjQueryDevTools}
              component={jQueryDevTools}
            />
            {/* SetUpjQueryRefetchDefaults */}
            <Route
              path={ROUTESINNTER.SetUpjQueryRefetchDefaults}
              component={jQueryRefetchDefautls}
            />
            {/* SetUpjQueryIntervalRefetch */}
            <Route
              path={ROUTESINNTER.SetUpjQueryIntervalRefetch}
              component={jQueryIntervalRefetch}
            />
            {/* SetUpjQueryOnClick */}
            <Route
              path={ROUTESINNTER.SetUpjQueryOnClick}
              component={jQueryOnClick}
            />
            {/* SetUpjQueryOnSuccessOnError */}
            <Route
              path={ROUTESINNTER.SetUpjQueryOnSuccessOnError}
              component={SetUpjQueryOnSuccessOnError}
            />
            {/* RQSuperHeroesTwo */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesTwo}
              component={RQSuperHeroesTwo}
            />
            {/* RQSuperHeroesTwoid */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesTwoid}
              component={RQSuperHeroesId}
            />
            {/* SetUpParallelQuries */}
            <Route
              path={ROUTESINNTER.SetUpParallelQueries}
              component={ParallelQueries}
            />
            {/* SetUpDynamicQuries */}
            <Route path={ROUTESINNTER.SetUpDynamicParallelQueries}>
              <DynamicParallelPage heroIds={[1, 3]} />
            </Route>
            {/* SetUpDependetQuery */}
            <Route path={ROUTESINNTER.SetUpDependetQuery}>
              <QueryDependetQuery
                email='DantesSagan@example.com'
                channels='codevolution'
              />
            </Route>
            {/* useSuperHeroesThree */}
            <Route
              path={ROUTESINNTER.SetUpInitialQueryData}
              component={InitialQuery}
            />
            {/* useSuperHeroesThreeId */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesThreeid}
              component={RQSuperHeroesIdThree}
            />
            {/* usePaginatedQueries */}
            <Route
              path={ROUTESINNTER.SetUpPaginatedQueries}
              component={PaginatedQuery}
            />
            <Route
              path={ROUTESINNTER.SetUpInfiniteQueries}
              component={InfiniteQueries}
            />
            {/* RQSuperHeroesMutations */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesMutations}
              component={RQSuperHeroesMutations}
            />
            {/* useSuperHeroesFourId */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesFourid}
              component={RQSuperHeroesMutationsFourId}
            />
            {/* RQSuperHeroesInvalidation */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesInvalidation}
              component={RQSuperHeroesInvalidation}
            />
            {/* useSuperHeroesFiveId */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesFiveid}
              component={RQSuperHeroesMutationsFiveId}
            />
            {/* RQSuperHeroesMutationsResponse */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesMutationResponse}
              component={RQSuperHeroesMutationResponse}
            />
            {/* RQSuperHeroesOptimisticMutations */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesOptimisticMutation}
              component={RQSuperHeroesOptimisticMutation}
            />
            {/* RQSuperHeroesAxiosInterceptor */}
            <Route
              path={ROUTESINNTER.SetRQSuperHeroesAxiosInterceptor}
              component={RQSuperHeroesAxiosInterceptor}
            />
          </Switch>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        <ScrollToTop />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
