import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    no_of_cakes: 10,
};


//takes 3 properties - name of slice, initial state and 
const {actions, reducer} = createSlice({
    name: 'cake',
    initialState: INITIAL_STATE,
    reducers: {
        order: (state, action)=>{
            if(action.payload)
                state.no_of_cakes -= action.payload;
            else
                state.no_of_cakes --;
        },
        restock: (state, action)=>{
            if(action.payload)
                state.no_of_cakes += action.payload;
            else
                state.no_of_cakes ++;
        }
    }
});

export const cakeActions = actions;
export const cakeReducer = reducer;
