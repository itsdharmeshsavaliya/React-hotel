const initialState = 'Book Now';
const FlightBook = (state = initialState, action) => {
    switch (action.type.id) {
        case 'BOOK_FLIGHT': return state = 'Your Flight is Booked'
        default: return state;
    }
}

export default FlightBook;