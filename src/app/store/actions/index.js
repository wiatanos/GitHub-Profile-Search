import { SET_PROFILES, SET_RESULTS } from './actionTypes';

export const setProfiles = value => ({
    type: 'SET_PROFILES',
    profiles: value
});

export const setResults = value => ({
    type: 'SET_RESULTS',
    results: value
});