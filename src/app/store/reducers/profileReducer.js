const initialState = {
    'profiles': {}
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILES':
            return {
                'profiles': action.profiles
            };
        default:
        return state;
    }
};

export default profileReducer