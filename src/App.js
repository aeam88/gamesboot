import React from 'react';

import GlobalStyle from './components/GlobalStyle';

import {Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Footer from './components/Footer';

function App() {

  const [isSearching, setIsSearching] = React.useState(false);

  return (
    <div>
      <GlobalStyle />
      <Header isSearching={isSearching} setIsSearching={setIsSearching} />
      <Switch>
        <Route path="/" exact>
          <Home isSearching={isSearching} setIsSearching={setIsSearching} />
        </Route>
        <Route path="/game/:id">
          <Detalle isSearching={isSearching} setIsSearching={setIsSearching} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
