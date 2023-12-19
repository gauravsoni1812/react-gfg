const initialState={
    count:0
}

const ACTIONS={
    INCREMENT:'INCREMENT',
    DECREMENT:'DECREMENT'
}

//Action Creator - return action object
export const incrementActionCreator=()=>{
   const action = {type:ACTIONS.INCREMENT};
   return action;
}

export const decrementActionCreator=()=>{
    const action = {type:ACTIONS.DECREMENT};
    return action;
}

export const countReducer=(state=initialState,action)=>{
   switch (action.type) {
    case ACTIONS.INCREMENT:
        //state.count++ //mustable update as it updates the state objects
        // Here we are immutable updating by copying and then updating
        // here our state is not affected
        return {...state , count:state.count+1};
   
    case ACTIONS.DECREMENT:
        
        return {...state , count:state.count -1};

    default:
        return state;
   }

}