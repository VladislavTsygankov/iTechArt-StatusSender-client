import { connect } from 'react-redux';
import Header from '../components/header/header';

const mapStateToProps = () => state => ({
  user: state.authorization.user,
});

export default connect(mapStateToProps)(Header);
