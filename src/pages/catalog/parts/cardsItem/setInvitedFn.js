const setInvitedFn = (existsInvitesParam, choisenInvite, uid, cardName) => {

  let filteredExistsInvites;

  let MyExist = 0;

  let existsInvites = existsInvitesParam;

  existsInvites && existsInvites.forEach(item => {
    if (item.numInvite === choisenInvite) {
      MyExist = 1;
    }
  });

  if (MyExist) {
    filteredExistsInvites = existsInvites && existsInvites.filter(item => item.numInvite !== choisenInvite);
  }
  else {
    existsInvites = existsInvites && existsInvites.filter(item => item.numInvite !== choisenInvite);

    if (existsInvites) {
      filteredExistsInvites = [...existsInvites, { numInvite: choisenInvite, status: 'view', cards_name: cardName, uid: uid }]
    }
    else {
      filteredExistsInvites = [{ numInvite: choisenInvite, status: 'view', cards_name: cardName, uid: uid }]
    }
  }

  return filteredExistsInvites;
}

export default setInvitedFn;