import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS } from './auth.action';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_START:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          userId: action.userId,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        case LOGIN:
            return {
              ...state,
              loading: true,
              error: null,
            };
          case LOGIN_SUCCESS:
            return {
              ...state,
              loading: false,
              token: action.idToken,
              userId: action.userId,
              error: null,
            };
          case LOGIN_FAIL:
            return {
              ...state,
              loading: false,
              error: action.error,
            };
          case 'LOGIN_LOGOUT':
            return {
              ...state,
              token: null,
              userId: null
            }
      default:
        return state;
    }
  };
  
  export default reducer;