
export function managePresents(let state = {
  numberOfPresents: 0,
}, action){
  switch(action.type){
    case: "INCREASE"
      return newState = {...state, numberOfPresents: state.numberOfPresents + 1}
    default:
      return state
  }
}
