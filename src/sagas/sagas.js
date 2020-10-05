import { put, takeEvery, call } from 'redux-saga/effects'

function* ageUpAsync() {
    yield put({ type: 'AGE_UP_ASYNC', value: 1})
    //const apiResponse = yield call(axios, reqParams);
    // if it is a api call make it in a try catch block, if there s any error yield put the error type
    // on logout if we want to clear the localstorage do it like this yield localstorage.setItem(), i.e every activity should be 
    // done with yield

    // instead of setTimeout saga has its on delay function try to use it if required
}

export  function* watchAgeUp() {
    yield takeEvery('AGE_UP', ageUpAsync)
}


// when AGE_UP is dispatched every action will be mapped to ageUpAsync function
// on that there will be a 3 sec delay after that the function will dispatch
// AGE_UP_ASYNC type , put is called to dispatch a new object where call is used to make an api call
//  when a type is catched at watchAgeUp dont dispatch the same type from correspondiong mapped
// function (i.e ageUpAsync) that will cause infine loop

// THUNK VS SAGA

// Thunk allows Promises" to deal with them, Saga uses Generators.When Promises are just good enough, so is Thunk, when you deal with more 
// complex cases on a regular basis, Saga gives you better tools.
// Redux Thunk is a middleware that lets you call action creators that return a functio
// n instead of an action object. That function receives the store’s dispatch method, which is 
// then used to dispatch regular synchronous actions inside the body of the function 
// once the asynchronous operations have completed. simple, easy to learn and use with 352B volume

// Redux Saga leverages an ES6 feature called Generators, allowing us to write asynchronous code
//  that looks synchronous, and is very easy to test. In the saga, we can test our asynchronous flows 
//  easily and our actions stay pure. complicated, hard to learn and understand

// simple usage of redux-thunk:
// export const asyncApiCall = values => {
//     return dispatch => {
//       return axios.get(url)
//         .then(response =>{
//           dispatch(successHandle(response));
//         })
//         .catch(error => {
//           dispatch(errorHandle(error));
//         });
//       };
//     };
  
  
  
//   // async/await usage of redux-thunk:
//   export const asyncApiCall = values => {
//     return async dispatch => {
//       try {
//         const response = await axios.get(url);
//         dispatch(successHandle(response));
//       }
//       catch(error) {
//         dispatch(errorHandle(error));
//       }
//     };
//   };

// https://stackoverflow.com/questions/50285972/what-is-the-difference-between-redux-thunk-and-redux-saga#:~:text=2%20Answers&text=Both%20Redux%20Thunk%20and%20Redux%20Saga%20take%20care%20of%20dealing,with%20them%2C%20Saga%20uses%20Generators.