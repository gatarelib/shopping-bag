import {GET_PRODUCTS} from '../actions/types';

const INITIAL_STATE = {
    getProducts : []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case GET_PRODUCTS:
        return {getProducts: [...state.getProducts, action.payload]}
        default:
        return state; 
    }
}