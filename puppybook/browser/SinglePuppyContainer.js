import SinglePuppy from './SinglePuppy';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ selectedPuppy: state.selectedPuppy });

export default connect(mapStateToProps)(SinglePuppy);
