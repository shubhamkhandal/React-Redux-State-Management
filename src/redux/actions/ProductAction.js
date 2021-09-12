import { ActionTypes } from "../contants/ActionTypes"

export const SetProducts = (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
};

export const SelectProducts = (singleproduct)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: singleproduct,
    }
};

export const RemoveSelectProducts = (RemoveSingleProduct)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: RemoveSingleProduct,
    }
};