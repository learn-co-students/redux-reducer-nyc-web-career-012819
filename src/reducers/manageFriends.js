export function manageFriends(state = { friends: [] }, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return { 
        ...state, 
        friends: [
          ...state.friends,
          action.friend,
        ],
      };
    case 'REMOVE_FRIEND':
      const index = state.friends.findIndex(friend => friend.id === action.id);
      const newArr = [...state.friends];
      newArr.splice(index, 1);
      return { 
        ...state, 
        friends: newArr,
      };
    default:
      return state;
  }
}
