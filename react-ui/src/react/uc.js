import * as ActionTypes from './ActionTypes';

export const uc = (state = {
    uc:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADDALLUC:
           
            return { uc:action.payload };
        default:
            return state;
    }
};