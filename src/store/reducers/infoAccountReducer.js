
export default (state={uid: false, checkingStatus: true, accountInfo:{}, ownCards:{}, changeList: false}, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      return {...state, accountInfo: action.payload}
    case 'SET_OWN_CARDS':
      return {...state, ownCards: action.payload}
    case 'SET_UID':
      return {...state, uid: action.payload}
    case 'CHANGE_STATUS_LOGGED': // ?
      return {...state, checkingStatus: action.payload} 
    case 'CHANGE_LIST': // ?
      return {...state, changeList: action.payload} 

    default: 
      return state
  }
}