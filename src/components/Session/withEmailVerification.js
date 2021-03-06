import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import { Button } from 'antd';
import 'antd/dist/antd.css';

// this is the hoc that verify the email
const needsEmailVerification = authUser =>
    authUser &&
    !authUser.emailVerified &&
    authUser.providerData
        .map(provider => provider.providerId)
        .includes('password');

const withEmailVerification = Component => {
    class WithEmailVerification extends React.Component {

        constructor(props) {
            super(props);
            this.state = { isSent: false };
        }

        onSendEmailVerification = () => {
            this.props.firebase.doSendEmailVerification()
                .then(() => this.setState({ isSent: true }));
        };

        render() {
            return (
                <AuthUserContext.Consumer>
                    {data =>
                        needsEmailVerification(data.authUser) ? (
                            <div>
                                {this.state.isSent ? (
                                    <p>
                                        E-Mail confirmation sent: Check you E-Mails (Spam
                                        folder included) for a confirmation E-Mail.
                                        Refresh this page once you confirmed your E-Mail.
                                    </p>
                                ) : (
                                    <p>
                                        Please verify your email: Check you E-Mails (Spam folder
                                        included) for a confirmation E-Mail or send
                                        another confirmation E-Mail.
                                    </p>
                                )}
                                <Button
                                    onClick={this.onSendEmailVerification}
                                    disabled={this.state.isSent}
                                >
                                    Verify
                                </Button>
                            </div>
                        ) : (
                            <Component {...this.props} />
                        )
                    }
                </AuthUserContext.Consumer>
            );
        }
    }
    return withFirebase(WithEmailVerification);
};


export default withEmailVerification;