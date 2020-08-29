import { ADD_FETCHED_DATA } from '../actions/auth-type';

export default function termsReducer(state = [], action) {
    switch (action.type) {

        case ADD_FETCHED_DATA:
            return [ ...action.payload];
        default:
            return state;
    }
}
