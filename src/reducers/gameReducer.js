const gameReducer = (state={}, {type, payload}) => {
    if (type === 'CHANGE_GAME'){
        return {name: payload}
    }
    return {name: 'Football'}
}

export default gameReducer;