const initialState = {
    'results': {}
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return {
                'results': action.results
            };
        default:
        return state;
    }
};

export default resultsReducer