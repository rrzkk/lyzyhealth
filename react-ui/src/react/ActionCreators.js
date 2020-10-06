import * as ActionTypes from './ActionTypes';
import { baseUrl } from './baseUrl';

import { hash} from '../components/md5.js';








//fetch random challenge


export const challengeFailed = (errmess) => ({
  type: ActionTypes.FETCH_CHALLENGE_FAILED,
  payload: errmess
});



export const fetchAllChallenges = () => (dispatch) => {

  return fetch(baseUrl + 'api/allchallenge')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(challenge => dispatch(addAllChallenge(challenge)))
    .catch(error => dispatch(challengeFailed(error.message)));
};
export const addAllChallenge = (challenge) => ({
  type: ActionTypes.FETCH_ALL_CHALLENGES,
  payload: challenge
});

export const fetchNewChallenges = () => (dispatch) => {

  return fetch(baseUrl + 'api/newchallenges')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(challenge => dispatch(fetchNewChallenges(challenge)))
    .catch(error => dispatch(challengeFailed(error.message)));
};
export const addNewChallenges = (challenge) => ({
  type: ActionTypes.FETCH_NEW_CHALLENGES,
  payload: challenge
});


//fetch information
export const fetchInformation = () => (dispatch) => {
  return fetch(baseUrl + 'api/information')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(information => dispatch(addInformation(information)))
    .catch(error => dispatch(informationFailed(error.message)));
};

export const informationFailed = (errmess) => ({
  type: ActionTypes.FETCH_INFORMATION_FAILED,
  payload: errmess
});

export const addInformation = (information) => ({
  type: ActionTypes.FETCH_INFORMATION,
  payload: information
});

/* 
const testpass=hash('password');

function test(){
    if(compare('passwrd',testpass)){
    return(<h>true</h>);}
    else return(<h>false</h>)
}
*/

export const createUser = (username, password) => (dispatch) => {

  const userpass={username:username, password:hash(password)};
  return fetch(baseUrl + 'api/createuser', {
    method: "POST",
    body: JSON.stringify(userpass),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
   
   
    .catch(error => { console.log('create user', error.message); alert('User cannot be created\nError: ' + error.message); });

};



export const verifyUser = (username, password) => (dispatch) => {
  return fetch(baseUrl + `api/verifyuser?username=${username}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(response => {
      if(response.length!=0){
      const twoPass=[response[0].password, password];
      dispatch(verifyPassword(twoPass))}
      else{
        var error = new Error('Error ' + ': No user' );
        throw error;
      }
    }
    )
    .then(()=>{dispatch(addUser(username))})
    .catch(error => { console.log('verifyuser', error.message); alert('User cannot be verified\nError: ' + error.message); });
};

export const verifyPassword=(twoPass)=>({
  type:ActionTypes.VERIFYPASSWORD,
  payload:twoPass
})

export const verifyRepeat=(username,password) => (dispatch) => {
  return fetch(baseUrl + `api/verifyuser?username=${username}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(res => {dispatch(addRepeat(res));return res;})
    .then(res=>{
      if(res.length===0){
        dispatch(createUser(username,password))
      }
      else{alert('repeated user');throw Error('repeated user')}
    })
    .then(() => {
      dispatch(verifyPassword('',''))}
    )
    .then(()=>{dispatch(addUser(username))})
    .catch(error => { console.log('verifyrepeat', error.message); alert('User repeated failed\nError: ' + error.message); });
};
export const addRepeat=(res)=>({
  type:ActionTypes.VERIFYREPEAT,
  payload:res
});

export const addUser=(username)=>(
  {
    type:ActionTypes.ADDUSERNAME,
    payload:username
  }
);


export const postChallenge = (username) => (dispatch) => {
  const date = new Date().toISOString();
  const userChallenge={username:username, datetime:date};
  return fetch(baseUrl + 'api/userchallenge', {
    method: "POST",
    body: JSON.stringify(userChallenge),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .catch(error => { console.log('create user', error.message); alert('User cannot be created\nError: ' + error.message); });
};

export const getUserChallenge=(username) => (dispatch) => {
  return fetch(baseUrl + `api/getuserchallenge?username=${username}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(res => {dispatch(addUserChallenge(res))})
    .catch(error => { console.log('getuserchallenge', error.message); alert('get user challenge failed\nError: ' + error.message); });
};
export const addUserChallenge=(res)=>({
  type:ActionTypes.ADDUSERCHALLENGE,
  payload:res
});
export const getAllUC=() => (dispatch) => {
  return fetch(baseUrl + 'api/getalluc')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(response=>{dispatch(addAllUC(response))})
    .catch(error => { console.log('getalluc', error.message); });
};
export const addAllUC=(res)=>({
  type:ActionTypes.ADDALLUC,
  payload:res
})



