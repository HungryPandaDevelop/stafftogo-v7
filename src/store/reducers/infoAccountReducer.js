
export default (state={}, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      return {...state, accountInfo: action.payload}
    case 'SET_INFO_UID':
      return {...state, uid: action.payload}
    case 'SET_OWN_CARDS':
      return {...state, ownCards: action.payload}
    case 'SET_OWN_TYPE':
      return {...state, ownType: action.payload}
    default: 
      return state
  }
}