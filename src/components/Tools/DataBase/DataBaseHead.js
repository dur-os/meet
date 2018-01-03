import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
    },
    grow: {
        flex: '1 1 auto',
    },
    button: {
        margin: theme.spacing.unit,
        marginRight: 50,
    },
});

function DataBaseHead(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <div className={classes.grow}/>
            <Link to="/DataBaseTool/Add">
                <Button fab mini color="primary" aria-label="add" className={classes.button}>
                    <AddIcon/>
                </Button>
            </Link>
        </div>
    );
}

DataBaseHead.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataBaseHead);