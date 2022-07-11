import { connect } from 'react-redux';
import ActionFn from 'store/actions';

const BtnOpenInvite = (props) => {
  const { listing } = props;
  const openInvitePopup = () => {

    props.ActionFn('OPEN_INVITE_POPUP', { status: 1, currentItem: listing });
  }

  return (
    <>
      <div
        className="btn btn--green"
        onClick={openInvitePopup}
      >
        Откликнулись
      </div>
    </>
  )
}


export default connect(null, { ActionFn })(BtnOpenInvite);