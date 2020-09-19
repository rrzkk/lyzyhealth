import * as ActionTypes from './ActionTypes';
import {  compare } from '../components/md5.js';

export const login = (state = {
    verified:false
}, action) => {
    switch (action.type) {
        case ActionTypes.VERIFYPASSWORD:
            console.log(action.payload[0]+'and'+action.payload[1]);
            return { verified:compare(action.payload[1],action.payload[0]) };
        default:
            return state;
    }
};