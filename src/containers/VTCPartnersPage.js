import React from 'react';
import globalStyles from '../styles';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../CSS/button.css';

const VTCPartnersPage = () => {

  return (
    <Grid bsClass="container-fluid fade-in">
      <h3 className={'text-center'} style={globalStyles.navigation}>Application / Mes VTC partenaires</h3>

      <Row style={{ marginBottom: "50px", padding: "20px" }}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <span style={{"fontSize": "100px"}}>Mes partenaires</span>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={4} lg={4}>
          <a href={'/vtcinfo'}>
          <img src={"../images/uber.png"} alt={"Uber logo"}
               style={{width: "700px", height: "auto"}}/>
          </a>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4}/>

        <Col xs={12} sm={12} md={4} lg={4}>
          <a href={'/vtcinfo'}>
          <img src={"../images/heetch.jpg"} alt={"Heetch logo"}
               style={{width: "400px", height: "auto"}}/>
          </a>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <a className="button" href={'/addpartner'}>Ajouter un partenaire</a>
        </Col>
      </Row>

    </Grid>
  );
};

export default VTCPartnersPage;
