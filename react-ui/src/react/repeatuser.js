import * as ActionTypes from './ActionTypes';

export const repeatuser = (state = {
    verified:true
}, action) => {
    switch (action.type) {
        case ActionTypes.VERIFYREPEAT:
           
            return { verified:(action.payload.length!=0) };
        default:
            return state;
    }
};