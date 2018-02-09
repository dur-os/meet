import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        margin: theme.spacing.unit,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const mapStateToProps = state => ({
    ...state.dataBase
});

const mapDispatchToProps = dispatch => ({});

class DataTable extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>源数据库</TableCell>
                            <TableCell>目标数据库</TableCell>
                            <TableCell>同步目标</TableCell>
                            <TableCell>创建人</TableCell>
                            <TableCell>状态</TableCell>
                        </TableRow>
                    </TableHead>
                    {/*<TableBody>*/}
                        {/*/!*{data.map(n => {*!/*/}
                        {/*/!*return (*!/*/}
                        {/*/!*<TableRow key={n.id}>*!/*/}
                        {/*/!*<TableCell>{n.name}</TableCell>*!/*/}
                        {/*/!*<TableCell>{n.calories}</TableCell>*!/*/}
                        {/*/!*<TableCell>{n.fat}</TableCell>*!/*/}
                        {/*/!*<TableCell>{n.carbs}</TableCell>*!/*/}
                        {/*/!*<TableCell>{n.protein}</TableCell>*!/*/}
                        {/*/!*</TableRow>*!/*/}
                        {/*/!*);*!/*/}
                        {/*/!*})}*!/*/}
                    {/*</TableBody>*/}
                </Table>
            </Paper>
        );
    }
}

DataTable.propTypes = {
    classes: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DataTable));