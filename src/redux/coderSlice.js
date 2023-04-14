import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null,
};

export const coderSlice = createSlice({
    name: 'codershop',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find((item) =>

                item.name === action.payload.name

            )


            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload)
            }


        },
        addUser: (state, action) => {
            state.userInfo = action.payLoad;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    }

})

export const {
    addToCart,
    addUser,
    removeUser
} = coderSlice.actions;
export default coderSlice.reducer;