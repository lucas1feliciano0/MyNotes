import { createStore, combineReducers } from 'redux'

import createNote from './reducers/createNote'

const reducers = combineReducers({
    createNote
})

const store = createStore(reducers)

export default store