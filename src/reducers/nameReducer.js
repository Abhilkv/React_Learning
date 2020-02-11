const nameReducer = (state={}, {type, payload}) => {
    if (type === 'UPDATE_NAME') {
        return {name: payload}
    }
    return {name: 'Abhil'}
}

export default nameReducer;