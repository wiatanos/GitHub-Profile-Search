import { SET_PROFILES } from '../actions/actionTypes';

const initialState = {
    'profiles': {}
};

const profileReducer = (state = initialState, action) => {
    console.log(action.type == 'SET_PROFILES')
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