export function manageFriends(state, action){
  let newArray = []

  switch(action.type){
    case "ADD_FRIEND":
       newArray = [...state.friends, action.friend]
      return {friends: newArray}
    case 'REMOVE_FRIEND':
       newArray = state.friends.filter(friend => {
        return friend.id !== action.id
      })
      return {friends: newArray}
    default:
      return state;
  }
}
