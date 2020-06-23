import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import resultsReducer from './resultsReducer';

export const Reducers = combineReducers({
    setProfiles: profileReducer,
    setResults: resultsReducer
});