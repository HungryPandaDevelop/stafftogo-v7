
const  popupReducer = (state = {idInvite: 0, openInvitePopup:0}, action) => {

  switch(action.type){
    case 'SHOW_POPUP':
      return {...state, idShow: action.payload}
    case 'CHOISE_INVITE':
      return {...state, idInvite: action.payload}
    case 'OPEN_INVITE_POPUP':
      return {...state, openInvitePopup: action.payload}
    case 'CHANGE_INVITE':
      return {...state, changeInvite: action.payload}
    default:
      return state;
  }
}

export default popupReducer;