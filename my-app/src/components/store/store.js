import LocalStorageReducer from '../features/CreateLocalStorage/CreateLocalStorage'
import { configureStore } from '@reduxjs/toolkit'
import modalFrameReducer from '../features/modalFrame/modalFrameSlice'
import authorizationReducer from '../features/singIn/authorizationReducer'
import filterReducer from '../features/Filter/Filter'
import chosenProductReducer from '../features/ChosenProduct/ChosenProduct'
import addProductReducer from '../features/AddProduct/AddProduct'
import editProductReducer from '../features/EditProduct/EditProduct'
import cartReducer from '../features/Cart/Cart'

export default configureStore({
  reducer: {
    localStorageEdit: LocalStorageReducer,
    modalFrame: modalFrameReducer,
    authorization: authorizationReducer,
    filter: filterReducer,
    chosenProduct: chosenProductReducer,
    addProduct: addProductReducer,
    editProduct: editProductReducer,
    cart: cartReducer,
  }
})