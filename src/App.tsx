import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import Loader from './Components/fallback/loader';

import * as ROUTES from './Components/routes/routes';
import './styles/App.css';

const MainProps = lazy(() => import('./Components/Pages/Main'));
const jQuerySetUp = lazy(() => import('./Components/jQuery/SetUp/SetUp'));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={ROUTES.Main} component={MainProps} />
          <Route path={ROUTES.jQuerySetUp} component={jQuerySetUp} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
