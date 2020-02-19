import React from 'react';
import globalStyles from '../styles';
import '../CSS/button.css';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Achat Tokens</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <img src={"../images/uber.png"} style={{width:"200px", height: "auto"}}/>
          <p>Tokens restants: 32</p>
          <button className="button">Acheter Tokens</button>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <img src={"../images/heetch.jpg"} style={{width:"200px", height: "200px"}}/>
          <p>Tokens restants: 10</p>
          <button className="button">Acheter Tokens</button>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <img src={"../images/kolett.png"} style={{width:"200px", height: "auto"}}/>
          <p>Tokens restants: 53</p>
          <button className="button"> Acheter Tokens</button>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;
