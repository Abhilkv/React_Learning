const initialState = {
    age:20,
    loading: false
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'LOADING':
            newState.loading = true;
            break;
        case 'AGE_UP': 
            newState.age += action.value;
            newState.loading = false;
            break;
        
        case 'AGE_DOWN': 
            newState.age -= action.value;
            break;
    }
    return newState;
};

export default reducer;