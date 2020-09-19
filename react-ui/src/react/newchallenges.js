import * as ActionTypes from './ActionTypes';

export const newchallenges = (state = {
    isLoading: true,
    errMess: null,
    newchallenges: []
}, action) => {
    switch (action.type) {

        case ActionTypes.FETCH_NEW_CHALLENGES:
            return { ...state, isLoading: false, errMess: null, newchallenges: action.payload };

        case ActionTypes.FETCH_CHALLENGE_FAILED:
            return { ...state, isLoading: true, errMess: action.payload };

        default:
            return state;
    }

}; 
