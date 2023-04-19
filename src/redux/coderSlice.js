import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null,
};

export const coderSlice = createSlice({
    name: 'codershop',
    initialState,
    reducers: {
        // addToCart: (state, action) => {
        //     state.productData = action.payLoad
        // },
        addUser: (state, action) => {
            state.userInfo = action.payLoad;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    }
});

export const {
    addToCart,
    addUser,
    removeUser
} = coderSlice.actions;

export default coderSlice.reducer;