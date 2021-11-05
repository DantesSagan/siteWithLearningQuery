import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroesQuery = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function SetUpjQueryDevTools() {
  const { isLoading, error, isError, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroesQuery,
    { staleTime: 0, refetchOnMount: false, refetchOnWindowFocus: false }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2 className='text-center text-4xl p-4'>Loading...</h2>;
  }
  if (isError) {
    return <h2 className='text-center text-4xl p-4'>{error.message}</h2>;
  }
  const Component = () => {
    const codeString = `
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Switch, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as ROUTESINNTER from '../routesInner/routes';

import Loader from '../../fallback/loader';
import NavBarJQuery from './NavBar.page';

const HomePage = lazy(() => import('../SetUp/Home.page'));
const SuperHeroes = lazy(() => import('../SetUp/SuperHeroes.page'));
const RQSuperHeroes = lazy(() => import('../SetUp/RQSuperHeroes.page'));
const HandlingReactError = lazy(() =>
  import('../SecondSetUp/HandlingReactError.pageThree')
);
const HandlingQueryError = lazy(() =>
  import('../SecondSetUp/HandlingQueryError.pageThree')
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
          </Switch>
        </Suspense>
        // We are adding ReactQueryDevtools for using QueryDevtools in bottom-right position
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </BrowserRouter>
  );
}


  `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  // const xWidth = () => {
  //   window.innerWidth({ screenX: 1200, behavior: 'smooth' });
  // };
  return (
    <>
      <h2 className='text-center text-4xl p-4'>jQueryDevtools</h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work jQuery <br />
        with DevTools and how to write it for better explanation what's going on
        with jQuery hook
        <br />
        Thits is example to improve how to work Errors if smth goes wrong! With
        jQuery!
      </h2>
      <hr className='border-2 border-red-400' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-blue-500 
          hover:bg-blue-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <div className='text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner '>
        There is no corresponding view of work
      </div>
      <Component />
    </>
  );
}
