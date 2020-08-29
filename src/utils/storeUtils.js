import createNextState from 'immer';


export const getInitialState = (name, initState) => {
    if (localStorage.getItem('storeVersion') === '1.0') {
        const savedState = JSON.parse(localStorage.getItem('store'))[name];
        return Object.assign({}, initState, savedState);
    } else {
        return initState;
    }
};


export const createReducer = (initialState, actionsMap) => {
    return (state = initialState, action) => {
        return createNextState(state, (draft) => {
            const caseReducer = actionsMap[action.type];
            if (caseReducer) {
                return caseReducer(draft, action);
            }
            return draft;
        });
    };
};
