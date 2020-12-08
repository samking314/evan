import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { reducer as formReducer } from "redux-form";

let _store = null;

export const configureStore = _initialState => {
	if (_store) {
		return _store;
	}
	const reducer = combineReducers({ form: formReducer });
	const initialState = _initialState;

	_store = createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(
				thunkMiddleware,
				logger
			)
		)
	);
	return _store;
}

export default configureStore
