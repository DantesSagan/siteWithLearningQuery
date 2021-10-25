import { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={}>
        <Switch>
          <Route path='/' />
          <Route path='/' />
          <Route path='/' />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
