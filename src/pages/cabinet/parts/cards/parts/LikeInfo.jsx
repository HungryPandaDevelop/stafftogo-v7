import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const LikeInfo = ({ name, link }) => {


  return (
    <div className="resume-info">
      <h2>
        <Link to={link}>
          {name}
        </Link>
      </h2>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    educationList: state.fieldsResume.education.options,
  }
}

export default connect(mapStateToProps)(LikeInfo);