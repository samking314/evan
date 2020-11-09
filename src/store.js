import allReducers from './reducers'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { save, load } from 'redux-localstorage-simple'

let _store = null;

export const getStore = () => {
	return _store
}

export const setStore = store => {
	_store = store;
}

export const configureStore = (_initialState, additionalReducers={}, persistStates=[]) => {
	if (_store) {
		return _store;
	}
	const reducers = combineReducers({
		...allReducers,
		...additionalReducers,
		form: formReducer
	})
	const initialState = _initialState ? _initialState : load({
		states: persistStates
	})
	_store = createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(
				thunkMiddleware,
				logger,
				save({
					states: persistStates
				})
			)
		)
	)
	return _store;
}

const all = {
	getStore,
	setStore,
	configureStore
}

export default all;
