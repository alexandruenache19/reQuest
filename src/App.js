import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import $ from 'jquery';

class App extends Component {

  componentDidMount() {

  }

  componentWillMount() {

  }

  render() {
    return (
      <BrowserRouter>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {"here we'll have the routes"}
          {/*
            <Route exact path="/" component={SignIn} />
            <Route exact path="/app" component={requireAuth(ProfileComponent)} />
            <Route exact path="/app/vote-selection" component={requireAuth(VoteSelectionComponent)} />
            <Route exact path="/app/voting-overview" component={requireAuth(VotingOverviewComponent)} />
            */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { })(App);
