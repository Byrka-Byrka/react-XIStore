import {
    createSlice
} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'products',
    initialState: {
        isActive: false,
        filteredProducts: [],
        filter: {
            minPrice: 0,
            maxPrice: 0,
            wordFilter: '',
        },
        sort: {
            sortValue: '',
        },
        allProducts: []
    },

    reducers: {
        setProducts: state => {
            state.filteredProducts = JSON.parse(localStorage.products)
        },
        changeIsActive: state => {
            !state.isActive ? state.isActive = true : state.isActive = false
        },
        changeSortParam: (state, action) => {
            state.sort.sortValue = action.payload
            
        },
        changePriceParam: (state, action) => {
            if (action.payload.id === 'minPrice') {
                state.filter.minPrice = action.payload.value
            } else if (action.payload.id === 'maxPrice') {
                state.filter.maxPrice = action.payload.value
            }
            
            
        },
        changeWordFilter: (state, action) => {
            state.filter.wordFilter = action.payload
            
        },
        clearFilter: (state) =>{
            state.filter.minPrice = 0
            state.filter.maxPrice = 0
            state.filter.wordFilter = ''
            state.sort.sortValue =  ''
        },
        filterProducts: (state) => {
            // state.filteredProducts.forEach
            // state.filteredProducts.products.colors.forEach(item=>{state.filteredProducts.products.allAmount += item.amount})
            state.filteredProducts = JSON.parse(localStorage.products)
            state.filteredProducts.map((item) => {

                // item.products = item.products.reduce((accum,current)=>{
                //     current.setState
                //         current.colors.forEach(item=>{state.filteredProducts.products.allAmount += item.amount})
                //         accum=[...accum, current]

                //     return accum;
                // },[])
                if (state.filter.wordFilter) {
                    item.products = item.products.reduce((accum, current) => {
                        if (current.name.toLocaleLowerCase().includes(state.filter.wordFilter.toLocaleLowerCase())) {
                            
                            accum = [...accum, current]
                        }
                        return accum;
                    }, [])
                }
                if (state.filter.minPrice) {
                    item.products = item.products.reduce((accum, current) => {
                        
                        if (current.price >= state.filter.minPrice) {
                            accum = [...accum, current]
                        }
                        return accum;

                    }, [])
                }
                if (state.filter.maxPrice) {
                    item.products = item.products.reduce((accum, current) => {
                        
                        if (current.price <= state.filter.maxPrice) {
                            accum = [...accum, current]
                        }
                        return accum;

                    }, [])
                }
                if (state.sort.sortValue) {
                    if (state.sort.sortValue === 'priceSort') {
                        item.products = item.products.sort((a, b) => {
                            return (a.price - b.price)
                        })
                    } else if (state.sort.sortValue === 'dateSort') {
                        item.products = item.products.sort((a, b) => {
                            return (a.date - b.date)
                        })
                    } else if (state.sort.sortValue === 'amountSort') {
                        item.products = item.products.sort((a, b) => {
                            return (b.totalAmount - a.totalAmount)
                        })
                    }
                }
                return item
            })
        }
    }

});
export const {
    changeIsActive,
    clearFilter,
    filterProducts,
    changeSortParam,
    changePriceParam,
    changeWordFilter,
    setProducts
} = filterSlice.actions
export default filterSlice.reducer;