import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { Route, Switch } from 'react-router-dom';

import AddPanel from "./AddPanel";
import DataPanel from "./DataPanel";

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    }
});

const mapStateToProps = state => ({
    ...state.dataBase
});

const mapDispatchToProps = dispatch => ({});

class DataBase extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <Switch>
                    <Route exact path="/DataBaseTool" component={DataPanel}/>
                    <Route path="/DataBaseTool/Add" component={AddPanel}/>
                </Switch>

            </Paper>
        );
    }
}

DataBase.propTypes = {
    classes: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DataBase));