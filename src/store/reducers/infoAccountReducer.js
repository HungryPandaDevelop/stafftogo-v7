
export default (state={uid: false, checkingStatus: true}, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      return {...state, accountInfo: action.payload}
    case 'SET_INFO_UID':
      return {...state, uid: action.payload}
    case 'SET_OWN_CARDS':
      return {...state, ownCards: action.payload}
    case 'SET_OWN_TYPE':
      return {...state, ownType: action.payload}
    case 'SET_OWN_TYPE_TRUE':
      return {...state, ownTypeTrue: action.payload}
    case 'SET_UID':
      return {...state, uid: action.payload}
    case 'CHANGE_STATUS_LOGGED': // ?
      return {...state, checkingStatus: action.payload} 

    default: 
      return state
  }
}