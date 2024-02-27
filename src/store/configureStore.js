import { configureStore , combineReducers} from "@reduxjs/toolkit";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = configureStore ({
        reducer : {
            expenses: expensesReducer,
        filters: filtersReducer
        }});
    return store;
};


 