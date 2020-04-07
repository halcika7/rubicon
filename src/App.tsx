import Footer from 'components/footer/footer';
import Nav from 'components/navbar/navBar';
import Details from 'containers/Details/Details';
import Home from 'containers/Home/Home';
import React, { FC, memo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

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
            <Home
              text={searchedText}
              onTextChange={setSearchedText}
              tab={selectedTab}
              onTabChange={setSelectedTab}
            />
          )}
        />
        <Route path="/details/:type/:id" component={Details} />
      </Switch>

      <Footer />
    </>
  );
};

export default memo(App);
