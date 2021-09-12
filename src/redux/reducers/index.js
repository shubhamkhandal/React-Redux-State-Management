import { combineReducers } from "redux";
import { ProductReducer, SelectProductReducer } from "./ProductReducer";

const RootReducers = combineReducers({
    allProducts: ProductReducer,
    singleProduct:SelectProductReducer
});
export default RootReducers;