import { createSlice } from '@reduxjs/toolkit'

export const chosenProductSlice = createSlice({
    name: 'chosenProduct',
    initialState: {
        product: {},
        path: '///',
        category: ''
    },
    reducers:{
        findProduct: (state, action) => {
            let id = action.payload.id;
            let category = action.payload.category;
            state.category = action.payload.category;
            let productsArr = JSON.parse(localStorage.products)
            let categoryOfProducts = productsArr.find(item => item.category === category)
            state.product = categoryOfProducts.products.find(item => item.id === id)
            state.path = `/list/${category.replace(/\s+/g, '')}/${id}`
        },
        amountIncrement: (state, action) => {
            state.product.colors.find(item => item.color === action.payload.color).amount += 0
            state.product.colors.find(item => item.color === action.payload.color).amount+= -1
        }
    }
})

export const { findProduct, amountIncrement, } = chosenProductSlice.actions

export default chosenProductSlice.reducer;