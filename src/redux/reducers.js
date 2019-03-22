

const globalState = { 
    conta: 0,
    dados:[]
  }

export default (state = globalState, action) => {
    
    switch (action.type) {
        case "ADD": 
        //Object.assign({}, state, {text : action.payload})
        return {...state, conta : state.conta + action.payload};
             
        default: return state;
    }
}