import { ActionTypes } from "../contants/ActionTypes"

const intialState = {
    products:[]
};
export const ProductReducer = (state = intialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS: 
            return {...state, products:payload};
        default:
            return state;    
    }

};

export const SelectProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}

