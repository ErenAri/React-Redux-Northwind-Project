import{combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducers"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productsListReducer"

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer
})

export default rootReducer;