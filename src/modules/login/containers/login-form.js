import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/login-form/login-form';
import { signIn } from '../actions/authorization';

const mapStateToProps = state => ({
  message: state.authorization.message,
})

const mapDispatchToProps = dispatch => ({
  dispatchSignIn: bindActionCreators(signIn, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
