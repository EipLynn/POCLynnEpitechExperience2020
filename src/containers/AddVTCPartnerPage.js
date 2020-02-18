import React from 'react';
import globalStyles from '../styles';
import { Grid, Row, Col } from 'react-bootstrap';
import NavbarHeader from "react-bootstrap/lib/NavbarHeader";
import '../CSS/button.css';

function importAll(r) {
  return r.keys().map(r);
}

const list = importAll(require.context('../images/vtc', false, /.(png|jpg)$/));

const AddVTCPartnerPage = () => {

  return (
    <Grid className={"container-fluid"}>
      <div>
        <h3 style={globalStyles.navigation}>Application / Ajouter un partenaire</h3>
      </div>
      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <img src={"../images/uber.png"} style={{width:"200px", height: "auto"}}/>
          <p>UBER</p>
          <button className="button">Demander un partenariat</button>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <img src={"../images/heetch.jpg"} style={{width:"200px", height: "200px"}}/>
          <p>HEETCH</p>
          <button className="button">Demander un partenariat</button>
        </div>

    </div>
    </Grid>
  );
};

export default AddVTCPartnerPage;
