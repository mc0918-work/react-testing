import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';

//middleware
import reduxPromise from 'redux-promise'

//create and export a component that creates provider tag and redux store
export default ({ children, initialState = {} }) => { //destructured props means we don't need to specify intialState
                                                      //if a component has no initial state it uses default empty object
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise))
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}