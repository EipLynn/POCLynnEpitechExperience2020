import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Divider, Subheader } from 'material-ui';
import {cyan600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

const Tokens = (props) => {

  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan600,
      color: white
    }
  };

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}> La Réserve</Subheader>
        {props.data.map(item =>
          <div key={item.name}>
            <ListItem >Il reste {item.nbr} Tokens pour le VTC: {item.name}</ListItem>
            <Divider inset={true}/>
        </div>)}
      </List>
    </Paper>
  );
};

Tokens.propTypes = {
  data: PropTypes.array
};

export default Tokens;
