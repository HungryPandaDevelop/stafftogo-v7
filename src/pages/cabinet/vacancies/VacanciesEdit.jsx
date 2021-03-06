import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { useParams } from 'react-router-dom';


import { getSingleListing } from 'store/asyncActions/getSingleListing';

import { getInfoForEdit } from 'store/asyncActions/getInfoForEdit';
import { saveInfo } from 'store/asyncActions/saveInfo';


const VacanciesEdit = (props) => {

  const [getInfo, setGetInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const params = useParams();

  // console.log('params.elementId', params.elementId)
  /* получение данных пользователя */

  useEffect(() => {
    // props.getInfoVacanciesAction(params.elementId);

    getSingleListing('users', props.uid).then(res => {
      // console.log(res);
      setUserInfo(res);

      setUserInfo(res.data);

    });

    getInfoForEdit(params.elementId, 'vacancies').then(res => {
      setGetInfo(res);
    });
  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {

    const addUserInfo = { ...props.dataForm.values, userInfo };
    console.log('save in account ', addUserInfo);
    saveInfo(addUserInfo, params.elementId, 'vacancies');
  }

  /* сохранение данных пользователя */



  return (
    <>

      <TemplateAccount title="Редкатировать вакансию" >
        <RenderFormAccount
          btnSaveText="Сохранить изменения"
          objFields={props.fieldsVacancies}
          orderFields={props.fieldsVacancies.order}
          initialValues={getInfo ? getInfo : null}
          onSubmitProps={onSubmitIn}
        />
      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  // console.log('state', state)
  return {
    uid: state.accountInfo.uid,
    fieldsVacancies: state.fieldsVacancies, // база полей
    // getInfoAccount: state.getInfoAccountReducer.getInfoVacancies, // полученные данные с сервера
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(VacanciesEdit);