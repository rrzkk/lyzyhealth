import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



import {information} from './information';
import {allchallenges} from './allchallenges';
import {newchallenges} from './newchallenges';
import {login} from './login';
import {repeatuser} from './repeatuser';
import {userchallenge} from './userchallenge';
import {username} from './username';
import {uc} from './uc'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({

          
            information,
            allchallenges,
            newchallenges,
            login,
            repeatuser,
            userchallenge,
            username,
            uc
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}