import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';

import VTCPartnersPage from './containers/VTCPartnersPage';
import AddVTCPartnerPage from './containers/AddVTCPartnerPage';
import VTCInfoPage from './containers/VTCInfoPage';
import BuyTokensPage from './containers/BuyTokensPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>

      <Route path="vtcpartners" component={VTCPartnersPage}/>
      <Route path="addpartner" component={AddVTCPartnerPage}/>
      <Route path="vtcinfo" component={VTCInfoPage}/>
      <Route path="buytokens" component={BuyTokensPage}/>

      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
