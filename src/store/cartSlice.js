import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   cart: [
       {id: 1, title: 'Велосипед', count: 5},
       {id: 2, title: 'Самокат', count: 4},
       {id: 3, title: 'Гантели', count: 7},
       {id: 4, title: 'Ракетки', count: 1}
    ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment(state, action) {
        const product = state.cart.find((item) => item.id === action.payload);
        if (product && product.count < 25) {
            product.count += 1;
        }
    },
    decrement(state, action) {
        const product = state.cart.find((item) => item.id === action.payload);
        if (product) {
            product.count -= 1;
            if (product.count === 0) {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            }
        }
    },
    addProduct(state, action) {
        const newProduct = {
            id: Date.now(),
            title: action.payload,
            count: 1,
        };
        state.cart.push(newProduct);
    },
  },
});

export default cartSlice.reducer;

export const {
    increment, 
    decrement, 
    addProduct 
} = cartSlice.actions;
