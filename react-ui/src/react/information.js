import * as ActionTypes from './ActionTypes';

export const information = (state = { isLoading: true,
    errMess: null,
    information:[]}, action) => {
switch (action.type) {
case ActionTypes.FETCH_INFORMATION:
return {...state, isLoading: false, errMess: null, information: action.payload};

case ActionTypes.FETCH_INFORMATION_FAILED:
return {...state, isLoading: false, errMess: action.payload};
default:
return state;
}
};