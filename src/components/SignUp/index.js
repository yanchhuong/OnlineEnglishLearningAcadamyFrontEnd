import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(RegisterForm);

class SignUpPage extends Component {
    render() {
        return (
            <div>
                <SignUpForm />
            </div>
        )
    }
}

export default SignUpPage;