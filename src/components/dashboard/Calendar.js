import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {cyan600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

const Calendar = (props) => {

    const styles = {
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
                <Subheader style={styles.subheader}>Evènements à venir</Subheader>
                {props.data.map(item =>
                    <div key={item.name}>
                        <ListItem
                            primaryText={item.name}
                        />
                    <Divider inset={true}/>
                </div>)}
            </List>
        </Paper>
    );
};

export default Calendar;