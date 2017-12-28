import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    ...state.dataBase
});

const mapDispatchToProps = dispatch => ({
});

class DataBase extends React.Component {
    render() {
        return (
            <div>DataBase</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataBase);