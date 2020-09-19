import * as ActionTypes from './ActionTypes';

export const userchallenge = (state = {
    userchallenge:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADDUSERCHALLENGE:
           
            return { userchallenge:action.payload };
        default:
            return state;
    }
};