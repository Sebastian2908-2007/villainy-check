// import use reducer from react
import { useReducer } from 'react';

import {
    ADD_ADMIN_DATA,
} from './actions';

export const reducer = (state, action) => {
     switch (action.type) {
                 case ADD_ADMIN_DATA:
                     return{
                         ...state,
                        admin: action.admin,
                     };
              
                              

             // if it's none of these actions, do not update state at all and keep things the same! 
             default:
                 return state;
     }
};

// This function, useProductReducer(), will be used to help initialize our global state object and then
// provide us with the functionality for updating that state by automatically running it through
// our custom reducer() function. Think of this as a more in-depth way of using the useState() Hook
export function useProductReducer(initialSate) {
    return useReducer(reducer, initialSate);
}