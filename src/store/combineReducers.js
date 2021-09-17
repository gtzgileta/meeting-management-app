import { combineReducers } from 'redux';
import { reducer as Meeting } from './meeting';
import { reducer as Auth } from './auth';

export default combineReducers({
    Meeting,
    Auth,
});
