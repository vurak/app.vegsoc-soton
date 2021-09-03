import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Layout from '../layout/Layout';
import Landing from '../landing/Landing';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Landing />
          </Route>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}