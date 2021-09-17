import { login } from '../utils/auth-util';

// ACTION TYPES
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_ERROR = "LOGIN_ERROR";

// REDUCER
const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const loginUser = (credentials) => async dispatch => {
  try {
    dispatch({ type: LOGIN_LOADING });
    const res = await fetch('users.json')
                        .then(ans => ans.json());
    // Find user in json file
    const found = res.users.find((user) => user.email === credentials.email && user.password === credentials.password);
    
    if(!found) {
      dispatch({ type: LOGIN_ERROR, payload: `Couldn't find user with these credentials.` });
      return false;
    }

    login(found);
    dispatch({ type: LOGIN_SUCCESS, payload: found });

    return true;
  } catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: 'Error trying to login.' });
    return false;
  }
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    default:
      return state;
  }
}