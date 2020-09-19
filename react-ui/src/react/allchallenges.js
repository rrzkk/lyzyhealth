import * as ActionTypes from './ActionTypes';

export const allchallenges = (state = {
    isLoading: true,
    errMess: null,
    allchallenges: []
}, action) => {
    switch (action.type) {

        case ActionTypes.FETCH_ALL_CHALLENGES:
            return { ...state, isLoading: false, errMess: null, allchallenges: action.payload };

        case ActionTypes.FETCH_CHALLENGE_FAILED:
            return { ...state, isLoading: true, errMess: action.payload };

        default:
            return state;
    }


}; 