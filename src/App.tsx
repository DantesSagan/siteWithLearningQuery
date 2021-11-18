import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

import Navbar from './Components/Pages/Navbar';
import Loader from './Components/fallback/loader';

import * as ROUTES from './Components/routes/routes';
import './styles/App.css';
// import { QueryErrorResetBoundary } from 'react-query';

const MainProps = lazy(() => import('./Components/Pages/Main'));
const jQuerySetUp = lazy(() => import('./Components/jQuery/SetUp/SetUp'));

// const fallbackOnQuery = () => {
//   <QueryErrorResetBoundary>
//     <ErrorBoundary
//    fallbackRender={}
//     >
//     </ErrorBoundary>
//     }}
//   </QueryErrorResetBoundary>;
// };

export default function App() {
  return (
    <div className='text-center'>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={ROUTES.Main} component={MainProps} />
            <Route path={ROUTES.jQuerySetUp} component={jQuerySetUp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
