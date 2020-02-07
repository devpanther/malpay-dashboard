import React from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import './SignIn.css';
import IntlMessages from 'util/IntlMessages';
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from 'actions/Auth';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 3000);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const {
      name,
      email,
      password
    } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="body" style={{ margin: "140px auto" }}>
        <div className="container a right-panel-active" id="container" >
          <div className="form-container a sign-up-container">
            <form className="a" action="#">
              <h1 className="a">Create Account</h1>
              <div className="social-container a">
                {/* <a href="#" className="social"><i className="fab fa-facebook-f" /></a> */}
                <a className="a" href="#" onClick={() => {
                  this.props.showAuthLoader();
                  this.props.userGoogleSignIn();

                }} className="social"><i className="fab fa-google-plus-g" /></a>
                {/* <a href="#" className="social"><i className="fab fa-linkedin-in" /></a> */}
              </div>
              <span className="a">or use your email for registration</span>
              <input className="a" label="Name"
                onChange={(event) => this.setState({ name: event.target.value })}
                defaultValue={name} type="text" placeholder="Name" />
              <input className="a" onChange={(event) => this.setState({ email: event.target.value })}
                label={<IntlMessages id="appModule.email" />}
                defaultValue={email} type="email" placeholder="Email" />
              <input className="a" onChange={(event) => this.setState({ password: event.target.value })}
                label={<IntlMessages id="appModule.password" />}
                defaultValue={password} type="password" placeholder="Password" />
              <button className="a" onClick={() => {
                this.props.showAuthLoader();
                this.props.userSignUp({ email, password });
              }}>Sign Up</button>
            </form>
          </div>


          <div className="overlay-container a">
            <div className="overlay a">
              <div className="overlay-panel a overlay-left">
                <Link className="logo-lg" to="/" title="Jambo">
                  <img src={require("assets/images/logo.png")} alt="jambo" title="jambo" />                </Link>
                <p>To keep connected with us please login with your personal info</p>
                <Link to="/signin">
                  <button className="ghost a" id="signIn">Sign In</button>
                </Link>
              </div>
              <div className="overlay-panel a overlay-right">
                <Link className="logo-lg" to="/" title="Jambo">
                  <img src={require("assets/images/logo.png")} alt="jambo" title="jambo" />                </Link>d
                <p>Enter your personal details and start journey with us</p>
                <Link to="/signup">
                  <button className="ghost a" id="signUp">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {
          loader &&
          <div className="loader-view">
            <CircularProgress />
          </div>
        }
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
  userSignUp,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(SignUp);
