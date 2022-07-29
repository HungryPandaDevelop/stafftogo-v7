  // useEffect(() => {

  //   getUserInfo().then(res => {
  //     setUserInfo(res.data);

  //     props.ActionFn('SET_INFO_ACCOUNT', res.data);
  //     props.ActionFn('SET_INFO_UID', auth);

  //     if (res.data.typeCabinet === 'employers') {
  //       setTypeList('vacancies');
  //       setTypeName('Вакансии');
  //       props.ActionFn('SET_OWN_TYPE', 'resume');
  //       props.ActionFn('SET_OWN_TYPE_TRUE', 'vacancies');

  //     } else {
  //       setTypeList('resume');
  //       setTypeName('Резюме');
  //       props.ActionFn('SET_OWN_TYPE', 'vacancies');
  //       props.ActionFn('SET_OWN_TYPE_TRUE', 'resume');
  //     }



  //     setTypeList((state) => {
  //       getListing(state, 'user').then(res => {
  //         props.ActionFn('CHOISE_INVITE', res[0].id);
  //         props.ActionFn('SET_OWN_CARDS', res);

  //         // console.log('set own cards', res)

  //         setListings(res);

  //         setLoading(false);
  //       });
  //       return state;
  //     });
  //   });
  //   // console.log('changeInvite')
  // }, [props.choiseDeleteInvite]);