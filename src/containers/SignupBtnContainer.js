import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from '../contexts/AuthContext';

export default class SignupBtnContainer extends Component {
  state = {
    success: false,
  };
  render() {
    if (this.state.success) {
      return <Redirect to="signup" />;
    } else {
      return (
        <AuthConsumer>
          {({ usersingup }) => (
            <button
              onClick={e => {
                this.setState({ success: true });
              }}
            >
              회원가입
            </button>
          )}
        </AuthConsumer>
      );
    }
  }
}
