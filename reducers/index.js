import { LOGIN, LOGOUT, ADVANCED } from '../actions/index';

const initialState = {
      userId: undefined,
      firstName: undefined,
      login: false,
      advanced: false,	
}

function rootReducer(state = initialState, action) {
  if (action.type === LOGIN) {
	const newState = JSON.parse(JSON.stringify(state));
	newState.userId = action.userId;
	newState.firstName = action.firstName;
	newState.login = true;
	return newState;
  }
  else if (action.type === LOGOUT) {
	const newState = JSON.parse(JSON.stringify(state));
	newState.userId = undefined;
	newState.firstName = undefined;
	newState.login = false;
	return newState;
  }
  else if (action.type === ADVANCED) {
	newState.advanced = action.advanced;
	return newState;
  }
  return state;
}

export default rootReducer