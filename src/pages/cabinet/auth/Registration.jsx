import { useState } from 'react';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { connect } from 'react-redux';

import { registrationAccount } from 'store/actions/registrationAccount';

// import { registrationAccount } from 'actions';

const Registration = (props) => {


  const onSubmitIn = () => {

    if (props.formData) {
      registrationAccount(props.formData);

    }
    else {
      console.log('error')
    }
  }

  return (
    <>

      <div className="content">

        <div className="main-full">
          <h1>Регистрация</h1>
          <RenderFormAccount
            btnSaveText="Регистрация"
            objFields={props.fieldsRegistration}
            orderFields={props.fieldsRegistration.order}
            onSubmitProps={onSubmitIn}

          />
        </div>
      </div>

    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  return {
    fieldsRegistration: state.fieldsRegistration, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps)(Registration);
