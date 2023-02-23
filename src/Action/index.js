export const NumberDec = () => {
    return {
        type: 'DECREMENT'
    }
}

export const NumberInc = () => {
    return {
        type: 'INCREMENT'
    }
}

export const HotelRoom = (Data) => {
    return {
        type: 'ADD_ROOM',
        payload: {
            id: new Date(),
            Data: Data
        }
    }
}

export const Remove = (id) => {
    return {
        type: 'REMOVE_ROOM',
        id
    }
}

export const Select = (change) => {
    return {
        type: 'CHANGE_HOTEL',
        payload: {
            change: change,
        }
    }
}

export const FlightButton = (id) => {
    return {
        type: 'BOOK_FLIGHT',
        id
    }
}