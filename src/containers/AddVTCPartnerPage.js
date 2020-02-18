import React from 'react';
import globalStyles from '../styles';
import { Grid, Row, Col } from 'react-bootstrap';
import NavbarHeader from "react-bootstrap/lib/NavbarHeader";

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
      <Row>
        <NavbarHeader/>
      </Row>
      <Row>
          {
            list.map(
              (elem, idx) => {
                return (
                  <Col md={2} key={idx}>
                    <img src={elem} alt={idx} style={{width: "200px", height: "auto"}}/>
                  </Col>
                )
              }
            )
          }
      </Row>
    </Grid>
  );
};

export default AddVTCPartnerPage;
