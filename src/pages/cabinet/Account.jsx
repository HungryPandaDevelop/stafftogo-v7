import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { sendUserInfo } from 'store/asyncActions/sendUserInfo';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

import ActionFn from 'store/actions';

const Account = ({
  ActionFn,
  uid,
  dataForm,
  fieldsEmployersAccount,
  fieldsApplicantsAccount,
}) => {


  const [loadingInfo, setLoadingInfo] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const [fieldsAccount, setFieldsAccount] = useState({});


  /* получение данных пользователя */

  useEffect(() => {

    getSingleListing('users', uid).then(res => {
      // console.log(res);
      setUserInfo(res);

      if (res.typeCabinet === 'vacancies') {
        setFieldsAccount(fieldsEmployersAccount);
      } else {
        setFieldsAccount(fieldsApplicantsAccount);
      }

      setLoadingInfo(false);
    });

  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    //console.log('save in account ', props.dataForm.values)

    sendUserInfo(dataForm.values, uid);
  }


  /* сохранение данных пользователя */



  return (
    <>
      <TemplateAccount title="Учетная запись компании" >

        {loadingInfo ? 'Loading account...' : (
          <RenderFormAccount
            btnSaveText="Сохранить изменения"
            objFields={fieldsAccount}
            orderFields={fieldsAccount.order}
            initialValues={userInfo}
            onSubmitProps={onSubmitIn}
          />
        )}


      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  return {
    fieldsEmployersAccount: state.fieldsEmployersAccount, // база полей
    fieldsApplicantsAccount: state.fieldsApplicantsAccount, // база полей
    dataForm: formReducer,
    uid: state.accountInfo.uid,
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(Account);