import{combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducers"
import categoryListReducer from "./categoryListReducer"

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer
})

export default rootReducer;