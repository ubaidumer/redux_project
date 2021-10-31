import { REMOVE, SUBMIT, VIEW } from './../actions/index';
function view(state=[],action){
    switch(action.type){
        default:
            return state;
        case VIEW:
            return {
                ...state,
                view:action.payload,
            }
        case REMOVE:
            return {
                ...state,
                view:action.payload,
            }
            
    }
}


export default view;