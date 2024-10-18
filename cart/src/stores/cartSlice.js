import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    cartTabStatus: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            const { productId, quantity } = action.payload
            let index = (state.items).findIndex(e => e.productId === productId)
            if (index >= 0) {
                state.items[index].quantity += quantity
            } else {
                state.items.push({ productId, quantity })
            }
        },
        cartTab(state) {
            state.cartTabStatus = !state.cartTabStatus
        },
        cartQuantity(state, action) {
            const { productId, quantity } = action.payload
            console.log(action.payload);
            let index = (state.items).findIndex(e => e.productId === productId)
            if (quantity > 0) {
                state.items[index].quantity = quantity
            } else {
                state.items = state.items.filter(item => item.productId !== productId)
            }
        }
    }
})

export const { addCart, cartTab, cartQuantity } = cartSlice.actions
export default cartSlice.reducer