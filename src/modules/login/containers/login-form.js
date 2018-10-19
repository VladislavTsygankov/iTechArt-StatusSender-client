import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/login-form/login-form';
import { signIn } from '../actions/authorization';

const mapDispatchToProps = dispatch => ({
  dispatchSignIn: bindActionCreators(signIn, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
