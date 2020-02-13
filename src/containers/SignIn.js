import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import './SignIn.css';
import Logo from './img/App-Logo-Transparent-white.png';
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
      email: 'demo@example.com',
      password: 'demo#123'
    }
  }

  componentDidMount() {
    function animatedForm() {
      const arrows = document.querySelectorAll(".fa-arrow-down");

      arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
          const input = arrow.previousElementSibling;
          const parent = arrow.parentElement;
          const nextForm = parent.nextElementSibling;

          //Check for validation
          if (input.type === "text" && validateUser(input)) {
            nextSlide(parent, nextForm);
          } else if (input.type === "email" && validateEmail(input)) {
            nextSlide(parent, nextForm);
          } else if (input.type === "password" && validateUser(input)) {
            // nextSlide(parent, nextForm);
          } else {
            parent.style.animation = "shake 0.5s ease";
          }
          //get rid of animation
          parent.addEventListener("animationend", () => {
            parent.style.animation = "";
          })
        })
      })
    }

    function validateUser(user) {
      if (user.value.length < 6) {
        console.log("not enough characters");
      } else {
        return true;
      }
    }

    function validateEmail(email) {
      const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (validation.test(email.value)) {
        error("rgb(87, 189, 130)");
        return true;
      }
    }

    function nextSlide(parent, nextForm) {
      parent.classList.add("innactive");
      parent.classList.remove("active");
      nextForm.classList.add("active");
    }

    function error(color) {
      document.body.style.backgroundColor = color;
    }
    animatedForm();
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
      <div>
        <div className="logo">
          <a href="#"><img src={Logo} alt="" /></a>
        </div>
        <form>
          <div className="field-email active">
            <i className="fas fa-envelope" />
            <input type="email" onChange={(event) => this.setState({ email: event.target.value })}
              defaultValue={email} required />
            <i className="fas fa-arrow-down" />
          </div>
          <div className="field-password innactive">
            <i className="fas fa-key" />
            <input type="password" onChange={(event) => this.setState({ password: event.target.value })}
              defaultValue={password} required />
            <i className="fas fa-arrow-down"
              onClick={() => {
                this.props.showAuthLoader();
                this.props.userSignIn({ email, password });
              }}
            />
          </div>
        </form>
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
