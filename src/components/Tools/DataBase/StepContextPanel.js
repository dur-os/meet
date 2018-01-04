import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {
        width: '100%', display: 'flex'
    },
    contextDiv: {
        flex: '1 1 auto',
        margin: theme.spacing.unit,
    },
});

const mapStateToProps = state => ({
    ...state.activeStep
});

const mapDispatchToProps = dispatch => ({});

class StepContextPanel extends React.Component {
    componentWillReceiveProps(nextProps) {
        this.setState({activeStep:nextProps.activeStep})
        console.log("log:",nextProps)
    }
    render() {
        const {classes} = this.props;
        console.log("log:",this.state)
        return (
            <div className={classes.root}>
                <div className={classes.contextDiv}>1</div>
                <div className={classes.contextDiv}>2</div>
                <div className={classes.contextDiv}>2</div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StepContextPanel));
