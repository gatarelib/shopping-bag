import {GET_PRODUCTS} from './types';
import Axios, {axios} from 'axios';

const API_BASE_URL = 'http://localhost:3000/'

export function getProducts() {
    const request = Axios.get(API_BASE_URL + 'get-products');
    return {
        type: GET_PRODUCTS,
        payload: request
    }
}