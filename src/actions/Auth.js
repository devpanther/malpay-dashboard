import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_FACEBOOK_USER,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GITHUB_USER,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNIN_GOOGLE_USER,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER,
  SIGNIN_TWITTER_USER_SUCCESS,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  ADD_CARD,
  ADD_CARD_SUCCESS,
  SYNC_USER
} from 'constants/ActionTypes';


export const userSignUp = (card) => {
  return {
    type: SIGNUP_USER,
    payload: card
  };
};
export const addCard = (user) => {
  return {
    type: ADD_CARD,
    payload: user
  };
};
export const userSignIn = (user, userData, cardData) => {
  return {
    type: SIGNIN_USER,
    payload: user,
    userData : userData,
    cardData : cardData
  };
};
export const userSignOut = () => {
  return {
    type: SIGNOUT_USER
  };
};
export const userSignUpSuccess = (authUser, userData, cardData) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: authUser,
    userData : userData,
    cardData : cardData
  };
};

export const userSignInSuccess = (authUser, userData, cardData) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser,
    userData : userData,
    cardData : cardData
  }
};

export const addCardSuccess = (authUser) => {
  return {
    type: ADD_CARD_SUCCESS,
    payload: authUser
  }
};

export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS,
  }
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
};


export const userGoogleSignIn = () => {
  return {
    type: SIGNIN_GOOGLE_USER
  };
};
export const userGoogleSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_GOOGLE_USER_SUCCESS,
    payload: authUser
  };
};
export const userFacebookSignIn = () => {
  return {
    type: SIGNIN_FACEBOOK_USER
  };
};
export const userFacebookSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_FACEBOOK_USER_SUCCESS,
    payload: authUser
  };
};
export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};
export const userTwitterSignIn = () => {
  return {
    type: SIGNIN_TWITTER_USER
  };
};
export const userTwitterSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_TWITTER_USER_SUCCESS,
    payload: authUser
  };
};
export const userGithubSignIn = () => {
  return {
    type: SIGNIN_GITHUB_USER
  };
};
export const userGithubSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_GITHUB_USER_SUCCESS,
    payload: authUser
  };
};
export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};

export const syncUser = user => ({
  type: SYNC_USER,
  user
});