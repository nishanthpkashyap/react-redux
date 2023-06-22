import { createSlice } from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeSlice';

const INITIAL_STATE = {
    no_of_icecreams: 20,
}

const {actions, reducer} = createSlice({
    name: 'icecream',
    initialState: INITIAL_STATE,
    reducers: {
        order: (state, action)=>{
            if(action.payload)
                state.no_of_icecreams -= action.payload;
            else
                state.no_of_icecreams --;
        },
        restock: (state, action)=>{
            if(action.payload)
                state.no_of_icecreams += action.payload;
            else
                state.no_of_icecreams ++;
        }
    },
    //create a extraReducer to handle scenario where icecream is given for free if cake is ordered
    /* extraReducers: {
        ['cake/order']: (state, action)=>{
            state.no_of_icecreams -= 1;
        }
    } */
    extraReducers: (builder)=>{
        builder.addCase(cakeActions.order, (state, action)=>{
            state.no_of_icecreams -= 1;
        })
    }
})

export const icecreamActions = actions;
export const icecreamReducer = reducer;
