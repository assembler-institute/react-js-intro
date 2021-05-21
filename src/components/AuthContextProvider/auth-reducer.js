import { LOGIN, LOGOUT } from "./auth-context-types";

export const authInitialState = {
  user: null,
  isAuthenticated: false,
};

export function authReducer(state, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: {
          ...action.payload,
        },
        isAuthenticated: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
}
