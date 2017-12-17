import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppFrame from './AppFrame.js';
const theme = createMuiTheme();

class AppWrapper extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <AppFrame>{children}</AppFrame>
            </MuiThemeProvider>
        );
    }
}

export default connect(state => ({
    uiTheme: state.theme,
}))(AppWrapper);