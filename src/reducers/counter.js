import { counter as counterActions } from "../constants/actionsType"

const INITIAL_STATE = {
    count: 0,
}; 


export default (state = INITIAL_STATE, actions) => {
    
    switch(actions.type){
        case counterActions.INCREMENTAR: {
            return {...state, 
                count: state.count + 10 }
        }
        
        case counterActions.DECREMENTAR: {
            return {...state, count: state.count - 10 }
        }

        default: {
            return state;
        }

    }
};


