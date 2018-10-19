import { connect } from 'react-redux';
import Header from '../components/header/header';

const mapStateToProps = () => state => ({
  user: state.login.authorization.user,
  isLoading: state.login.authorization.isLoading,
});

export default connect(mapStateToProps)(Header);
