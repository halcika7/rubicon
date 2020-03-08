import React, { useState, FC, memo, lazy, Suspense } from 'react';
import Nav from 'components/navbar/navBar';
import Footer from 'components/footer/footer';
import { Switch, Route, withRouter } from 'react-router-dom';

const Home = lazy(() => import('containers/Home/Home'));
const Details = lazy(() => import('containers/Details/Details'));

/**
 * @returns {ReactElement}
 */
const App: FC = (): JSX.Element => {
  const [searchedText, setSearchedText] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('tv');

  return (
    <>
      <Nav />

      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <Suspense fallback={<div />}>
              <Home
                text={searchedText}
                onTextChange={setSearchedText}
                tab={selectedTab}
                onTabChange={setSelectedTab}
              />
            </Suspense>
          )}
        />
        <Route
          path="/details/:type/:id"
          render={props => (
            <Suspense fallback={<div />}>
              <Details />
            </Suspense>
          )}
        />
      </Switch>

      <Footer />
    </>
  );
};

export default memo(withRouter(App));
