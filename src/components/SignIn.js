import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import PropTypes from "prop-types";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    const { auth } = this.props;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/app");
    }
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'url(https://www.satalia.com/images/bg-home.png) no-repeat center center fixed',
        backgroundSize: 'cover'
      }}>
        <Paper elevation={1}>
          <Button onClick={this.props.signIn}>
            Sign In to start
            <i style={{marginLeft: 10}} className="fa fa-google social-signin-icon" />
          </Button>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { signIn })(Signin);
