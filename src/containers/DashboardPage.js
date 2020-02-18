import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/announcement';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import globalStyles from '../styles';
import Data from '../data';
import Calendar from '../components/dashboard/Calendar';
import Tokens from "../components/dashboard/Tokens";

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Dashboard Lynn</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <a href={'/dashboard'}>
          <InfoBox Icon={Assessment}
                   color={pink600}
                   title="Page d'accueil"
          />
          </a>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
        <a href={'/buytokens'}>
          <InfoBox Icon={ShoppingCart}
                   color={cyan600}
                   title="Achetez des tokens"
          />
        </a>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
        <a href={'/vtcpartners'}>
          <InfoBox Icon={Assessment}
                   color={purple600}
                   title="Partenaires VTC"
          />
        </a>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
        <a href={'/login'}>
          <InfoBox Icon={Face}
                   color={orange600}
                   title="Déconnexion"
          />
        </a>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <Calendar data={Data.calendar.events}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <Tokens data={Data.tokens.list}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
