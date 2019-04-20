export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
    const remIndex = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: [...state.friends.slice(0, remIndex), ...state.friends.slice(remIndex+1)]}
    default:
      return state
  }
}

let state = {
  friends: []
}
