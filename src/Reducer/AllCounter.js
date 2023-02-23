const initialState = 1;

const AllCounter = (state = initialState, action) => {
    if (action.type === 'DECREMENT') {
        if (state < 1) {
            state = 1
        }
        return state - 1
    }
    if (action.type === 'INCREMENT') {
        return state + 1
    }
    return state;
}


export default AllCounter;