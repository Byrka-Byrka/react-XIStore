import {
    createSlice
} from '@reduxjs/toolkit'

export const addProductSlice = createSlice({
    name: 'addProduct',
    initialState: {
        newProduct: {
            category: 'Mi Phones',
            product: {
                name: '',
                date: '',
                screen: '',
                screenResolution: [],
                RAM: '',
                CPU: '',
                CPUClockSpeed: '',
                cores: [],
                GPU: '',
                GPUSpeed: '',
                flashMemory: '',
                src: '',
                colors: [],
                id: '',
                price: '',
            },
        },
        color: {
            color: '',
            src: '',
            amount: '',
        },
        screenResolution: {
            screenWidth: '',
            screenHeight: '',
        },
    },
    reducers: {
        changeNumberOfColors: (state, action) => {
            state.newProduct.product.colors = []
            for (let i = action.payload; i > 0; i--) {
                state.newProduct.product.colors.push(state.color)
            }
        },
        changeProductValue: (state, action) => {
            
            let id = action.payload.id;
            let value = action.payload.value;
            if (!isNaN(+value)&&value !== ''){value=+value};
            if( state.screenResolution.screenWidth && state.screenResolution.screenHeight){
                state.newProduct.product.screenResolution = [+(state.screenResolution.screenHeight), +(state.screenResolution.screenWidth)]
            }
            if(id === 'category'){
                state.newProduct.category = value
                
            }else if(id === 'screenWidth' || id === 'screenHeight'){
                state.screenResolution[id] = value
            } else if (id === 'cores') {
                
                if (value.length) {
                    value = value.split(',')
                    state.newProduct.product[id] = [...value]
                } else {
                    if(value<1){value = null}
                    state.newProduct.product[id] = [value]
                }
            }else{
                
                state.newProduct.product[id] = value
                if(id === 'name' && value.length>0){
                    state.newProduct.product.id = value.replace(/\s+/g, '')
                }
                // if( state.newProduct.product.colors[0]){
                //     if(state.newProduct.product.colors[0].src !== '')
                //     state.newProduct.product.src =  state.newProduct.product.colors[0].src
                // }
            }
        },
        changeColors: (state,action)=>{
            let parentId = action.payload.parentId
            let id = action.payload.targetId
            let value = action.payload.value
            
            
            state.newProduct.product.colors[parentId][id] = value
            if(parentId === '0' && id === 'src'){
                state.newProduct.product.src =  state.newProduct.product.colors[0].src
            }
        },
        formattingProduct: (state)=>{
            let product = state.newProduct.product
            
            
            product.date = +product.date
            
            product.screenResolution = [+state.screenResolution.screenHeight, +state.screenResolution.screenWidth]
            product.screen = +product.screen
            product.RAM = +product.RAM
            product.CPUClockSpeed = +product.CPUClockSpeed
            product.GPUSpeed = +product.GPUSpeed
            product.flashMemory = +product.flashMemory
            product.price = +product.price
            product.cores = [+product.cores]
            product.id = product.name.replace(/\s+/g, '')
            product.src = product.colors[0].src
            
            
            state.newProduct.product = product
        },
        productReset: (state)=>{
            state.newProduct = {
                category: 'Mi Phones',
                product: {
                    name: '',
                    date: '',
                    screen: '',
                    screenResolution: [],
                    RAM: '',
                    CPU: '',
                    CPUClockSpeed: '',
                    cores: [],
                    GPU: '',
                    GPUSpeed: '',
                    flashMemory: '',
                    src: '',
                    colors: [],
                    id: '',
                    price: '',
                },
            };
            state.screenResolution = {
                screenWidth: '',
                screenHeight: '',
            };
        }
    },
})

export const {
    changeNumberOfColors,
    changeProductValue,
    changeColors,
    formattingProduct,
    productReset
} = addProductSlice.actions

export default addProductSlice.reducer;