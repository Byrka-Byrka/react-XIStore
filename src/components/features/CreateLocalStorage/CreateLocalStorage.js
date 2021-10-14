import {
    createSlice
} from '@reduxjs/toolkit'

export const LocalStorageSlice = createSlice({
    name: 'LocalStorageEdit',
    initialState: {
        products: [{
                category: 'Mi Phones',
                products: [{
                        name: 'Xiaomi Redmi 9A',
                        date: 2020,
                        screen: 6.53,
                        screenResolution: [720, 1600],
                        RAM: 2,
                        CPU: 'Mediatek Helio G25',
                        CPUClockSpeed: 2000,
                        cores: [8, 4, 4],
                        GPU: 'PowerVR GE8320',
                        GPUSpeed: 650,
                        flashMemory: 64,
                        src: '/img/Redmi 9A.jpeg',
                        colors: [{
                                color: 'green',
                                src: 'img/Redmi 9A.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: 'img/Redmi 9A_black.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'blue',
                                src: 'img/Redmi 9A_blue.jpeg',
                                amount: 0,
                            },
                        ],
                        id: 'MiPhRedmi9A',
                        price: 75,
                    },
                    {
                        name: 'Xiaomi Mi 11 Ultra',
                        date: 2021,
                        screen: 6.81,
                        screenResolution: [1440, 3200],
                        RAM: 12,
                        CPU: 'Qualcomm Snapdragon 888',
                        CPUClockSpeed: 2840,
                        cores: [8, 4, 4],
                        GPU: 'Adreno 660',
                        GPUSpeed: 840,
                        flashMemory: 256,
                        src: 'img/mi11UltraBlack.jpeg',
                        colors: [{
                                color: 'black',
                                src: 'img/mi11UltraBlack.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'white',
                                src: 'img/mi11UltraWhite.jpeg',
                                amount: 0,
                            },
                        ],
                        id: 'Mi11Ultra',
                        price: 99,
                    },
                    {
                        name: 'Xiaomi Mi 11',
                        date: 2021,
                        screen: 6.81,
                        screenResolution: [1440, 3200],
                        RAM: 12,
                        CPU: 'Qualcomm Snapdragon 888',
                        CPUClockSpeed: 2840,
                        cores: [8, 4, 4],
                        GPU: 'Adreno 660',
                        GPUSpeed: 840,
                        flashMemory: 256,
                        src: '/img/Xiaomi Mi 11_white.jpeg',
                        colors: [{
                                color: 'white',
                                src: '/img/Xiaomi Mi 11_white.jpeg',
                                amount: 4,
                            },
                            {
                                color: 'blue',
                                src: '/img/Xiaomi Mi 11_blue.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'black',
                                src: '/img/Xiaomi Mi 11_black.jpeg',
                                amount: 1,
                            },
                        ],
                        id: 'XiaomiMi11',
                        price: 105,
                    },
                    {
                        name: 'Xiaomi Mi 10',
                        date: 2020,
                        screen: 6.67,
                        screenResolution: [1080, 2340],
                        RAM: 8,
                        CPU: 'Qualcomm Snapdragon 865',
                        CPUClockSpeed: 2840,
                        cores: [8, 4, 4],
                        GPU: 'Adreno 650',
                        GPUSpeed: 587,
                        flashMemory: 128,
                        src: '/img/Xiaomi Mi 10_blue.jpeg',
                        colors: [{
                                color: 'blue',
                                src: '/img/Xiaomi Mi 10_blue.jpeg',
                                amount: 7,
                            },
                            {
                                color: 'gray',
                                src: '/img/Xiaomi Mi 10_gray.jpeg',
                                amount: 2,
                            },
                        ],
                        id: 'XiaomiMi10',
                        price: 140,
                    },
                    {
                        name: 'Xiaomi Mi A3',
                        date: 2019,
                        screen: 6.09,
                        screenResolution: [720, 1560],
                        RAM: 4,
                        CPU: 'Qualcomm Snapdragon 665',
                        CPUClockSpeed: 2000,
                        cores: [8, 4, 4],
                        GPU: 'Adreno 610',
                        GPUSpeed: 650,
                        flashMemory: 64,
                        src: '/img/Xiaomi Mi A3_blue.jpeg',
                        colors: [{
                                color: 'blue',
                                src: '/img/Xiaomi Mi A3_blue.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: '/img/Xiaomi Mi A3_black.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'white',
                                src: '/img/Xiaomi Mi A3_white.jpeg',
                                amount: 0,
                            },
                        ],
                        id: 'XiaomiMiA3',
                        price: 80,
                    },
                    {
                        name: 'Xiaomi Mi 8',
                        date: 2018,
                        screen: 6.2,
                        screenResolution: [1080, 2248],
                        RAM: 6,
                        CPU: 'Qualcomm Snapdragon 845',
                        CPUClockSpeed: 2800,
                        cores: [8, 4, 4],
                        GPU: 'Adreno 630',
                        GPUSpeed: 710,
                        flashMemory: 128,
                        src: '/img/Xiaomi Mi 8_black.jpeg',
                        colors: [{
                                color: 'black',
                                src: '/img/Xiaomi Mi 8_black.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'blue',
                                src: '/img/Xiaomi Mi 8_blue.jpeg',
                                amount: 2,
                            },
                        ],
                        id: 'XiaomiMi8',
                        price: 240,
                    },
                    {
                        name: 'Xiaomi Mi Max 3',
                        date: 2018,
                        screen: 6.9,
                        screenResolution: [1080, 2160],
                        RAM: 4,
                        CPU: 'Qualcomm Snapdragon 636',
                        CPUClockSpeed: 1800,
                        cores: [8, 4, 4],
                        GPU: 'Adreno 509',
                        GPUSpeed: 650,
                        flashMemory: 64,
                        src: '/img/Xiaomi Mi Max 3_black.jpeg',
                        colors: [{
                                color: 'black',
                                src: '/img/Xiaomi Mi Max 3_black.jpeg',
                                amount: 2,
                            },

                        ],
                        id: 'XiaomiMiMax3',
                        price: 49,
                    }

                ]
            },
            {
                category: 'POCOPHONE',
                products: [{
                        name: 'POCO M3',
                        date: 2020,
                        screen: 6.53,
                        screenResolution: [1080, 2340],
                        RAM: 4,
                        CPU: 'Qualcomm Snapdragon 662',
                        CPUClockSpeed: 2000,
                        cores: [8, 4, 4],
                        GPU: 'Adreno 610',
                        GPUSpeed: 650,
                        flashMemory: 128,
                        src: '/img/Redmi 9A.jpeg',
                        colors: [{
                                color: 'green',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'white',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 0,
                            },
                        ],
                        id: 'POCO_M3',
                        price: 400,
                    },
                    {
                        name: 'POCO X3 NFC',
                        date: 2020,
                        screen: 6.67,
                        screenResolution: [1080, 2400],
                        RAM: 6,
                        CPU: 'Qualcomm Snapdragon 732G',
                        CPUClockSpeed: 2300,
                        cores: [8, 2, 6],
                        GPU: 'Adreno 618',
                        GPUSpeed: 800,
                        flashMemory: 128,
                        src: '/img/Redmi 9A.jpeg',
                        colors: [{
                                color: 'green',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'white',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 0,
                            },
                        ],
                        id: 'POCO_X3_NFC',
                        price: 170,
                    },
                    {
                        name: 'Xiaomi Redmi 9A',
                        date: 2020,
                        screen: 6.67,
                        screenResolution: [1080, 2400],
                        RAM: 6,
                        CPU: 'Qualcomm Snapdragon 865',
                        CPUClockSpeed: 2840,
                        cores: [8, 4, 4],
                        GPU: 'Adreno 650',
                        GPUSpeed: 587,
                        flashMemory: 128,
                        src: '/img/Redmi 9A.jpeg',
                        colors: [{
                                color: 'green',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'white',
                                src: '/img/Redmi 9A.jpeg',
                                amount: 0,
                            },
                        ],
                        id: 'MiPhRedmi9A',
                        price: 99,
                    },
                ]
            }
        ],
        users: [{
                username: 'user@mail',
                password: 'user',
                isAdmin: false,
            },
            {
                username: 'user1@mail',
                password: 'user1',
                isAdmin: false,
            },
            {
                username: 'admin@mail',
                password: 'admin',
                isAdmin: true,
            },
        ],

    },
    reducers: {
        createLocalStorage: (state) => {
            localStorage.products = JSON.stringify(state.products)
            localStorage.users = JSON.stringify(state.users)
        },
        setTotalAmountOfProducts: (state) => {
            let products = JSON.parse(localStorage.products)
            products.forEach(item => item.products.forEach(item => item.totalAmount = item.colors.reduce((accum,current)=>{
                accum +=current.amount
                return accum
            },0)))
            localStorage.products = JSON.stringify(products)
        },
        editProducts: (state, action) => {
            let products = state.products
            let category = action.payload.category;
            let product = action.payload.product;
            for (let i = state.products.length - 1; i > 0; i--) {
                if (products[i].category === category) {
                    products[i].products.push(product)
                }
            }
        },
        editProductsInLocalStorage: (state, action) => {
            let products = JSON.parse(localStorage.products)
            let category = action.payload.category;
            let newProduct = action.payload.product;
            for (let i = products.length - 1; i >= 0; i--) {
                if (products[i].category === category) {
                    products[i].products.push(newProduct)
                    
                    localStorage.products = JSON.stringify(products)
                }
            }
        },
        changeProductsArr: (state, action) => {
            let productsArr = JSON.parse(localStorage.products)
            let indexOfCategory = productsArr.indexOf(productsArr.find(item => item.category === action.payload.category))
            let indexOfProduct = productsArr[indexOfCategory].products.indexOf(productsArr[indexOfCategory].products.find(item => item.id === action.payload.initialID))
            productsArr[indexOfCategory].products.splice(indexOfProduct, 1, action.payload.product)
            localStorage.products = JSON.stringify(productsArr)
        },
        deleteProduct: (state, action) =>{
            let productsArr = JSON.parse(localStorage.products)
            let indexOfCategory = productsArr.indexOf(productsArr.find(item => item.category === action.payload.category))
            let indexOfProduct = productsArr[indexOfCategory].products.indexOf(productsArr[indexOfCategory].products.find(item => item.id === action.payload.initialID))
            productsArr[indexOfCategory].products.splice(indexOfProduct, 1)
            localStorage.products = JSON.stringify(productsArr)
            
        },
        productAmountIncrement:(state, action) =>{
            let productsArr = JSON.parse(localStorage.products)
            let indexOfCategory = productsArr.indexOf(productsArr.find(item => item.category === action.payload.category))
            let indexOfProduct = productsArr[indexOfCategory].products.indexOf(productsArr[indexOfCategory].products.find(item => item.id === action.payload.product.id))
            let indexOfColor = productsArr[indexOfCategory].products[indexOfProduct].colors.indexOf(productsArr[indexOfCategory].products[indexOfProduct].colors.find(item => item.color === action.payload.productColor.color))
            productsArr[indexOfCategory].products[indexOfProduct].colors[indexOfColor].amount += -1
            localStorage.products = JSON.stringify(productsArr)
            
        },
        productAmountDecrement:(state, action) =>{
            let productsArr = JSON.parse(localStorage.products)
            let indexOfCategory = productsArr.indexOf(productsArr.find(item => item.category === action.payload.category))
            let indexOfProduct = productsArr[indexOfCategory].products.indexOf(productsArr[indexOfCategory].products.find(item => item.id === action.payload.id))
            let indexOfColor = productsArr[indexOfCategory].products[indexOfProduct].colors.indexOf(productsArr[indexOfCategory].products[indexOfProduct].colors.find(item => item.color === action.payload.colors.color))
            productsArr[indexOfCategory].products[indexOfProduct].colors[indexOfColor].amount += 1
            console.timeLog(productsArr[indexOfCategory].products[indexOfProduct].colors[indexOfColor].amount)
            localStorage.products = JSON.stringify(productsArr)
            
        }
    }

})

export const {
    createLocalStorage,
    editProductsInLocalStorage,
    editProducts,
    changeProductsArr,
    deleteProduct,
    productAmountIncrement,
    productAmountDecrement,
    setTotalAmountOfProducts,
} = LocalStorageSlice.actions

export default LocalStorageSlice.reducer;
