const initialData = {
    list: []
}
const MoreData = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_ROOM': const { id, Data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        Data: Data
                    }
                ]
            }
        case 'REMOVE_ROOM': const OldRoomRemove = state.list.filter((Data) => Data.id !== action.id);
            return {
                ...state,
                list: OldRoomRemove
            }

        default: return state;
    }
}

export default MoreData;