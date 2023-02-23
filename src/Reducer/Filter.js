const initialData = {
    list: []
}
const Filter = (state = initialData, action) => {
    switch (action.type) {
        case 'CHANGE_HOTEL': const newHotel = state.list.filter((data) => data.change === action.payload.change)
            return {
                list: newHotel
            }
        default: return state;
    }
}

export default Filter;