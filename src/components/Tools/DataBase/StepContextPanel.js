import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';

const styles = theme => ({
    root: {
        width: '100%', display: 'flex'
    },
    contextDiv: {
        flex: '1 1 auto',
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

const mapStateToProps = state => ({
    ...state.activeStep
});

const mapDispatchToProps = dispatch => ({});

class StepContextPanel extends React.Component {
    componentWillReceiveProps(nextProps) {
        this.setState({activeStep: nextProps.activeStep})
        console.log("log:", nextProps)
    }

    state = {
        source: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {classes} = this.props;
        console.log("log:", this.state)
        return (
            <div className={classes.root}>
                <div className={classes.contextDiv}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-helper">Age</InputLabel>
                        <Select value={this.state.source}
                                onChange={this.handleChange}
                                input={<Input name="source" id="age-simple"/>}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.contextDiv}>2</div>
                <div className={classes.contextDiv}>2</div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StepContextPanel));
