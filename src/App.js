import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { authenticationValidator } from './store/actions';
import { Spinner } from './components';
import { guestRoutes, otherRoutes } from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import './assets/css/responsive.css';
import 'react-toastify/dist/ReactToastify.css';
// add css

function App() {
  // const tokenPresent = !!useSelector(state => state.auth.authToken);
  const pathname = window.location.pathname.split('/')[1];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authenticationValidator());
  }, []);
  const redirectHandler = () => {
    const guestRoute = guestRoutes
      .filter(item => item.redirectRoute === undefined)
      .map(item => item.path);
    return !guestRoute.includes(`/${pathname}`) && localStorage.getItem('authToken') == null ? (
      <Redirect restricted to="/" />
    ) : null;
  };

  let mainContent = (
    <>
      {/* {guestRoutes.map(
        route =>
          route.redirectRoute === undefined && (
            <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
              <route.component />
            </Route>
          ),
      )} */}
      <Route path="/" component={lazy(() => import('./views/MainContainer/MainContainer'))} />
      {redirectHandler()}
    </>
  );

  if (pathname === 'coming-soon') {
    mainContent = (
      <>
        {otherRoutes.map(
          route =>
            route.redirectRoute === undefined && (
              <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
                <route.component />
              </Route>
            ),
        )}
      </>
    );
  }
  // if (tokenPresent) {
  //   mainContent = (
  //     <>
  //       <Route path="/" component={lazy(() => import('./views/MainContainer/MainContainer'))} />
  //     </>
  //   );
  // }

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>{mainContent}</Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
