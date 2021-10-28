import { combineReducers } from 'redux';
import view from '../reducers/view.reducers'
const rootReducer = combineReducers(
{ 
    view
}
)
export default rootReducer;