export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
    const found = state.friends.find(friend => friend.id === action.id)
    const statee = state
    const index = statee.friends.indexOf(found)
    return ({...state,
            friends: [
              ...state.friends.slice(0, index),
              ...state.friends.slice(index + 1)
            ]
        })
      default:
      return state
  }
}
