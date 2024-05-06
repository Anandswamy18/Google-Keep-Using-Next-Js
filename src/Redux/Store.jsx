"use client"

import { createStore } from 'redux'
import { combineReducers } from 'redux'
import NavReducer from './NavReducer'


const mainReducer = combineReducers({
    NavReducer
})

const store = createStore(mainReducer)

export default store;