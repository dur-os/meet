import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import NumberFormat from 'react-number-format';

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


class NumberFormatCustom extends React.Component {
    render() {
        return (
            <NumberFormat
                {...this.props}
                fixedDecimalScale={true}
                allowNegative={false}
                decimalScale={0}
            />
        );
    }
}

const mapStateToProps = state => ({
    ...state.activeStep
});

const mapDispatchToProps = dispatch => ({});

class StepContextPanel extends React.Component {
    componentWillReceiveProps(nextProps) {
        this.setState({activeStep: nextProps.activeStep})
        this.props.handleActiveNext(this.state[`activeStep${nextProps.activeStep}`]);
    }

    constructor(props) {
        super(props);
        this.state = {
            source: '',
            destination: '',
            dbid: '',
            activeStep: props.activeStep,
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
       const activeStepNum =`activeStep${this.state.activeStep}`;
        this.setState({[activeStepNum]: Boolean(event.target.value)});
        this.props.handleActiveNext(Boolean(event.target.value));
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.contextDiv}>
                    <FormControl name="activeStep0" className={classes.formControl} disabled={this.state.activeStep !== 0}>
                        <InputLabel htmlFor="source-helper">源数据库</InputLabel>
                        <Select value={this.state.source}
                                onChange={this.handleChange}
                                input={<Input name="source" aa={0} id="source-simple"/>}
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
                <div className={classes.contextDiv}>
                    <FormControl className={classes.formControl} disabled={this.state.activeStep !== 1}>
                        <InputLabel htmlFor="destination-helper">目标数据库</InputLabel>
                        <Select value={this.state.destination}
                                onChange={this.handleChange}
                                input={<Input name="destination" id="destination-simple"/>}
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
                <div className={classes.contextDiv}>
                    <FormControl className={classes.formControl} disabled={this.state.activeStep !== 2}>
                        <InputLabel htmlFor="dbid-simple">租户ID</InputLabel>
                        <Input id="dbid-simple" inputComponent={NumberFormatCustom} value={this.state.dbid} name="dbid"
                               onChange={this.handleChange}/>
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StepContextPanel));
