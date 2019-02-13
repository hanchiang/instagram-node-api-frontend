import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MyLoadable from '../common/MyLoadable';
import NavBar from '../common/NavBar';
import store from '../redux/store';

const Home = MyLoadable({ loader: () => import(/* webpackChunkName: "Home" */'./Home') });
const Feed = MyLoadable({ loader: () => import(/* webpackChunkName: "Feed" */'./Feed') });

export default function Router() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavBar />

        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/feed" component={Feed} />
          </Switch>
        </Provider>
      </div>
    </BrowserRouter>
  );
}
