import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, RESET_AUTH } from "./Auth.actinType";

  // Note: Do not update/change the initial state
  export const authInitalState = {
    loading: false,
    data: {
      token: "",
      isAuth: false,
    },
    error: false,
  };
  
  export const authReducer = (state = authInitalState, { type, payload }) => {
    switch (type) {
      case AUTH_SIGN_IN_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case AUTH_SIGN_IN_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case AUTH_SIGN_IN_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: {
            token: payload,
            isAuth: true,
          },
        };
      }
      case AUTH_SIGN_OUT: {
        return {
          ...state,
          loading: false,
          data: {
            token: "",
            isAuth: false,
          },
        };
      }
      case RESET_AUTH:{
        return{
          authInitalState
        }
      }
  
      default: {
        return state;
      }
    }
  };