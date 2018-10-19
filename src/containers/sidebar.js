import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/sidebar';

const mapStateToProps = () => state => ({
  user: state.login.authorization.user,
});

export default connect(mapStateToProps)(Sidebar);
