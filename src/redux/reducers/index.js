import{combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducers"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productsListReducer"
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
})

export default rootReducer;