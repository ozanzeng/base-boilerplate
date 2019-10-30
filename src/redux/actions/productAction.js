import axios from "axios";

// All API url coming from this.
import { appConfig } from "../config/appConfig";
import { fetches } from "./actionTypes";

export function fetchProduct() {
	return dispatch => {
		dispatch({
			type: `${fetches.product}`,
			payload: axios.get(appConfig.BASE_API_URL + appConfig.product.data.API)
				.then(result => result.data)
				.catch(error => console.log(error))
		})
	}
}