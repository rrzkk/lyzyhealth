import * as ActionTypes from './ActionTypes';


export const username = (state = {
    username:'first'
}, action) => {
    switch (action.type) {
        case ActionTypes.ADDUSERNAME:
      
            return { username:action.payload };
        default:
            return state;
    }
};