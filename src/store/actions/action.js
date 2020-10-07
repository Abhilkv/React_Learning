export const loading = () => {
    return { 
        type: "LOADING" 
    }
}

export const ageUpAsync= () => {
    return { type: "AGE_UP", value: 1 };
}

export const ageUp = (value) => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(ageUpAsync(value))
        }, [3000])
    }
}

export const storeToken = (token, callback) => async dispatch => {
    await Storage._storeUserTokenAsync(token)
    dispatch({ type: LOGIN_SUCCESS, payload: token });
    callback();
}

// on storeTokenthe dispatch will happen only when the storing token is finished
// similar to using yield in saga 

export const ageDown = () => {
    return { type: "AGE_DOWN", value: 1 }
}



// here the ageUp is made Async function with thunk when we click ageUp button the action will
//  dispatch only after 3 seconds

// but ageDown is sync when ever ageDown is clicked it will dispatch the action