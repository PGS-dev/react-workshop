import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import CssBaseline from 'material-ui/CssBaseline';
import styled from 'styled-components';

import HTTP from './apiConfig';
import { auth } from './firebase';
import Header from './modules/header';
import { List, SkillsView } from './modules/skills';
import { PrivateRoute, Login } from './modules/auth';

const StyledMain = styled.main`
  padding: 60px 10px 10px;
  margin: 0 auto;
  max-width: 1080px;
  height: 100vh;
`;

class App extends Component {
  state = {
    isAuthFinished: false,
    userEmail: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        auth.currentUser.getIdToken(true).then((token) => {
          HTTP.setDefaults(user.uid, token);
          this.setState({ isAuthFinished: true, userEmail: user.email });
        });
      } else {
        this.setState({ isAuthFinished: true, userEmail: null });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header userEmail={this.state.userEmail} />
        {this.state.isAuthFinished ? (
          <StyledMain>
            <PrivateRoute
              exact
              path="/"
              isAuthenticated={!!this.state.userEmail}
              component={List}
            />
            <PrivateRoute
              exact
              path="/result/:id"
              isAuthenticated={!!this.state.userEmail}
              component={SkillsView}
            />
            <Route
              path="/login"
              render={({ location }) => (
                <Login location={location} isAuthenticated={!!this.state.userEmail} />
              )}
            />
          </StyledMain>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
