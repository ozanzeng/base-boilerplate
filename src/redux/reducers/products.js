/*
*	Product Reducer 
*/

import { FETCH_PRODUCT } from "../actions";

const initialState = {
	isLoading: false,
	productList: [],
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type){
		case FETCH_PRODUCT.PENDING:
			return {
				...state,
				isLoading: true
			};
		case FETCH_PRODUCT.FULFILLED:
			return {
				...state,
				productList: action.payload,
				isLoading: false
			};
		case FETCH_PRODUCT.REJECTED:
			return {
				...state,
				error: action.payload,
				isLoading: false
			};

		default:
			return state;
	}
}