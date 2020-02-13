import React from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import './SignIn.css';
import IntlMessages from 'util/IntlMessages';
import Logo from './img/App-Logo-Transparent-white.png';

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
      firstpassword: '',
      password: '',
      phone: ''
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
            nextSlide(parent, nextForm);
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
      password,
      firstpassword,
      phone
    } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div>
        <div className="logo">
          <a href="#"><img src={Logo} alt="" /></a>
        </div>
        <form>
          <div className="field-name">
            <i className="fas fa-user" />
            <input type="text" onChange={(event) => this.setState({ name: event.target.value })}
              defaultValue={name} required placeholder="Name" />
            <i className="fas fa-arrow-down" />
          </div>
          <div className="field-email innactive">
            <i className="fas fa-envelope" />
            <input type="text" onChange={(event) => this.setState({ phone: event.target.value })}
              label={<IntlMessages id="appModule.phone" />}
              defaultValue={phone} required placeholder="Phone Number" />
            <i className="fas fa-arrow-down" />
          </div>
          <div className="field-email innactive">
            <i className="fas fa-envelope" />
            <input type="email" onChange={(event) => this.setState({ email: event.target.value })}
              label={<IntlMessages id="appModule.email" />}
              defaultValue={email} required placeholder="Email Address" />
            <i className="fas fa-arrow-down" />
          </div>
          <div className="field-password innactive">
            <i className="fas fa-key" />
            <input type="password" onChange={(event) => this.setState({ firstpassword: event.target.value })}
              label={<IntlMessages id="appModule.password" />}
              defaultValue={firstpassword} required placeholder="Password" id="txtPassword" />
            <i className="fas fa-arrow-down" />
          </div>
          <div className="field-password innactive">
            <i className="fas fa-key" />
            <input type="password" placeholder="Confirm Password" onChange={(event) => this.setState({ password: event.target.value })}
              label={<IntlMessages id="appModule.password" />}
              defaultValue={password} required id="txtComfirmPassword" />
            <i className="fas fa-arrow-down" />
          </div>
          <div className="field-finish innactive">
            <i className="fas fa-heart" />
            <p>Thank you. Check your email for confirmation.</p>
            <i className="fas fa-heart" />
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
