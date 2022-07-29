import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { useParams } from 'react-router-dom';

import { getUserInfo } from 'store/asyncActions/getUserInfo';
import { getInfoForEdit } from 'store/asyncActions/getInfoForEdit';
import { saveInfo } from 'store/asyncActions/saveInfo';


const ResumeEdit = (props) => {

  const [getInfo, setGetInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const params = useParams();

  // console.log('params.elementId', params.elementId)
  /* получение данных пользователя */

  useEffect(() => {
    // props.getInfoVacanciesAction(params.elementId);
    getUserInfo().then(res => {
      console.log('get-user-info', res)
      setUserInfo(res.data);
    });
    getInfoForEdit(params.elementId, 'resume').then(res => {
      setGetInfo(res);
    });
  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    const addUserInfo = { ...props.dataForm.values, userInfo };
    //console.log('save in account ', props.dataForm.values)
    saveInfo(addUserInfo, params.elementId, 'resume');
  }

  /* сохранение данных пользователя */



  return (
    <>

      <TemplateAccount title="Редкатировать вакансию" >
        <RenderFormAccount
          btnSaveText="Сохранить изменения"
          objFields={props.fieldsResume}
          orderFields={props.fieldsResume.order}
          initialValues={getInfo ? getInfo : null}
          onSubmitProps={onSubmitIn}
        />
      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  return {
    fieldsResume: state.fieldsResume, // база полей
    // getInfoAccount: state.getInfoAccountReducer.getInfoVacancies, // полученные данные с сервера
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(ResumeEdit);