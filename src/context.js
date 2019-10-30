import { createContext } from 'react';

export const initialState = {
    name: '*',
    license: '*',
};

export const AppContext = createContext(initialState);

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'setName':
            return {
                ...state,
                name: action.name,
            };
        case 'setLicense':
            return {
                ...state,
                license: action.license,
            };
        default:
            console.log('Unknown action', state, action);
            return state;
    }
};
