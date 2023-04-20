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
        incrementQuant: (state, action) => {
            const item = state.productData.find((item) => item.name === action.payload.name);


            if (item) {
                item.quantity++
            }
        },
        decrementQuant: (state, action) => {
            const item = state.productData.find((item) => item.name === action.payload.name);

            if (item) {
                if (item.quantity === 1) {
                    item.quantity = 1
                } else { item.quantity--; }

            }
        },
        addUser: (state, action) => {
            state.userInfo = action.payLoad;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter((item) =>
                item.name !== action.payload
            )
        }

    }

})

export const {
    addToCart,
    incrementQuant,
    decrementQuant,
    addUser,
    removeUser,
    deleteItem,
} = coderSlice.actions;
export default coderSlice.reducer;