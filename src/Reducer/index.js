import AllCounter from "./AllCounter";
import MoreData from './MoreData';
import Filter from "./Filter";
import FlightBook from './FlightsBook';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    AllCounter,
    MoreData,
    Filter,
    FlightBook
})

export default rootReducer;

