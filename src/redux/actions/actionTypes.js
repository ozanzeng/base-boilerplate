/*
* Action Types
*
* All action variables and settings are export from this page.
*
*  !! Reducer use "asyncActionType" function. !!
*/

// Fetch variables.
export const fetches = {
	product: "FETCH_PRODUCT"
};

// Each action type is produced and used with this function.
// Fetch names are coming from "fetches" object, the name must be placed in the object.
const asyncActionType = type => ({
  PENDING: `${type}_PENDING`,
  FULFILLED: `${type}_FULFILLED`,
  REJECTED: `${type}_REJECTED`
});

// Action type names.
// EXP: export const VARIABLE_NAME = asyncActionType(fetches.fetches_name);
export const FETCH_PRODUCT = asyncActionType(fetches.product);