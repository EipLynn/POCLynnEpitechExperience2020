import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const data = {
  menus: [
    { text: 'Page d\'accueil', icon: <Assessment/>, link: '/' },
    { text: 'Mes partenaires VTC', icon: <Web/>, link: '/vtcpartners' },
    { text: 'Acheter des tokens', icon: <GridOn/>, link: '/buytokens' },
    { text: 'Déconnexion', icon: <PermIdentity/>, link: '/' }
  ],
  calendar: {
    events: [
      {name: "Fête de la musique"},
      {name: "Soirée mojito"},
      {name: "Soirée karaoké"}
    ]
  },
  tokens: {
    list: [
      {name: "Heetch", nbr: 10},
      {name: "Uber", nbr: 32},
      {name: "Kolett", nbr: 53},
    ]
  },
};

export default data;
