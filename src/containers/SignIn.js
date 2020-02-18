import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import './SignIn.css';
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from 'actions/Auth';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'godstimeoobasi@gmail.com',
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
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const {
      email,
      password
    } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="body" style={{ margin: "140px auto" }}>
        <div className="container a" id="container">

          <div className="form-container a sign-in-container">
            <form className="a" action="#">
              <h1 className="a">Sign in</h1>
              <div className="social-container a">
                {/* <a href="#" className="social"><i className="fab fa-facebook-f" /></a> */}
                <a href="#" className="social a" onClick={() => {
                  this.props.showAuthLoader();
                  this.props.userGoogleSignIn();
                }}><i className="fab fa-google-plus-g" /></a>
                {/* <a href="#" className="social"><i className="fab fa-linkedin-in" /></a> */}
              </div>
              <span className="a">or use your account</span>

              <input className="a" label={<IntlMessages id="appModule.email" />} onChange={(event) => this.setState({ password: event.target.value })} defaultValue={email} type="email" placeholder="Email" />
              <input className="a" label={<IntlMessages id="appModule.password" />} onChange={(event) => this.setState({ password: event.target.value })} defaultValue={password} type="password" placeholder="Password" />
              <a className="a" href="#">Forgot your password?</a>
              <button className="a" onClick={() => {
                this.props.showAuthLoader();
                this.props.userSignIn({ email, password });
              }}>
                Sign In</button>
            </form>
          </div>
          <div className="overlay-container a">
            <div className="overlay a">
              <div className="overlay-panel a overlay-left">
                <Link className="logo-lg" to="/" title="Jambo">
                  <img src={require("assets/images/logo.png")} alt="jambo" title="jambo" />
                </Link>
                <p>To keep connected with us please login with your personal info</p>
                <Link to="/signin">
                  <button className="ghost a" id="signIn">Sign In</button>
                </Link>
              </div>
              <div className="overlay-panel a overlay-right">
                <Link className="logo-lg" to="/" title="Jambo">
                  <img src={require("assets/images/logo.png")} alt="jambo" title="jambo" />                </Link>
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
      // <div
      //   className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      //   <div className="app-login-main-content">

      //     <div className="app-logo-content d-flex align-items-center justify-content-center">
      //       <Link className="logo-lg" to="/" title="Jambo">
      //         <img src={require("assets/images/logo.png")} alt="jambo" title="jambo" />
      //       </Link>
      //     </div>

      //     <div className="app-login-content">
      //       <div className="app-login-header mb-4">
      //         <h1><IntlMessages id="appModule.email" /></h1>
      //       </div>

      //       <div className="app-login-form">
      //         <form>
      //           <fieldset>
      //             <TextField
      //               label={<IntlMessages id="appModule.email" />}
      //               fullWidth
      //               onChange={(event) => this.setState({ email: event.target.value })}
      //               defaultValue={email}
      //               margin="normal"
      //               className="mt-1 my-sm-3"
      //             />
      //             <TextField
      //               type="password"
      //               label={<IntlMessages id="appModule.password" />}
      //               fullWidth
      //               onChange={(event) => this.setState({ password: event.target.value })}
      //               defaultValue={password}
      //               margin="normal"
      //               className="mt-1 my-sm-3"
      //             />

      //             <div className="mb-3 d-flex align-items-center justify-content-between">
      //               <Button onClick={() => {
      //                 this.props.showAuthLoader();
      //                 this.props.userSignIn({ email, password });
      //               }} variant="contained" color="primary">
      //                 <IntlMessages id="appModule.signIn" />
      //               </Button>

      //               <Link to="/signup">
      //                 <IntlMessages id="signIn.signUp" />
      //               </Link>
      //             </div>

      //             <div className="app-social-block my-1 my-sm-3">
      //               <IntlMessages
      //                 id="signIn.connectWith" />
      //               <ul className="social-link">
      //                 <li>
      //                   <IconButton className="icon"
      //                     onClick={() => {
      //                       this.props.showAuthLoader();
      //                       this.props.userFacebookSignIn();
      //                     }}>
      //                     <i className="zmdi zmdi-facebook" />
      //                   </IconButton>
      //                 </li>

      //                 <li>
      //                   <IconButton className="icon"
      //                     onClick={() => {
      //                       this.props.showAuthLoader();
      //                       this.props.userTwitterSignIn();
      //                     }}>
      //                     <i className="zmdi zmdi-twitter" />
      //                   </IconButton>
      //                 </li>

      //                 <li>
      //                   <IconButton className="icon"
      //                     onClick={() => {
      //                       this.props.showAuthLoader();
      //                       this.props.userGoogleSignIn();

      //                     }}>
      //                     <i className="zmdi zmdi-google-plus" />
      //                   </IconButton>
      //                 </li>

      //                 <li>
      //                   <IconButton className="icon"
      //                     onClick={() => {
      //                       this.props.showAuthLoader();
      //                       this.props.userGithubSignIn();
      //                     }}>
      //                     <i className="zmdi zmdi-github" />
      //                   </IconButton>
      //                 </li>
      //               </ul>
      //             </div>

      //           </fieldset>
      //         </form>
      //       </div>
      //     </div>

      //   </div>
      //   {
      //     loader &&
      //     <div className="loader-view">
      //       <CircularProgress />
      //     </div>
      //   }
      //   {showMessage && NotificationManager.error(alertMessage)}
      //   <NotificationContainer />
      // </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(SignIn);