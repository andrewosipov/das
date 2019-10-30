import React, { useReducer } from 'react';
import { AppContext, reducer, initialState } from '../context';
import AppProvider from '../providers/App';
import Filter from '../components/Filter';

function AppContainer(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>

            <AppContext.Provider value={{ state, dispatch }}>
                <Filter />
                <AppProvider state={state} dispatch={dispatch} />
            </AppContext.Provider>
        </div>
    );
}

export default AppContainer;
