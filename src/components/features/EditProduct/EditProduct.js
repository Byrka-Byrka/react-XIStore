import {
    createSlice
} from '@reduxjs/toolkit'

export const editProductSlice = createSlice({
    name: 'editProduct',
    initialState: {
        product: {},
        screenResolution: {
            screenWidth: null,
            screenHeight: null,
        },
        initialID: '',
        category: '',
        color: {
            color: '',
            src: '',
            amount: null,
        },
    },

    reducers: {
        setProductToEdit: (state, action) => {
            
            state.category = action.payload.category
            state.initialID = action.payload.product.id
            state.product = action.payload.product
            state.screenResolution.screenWidth = state.product.screenResolution[0]
            state.screenResolution.screenHeight = state.product.screenResolution[1]
        },
        changeNumberOfColors: (state, action) => {
            state.product.colors = []
            for (let i = action.payload; i > 0; i--) {
                state.product.colors.push(state.color)
            }
        },
        changeProductValue: (state, action) => {
            
            let id = action.payload.id;
            let value = action.payload.value;
            if (!isNaN(+value) && value !== '') {
                value = +value
            };
            if (state.screenResolution.screenWidth && state.screenResolution.screenHeight) {
                state.product.screenResolution = [+(state.screenResolution.screenHeight), +(state.screenResolution.screenWidth)]
            }
            if (id === 'screenWidth' || id === 'screenHeight') {
                state.screenResolution[id] = value
            } else if (id === 'cores') {
                
                if (value.length) {
                    value = value.split(',')
                    state.product[id] = [...value]
                } else {
                    if(value<1){value = null}
                    state.product[id] = [value]
                }
            } else {
                
                state.product[id] = value
                
                if (id === 'name' && value.length>0) {
                    state.product.id = value.replace(/\s+/g, '')
                }
                // if( state.product.colors[0]){
                //     if(state.product.colors[0].src !== '')
                //     state.product.src =  state.product.colors[0].src
                // }
            }
        },
        addColor: (state)=>{
            state.product.colors.push(state.color)
        },
        deleteColor: (state,action)=>{
            let index = action.payload
            state.product.colors.splice(index,1)
        },
        changeColors: (state, action) => {
            let parentId = action.payload.parentId
            let id = action.payload.targetId
            let value = action.payload.value
            if (id === 'amount' && value > 0){
                value = +value
            }
            state.product.colors[parentId][id] = value
            if (parentId === '0' && id === 'src') {
                state.product.src = state.product.colors[0].src
            }
        },

        productReset: (state) => {
            state.newProduct = {
                category: '',
                product: {
                    name: '',
                    date: null,
                    screen: null,
                    screenResolution: [],
                    RAM: null,
                    CPU: '',
                    CPUClockSpeed: null,
                    cores: [],
                    GPU: '',
                    GPUSpeed: null,
                    flashMemory: null,
                    src: '',
                    colors: [],
                    id: '',
                    price: null,
                },
            };
            state.screenResolution = {
                screenWidth: null,
                screenHeight: null,
            };
        }
    },
})

export const {
    setProductToEdit,
    changeProductValue,
    changeColors,
    changeProductsArr,
    addColor,
    deleteColor
} = editProductSlice.actions

export default editProductSlice.reducer;