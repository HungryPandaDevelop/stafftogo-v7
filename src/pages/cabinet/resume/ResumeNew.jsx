import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';

import { connect } from 'react-redux';

import { getUserInfo } from 'store/asyncActions/getUserInfo';

import { addResume } from 'store/asyncActions/addResume';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import RenderFormAccount from 'components/forms/RenderFormAccount';


const ResumeNew = (props) => {

  const [userInfo, setUserInfo] = useState({});

  const auth = getAuth();
  const navigate = useNavigate();

  const isMounted = useRef(true);

  // проверка залогинен ли 
  useEffect(() => {

    getUserInfo().then(res => {
      setUserInfo(res.data);
    });

    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigate('/authorization')
        }
      })
    }

    return () => {
      isMounted.current = false
    }

  }, [isMounted]);
  // проверка залогинен ли

  // добовление вакансии

  const onSubmitIn = () => {
    const addUserInfo = { ...props.dataForm.values, userInfo };
    // console.log(props.dataForm.values)
    addResume(addUserInfo);

  }



  return (
    <>
      <TemplateAccount title="Создание резюме" >
        <RenderFormAccount
          btnSaveText="Добавить резюме"
          objFields={props.fieldsResume}
          orderFields={props.fieldsResume.order}
          initialValues={props.getInfoAccount ? props.getInfoAccount : null}
          onSubmitProps={onSubmitIn}
        />
      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  const formReducer = state.form && state.form.singleInput;

  return {
    fieldsResume: state.fieldsResume, // база полей
    // getInfoAccount: state.getInfoAccountReducer.getInfoAccount, // полученные данные с сервера
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(ResumeNew);