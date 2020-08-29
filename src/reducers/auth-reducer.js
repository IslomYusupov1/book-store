import { ADD_FAVORITE_TERM, REMOVE_FAVORITE_TERM } from '../actions/auth-type';

export default function favoritesReducer(state = [], action) {
    switch (action.type) {
        case ADD_FAVORITE_TERM:
            return [...state, action.payload];
        case REMOVE_FAVORITE_TERM:
            return state.filter((e) => {
                if (e.name !== action.payload.name) {
                    return true;
                }
                return false;
            });
        default:
            return state;
    }
}