import React from 'react';
import globalStyles from '../styles';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-bootstrap';

const DashboardPage = () => {

  return (
    <Grid bsClass="container-fluid fade-in" align="center">
      <h3 style={globalStyles.navigation}>Application / VTC Info</h3>

      <Row style={{ marginBottom: "50px", padding: "20px" }} align="center">
        <Col xs={12} sm={12} md={12} lg={12} align="center">
          <span style={{"font-size": "100px"}}>Uber</span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} align="left">
          <img src={"../images/uber.png"} alt={"Uber logo"} style={{width: "700px", height: "auto"}}/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} align="right">
          <Row align="center">
            <h1 style={{"font-size": "40px", "padding": "30px"}}>Nombre de LAN clients : 132 (6 à Nantes)</h1>
          </Row>

          <Row align="center">
            <h1 style={{"font-size": "40px", "padding": "30px"}}>Prix moyen d'un token -20% : 3€</h1>
          </Row>

        </Col>
      </Row>
    </Grid>
  );
};

export default DashboardPage;
