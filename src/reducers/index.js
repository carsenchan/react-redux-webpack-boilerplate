import {combineReducers} from 'redux'
import basicReducer from './basicReducer'

export const reducers  = combineReducers({
  textReducer: basicReducer
})