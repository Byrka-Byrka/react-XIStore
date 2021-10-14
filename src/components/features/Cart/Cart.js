import {
    createSlice
} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsCart: [{
                category: 'Mi Phones',
                products: []
            },
            {
                category: 'POCOPHONE',
                products: []
            }
        ],
        products: []
    },
    reducers: { 
        addProductToCart: (state, action) => {
            
            let product = {
                category: action.payload.category,
                ...action.payload.product
            }
            product.colors = {
                ...action.payload.productColor
            }
            product.src = action.payload.productColor.src
            product.colors.amount = 1


            let sameProduct = state.products.find(item =>(item.id === action.payload.product.id && item.colors.color === action.payload.productColor.color))
            
            if(sameProduct){
                sameProduct.colors.amount += 1;
            } else {
                state.products.push(product)
            }

        },
        deleteProductFromCart: (state,action) =>{
            let index = action.payload.index
            state.products[index].colors.amount += -1
            if((state.products[index].colors.amount)<=0){
                
                state.products.splice(index, 1)
            }
        },
        checkout: (state) => {
            state.products = [];
        }
    }
})

export const {
    addProductToCart,
    deleteProductFromCart,
    checkout,
} = CartSlice.actions

export default CartSlice.reducer;