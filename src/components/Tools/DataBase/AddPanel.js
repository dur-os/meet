import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Stepper, {Step, StepLabel} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import StepContextPanel from "./StepContextPanel"

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['请选择源数据库', '请选择目标数据库', '请输入要同步的租户信息'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Uknown stepIndex';
    }
}

const mapStateToProps = state => ({
    ...state.dataBase
});

const mapDispatchToProps = dispatch => ({});

class AddPanel extends React.Component {
    state = {
        activeStep: 0,
    };
    handleNext = () => {
        const {activeStep} = this.state;
        const stepsMax = getSteps().length;
        this.setState({
            activeStep: activeStep + 1 < stepsMax ? activeStep + 1 : stepsMax - 1,
        });
    };

    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1 < 0 ? 0 : activeStep - 1,
        });
    };

    render() {
        const {classes} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <Paper className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    <div align={'center'}>
                        <div className={classes.instructions}><StepContextPanel activeStep={activeStep}/></div>
                        <div>
                            <Button raised color="accent"
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.backButton}
                            >
                                上一步
                            </Button>
                            <Button raised color="primary" onClick={this.handleNext}>
                                {activeStep === steps.length - 1 ? '提交' : '下一步'}
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
        );
    }
}

AddPanel.propTypes = {
    classes: PropTypes.object,
};




export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddPanel));