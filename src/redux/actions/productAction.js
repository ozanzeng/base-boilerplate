import axios from "axios";

// All API url coming from this.
import { PRODUCT } from "../../client/api";
import { fetches } from "./actionTypes";

export function fetchProduct() {
	return dispatch => {
		dispatch({
			type: `${fetches.product}`,
			payload: axios.get(PRODUCT)
				.then(result => result.data)
				.catch(error => console.log(error))
		})
	}
}