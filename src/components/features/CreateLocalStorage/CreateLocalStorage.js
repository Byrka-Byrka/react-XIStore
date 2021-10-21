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
                        src: 'https://content2.onliner.by/catalog/device/header/7c01de4ecb5c8dc80b0be742cd8bdf49.jpeg',
                        colors: [{
                                color: 'green',
                                src: 'https://content2.onliner.by/catalog/device/header/7c01de4ecb5c8dc80b0be742cd8bdf49.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: 'https://content2.onliner.by/catalog/device/header/47f365ecf82722c2a2c62089016b38e1.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'blue',
                                src: 'https://content2.onliner.by/catalog/device/header/cb51a837a0412862219a9226ed92ea6a.jpeg',
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
                        src: 'https://content2.onliner.by/catalog/device/header/f6098af88b7ab59732527db50c54e88a.jpeg',
                        colors: [{
                                color: 'black',
                                src: 'https://content2.onliner.by/catalog/device/header/f6098af88b7ab59732527db50c54e88a.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'white',
                                src: 'https://content2.onliner.by/catalog/device/header/9bb01a68fac8321f0deb811e58b663af.jpeg',
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
                        src: 'https://content2.onliner.by/catalog/device/header/815cebc311bfdc34be6bf772db86d6e6.jpeg',
                        colors: [{
                                color: 'white',
                                src: 'https://content2.onliner.by/catalog/device/header/815cebc311bfdc34be6bf772db86d6e6.jpeg',
                                amount: 4,
                            },
                            {
                                color: 'blue',
                                src: 'https://content2.onliner.by/catalog/device/header/e25663434fa2cece86a1a161d50489fb.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'black',
                                src: 'https://content2.onliner.by/catalog/device/header/d79722adc60a41b9908b5b4c4eac4c48.jpeg',
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
                        src: 'https://content2.onliner.by/catalog/device/header/a95bdb5dbfb576aae098df2783456453.jpeg',
                        colors: [{
                                color: 'blue',
                                src: 'https://content2.onliner.by/catalog/device/header/a95bdb5dbfb576aae098df2783456453.jpeg',
                                amount: 7,
                            },
                            {
                                color: 'gray',
                                src: 'https://content2.onliner.by/catalog/device/header/2c14971bf6128c6bb437530b48737ca7.jpeg',
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
                        src: 'https://content2.onliner.by/catalog/device/header/dfb537ec00e233a730b1ad2784e9464b.jpeg',
                        colors: [{
                                color: 'blue',
                                src: 'https://content2.onliner.by/catalog/device/header/dfb537ec00e233a730b1ad2784e9464b.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: 'https://content2.onliner.by/catalog/device/header/d0dbe4f98b4ef1cfd2a434116d517dd7.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'white',
                                src: 'https://content2.onliner.by/catalog/device/header/8df3e7aa4de28c89115172b063d219a2.jpeg',
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
                        src: 'https://content2.onliner.by/catalog/device/header/66153cf8b140c04baae71a3818cbf1f5.jpeg',
                        colors: [{
                                color: 'yellow',
                                src: 'https://content2.onliner.by/catalog/device/header/66153cf8b140c04baae71a3818cbf1f5.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: 'https://content2.onliner.by/catalog/device/header/a3551d97c6d16c2f6eac5c6cbe279735.jpeg',
                                amount: 2,
                            },
                            {
                                color: 'blue',
                                src: 'https://content2.onliner.by/catalog/device/header/e020f30c013fc71aab31e5ec6e36b7e0.jpeg',
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
                        src: 'https://content2.onliner.by/catalog/device/header/fdcc2719e2bc12ada6ae8582139c44fd.jpeg',
                        colors: [{
                                color: 'blue',
                                src: 'https://content2.onliner.by/catalog/device/header/fdcc2719e2bc12ada6ae8582139c44fd.jpeg',
                                amount: 5,
                            },
                            {
                                color: 'black',
                                src: 'https://content2.onliner.by/catalog/device/header/7aa49812f0e3ed8ce0742ee1b56244c8.jpeg',
                                amount: 2,
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
            },
            {
                category: 'Redmi Phones',
                products: [{
                        name: 'Redmi Note 10 Pro',
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
                        src: 'https://content2.onliner.by/catalog/device/header/9f5e9a514ec54acdb3605c9f4af1151d.jpeg',
                        colors: [{
                                color: 'bronze',
                                src: 'https://content2.onliner.by/catalog/device/header/9f5e9a514ec54acdb3605c9f4af1151d.jpeg',
                                amount: 9,
                            },
                            {
                                color: 'gray',
                                src: 'https://content2.onliner.by/catalog/device/header/050a6f0f727e91c7d6fb306dfce40a25.jpeg',
                                amount: 16,
                            },
                        ],
                        id: 'RedmiNote10Pro',
                        price: 399,
                    },
                    {
                        name: 'Redmi Note 8 Pro',
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
                        src: 'https://content2.onliner.by/catalog/device/header/e16c6a794798c03985a53861f42a1da9.jpeg',
                        colors: [{
                                color: 'green',
                                src: 'https://content2.onliner.by/catalog/device/header/e16c6a794798c03985a53861f42a1da9.jpeg',
                                amount: 15,
                            },
                            {
                                color: 'black',
                                src: 'https://content2.onliner.by/catalog/device/header/71f5e77b104dc144921515e01833009d.jpeg',
                                amount: 12,
                            },
                            {
                                color: 'red',
                                src: 'https://content2.onliner.by/catalog/device/header/d3f00d19b253d28040ceda5ff56af3f3.jpeg',
                                amount: 7,
                            },
                        ],
                        id: 'RedmiNote8Pro',
                        price: 329,
                    },
                ]
            }
        ],
        users: [{
                username: 'user@mail.com',
                password: 'user',
                isAdmin: false,
            },
            {
                username: 'user1@mail.com',
                password: 'user1',
                isAdmin: false,
            },
            {
                username: 'admin@mail.com',
                password: 'admin',
                isAdmin: true,
            },
        ],

    },
    reducers: {
        createLocalStorage: (state) => {
            localStorage.products = JSON.stringify(state.products)
        },
        createLocalStorageUsers: (state) => {
            localStorage.users = JSON.stringify(state.users)
        },
        setTotalAmountOfProducts: (state) => {
            let products = JSON.parse(localStorage.products)
            products.forEach(item => item.products.forEach(item => item.totalAmount = item.colors.reduce((accum, current) => {
                accum += current.amount
                return accum
            }, 0)))
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
        deleteProduct: (state, action) => {
            let productsArr = JSON.parse(localStorage.products)
            let indexOfCategory = productsArr.indexOf(productsArr.find(item => item.category === action.payload.category))
            let indexOfProduct = productsArr[indexOfCategory].products.indexOf(productsArr[indexOfCategory].products.find(item => item.id === action.payload.initialID))
            productsArr[indexOfCategory].products.splice(indexOfProduct, 1)
            localStorage.products = JSON.stringify(productsArr)

        },
        productAmountIncrement: (state, action) => {
            let productsArr = JSON.parse(localStorage.products)
            let indexOfCategory = productsArr.indexOf(productsArr.find(item => item.category === action.payload.category))
            let indexOfProduct = productsArr[indexOfCategory].products.indexOf(productsArr[indexOfCategory].products.find(item => item.id === action.payload.product.id))
            let indexOfColor = productsArr[indexOfCategory].products[indexOfProduct].colors.indexOf(productsArr[indexOfCategory].products[indexOfProduct].colors.find(item => item.color === action.payload.productColor.color))
            productsArr[indexOfCategory].products[indexOfProduct].colors[indexOfColor].amount += -1
            localStorage.products = JSON.stringify(productsArr)

        },
        productAmountDecrement: (state, action) => {
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
    createLocalStorageUsers,
    editProductsInLocalStorage,
    editProducts,
    changeProductsArr,
    deleteProduct,
    productAmountIncrement,
    productAmountDecrement,
    setTotalAmountOfProducts,
} = LocalStorageSlice.actions

export default LocalStorageSlice.reducer;