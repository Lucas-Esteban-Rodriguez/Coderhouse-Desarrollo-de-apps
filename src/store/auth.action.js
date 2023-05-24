import { URL_LOGIN_API, URL_REGISTER_API } from "../database/Database";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_LOGOUT = 'LOGIN_LOGOUT'

export const registerStart = () => {
  return {
    type: REGISTER_START,
  };
};

export const registerSuccess = (userId) => {
  return {
    type: REGISTER_SUCCESS,
    userId: userId,
  };
};

export const registerFail = (error) => {
  return {
    type: REGISTER_FAIL,
    error: error,
  };
};

export const registerUser = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_START });
    try {
      const response = await fetch(
        URL_REGISTER_API,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: REGISTER_SUCCESS, payload: data });
      } else {
        dispatch({ type: REGISTER_FAIL, payload: data.error });
      }
    } catch (error) {
      dispatch(registerFail(error.message));
    }
  };
};

  const login = () => {
    return {
      type: LOGIN,
    };
  };
  
  const loginSuccess = (token, userId) => {
    return {
      type: LOGIN_SUCCESS,
      token: token,
      userId: userId,
    };
  };
  
  const loginFail = (error) => {
    return {
      type: LOGIN_FAIL,
      error: error,
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGIN_LOGOUT'
    }
  }

  export const loginStart = (email, password) => {
    return async (dispatch) => {
      dispatch(login());
      try {
        const response = await fetch(
          URL_LOGIN_API,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error.message);
        }
        const data = await response.json();
        dispatch(loginSuccess(data.idToken, data.localId));
      } catch (error) {
        console.log(error);
        dispatch(loginFail(error));
      }
    };
  };
  