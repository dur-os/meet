import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import DataBaseHead from "./DataBaseHead"
import DataTable from "./DataTable"

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

class DataPanel extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <DataBaseHead/>
                <DataTable/>
            </Paper>
        );
    }
}

DataPanel.propTypes = {
    classes: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DataPanel));