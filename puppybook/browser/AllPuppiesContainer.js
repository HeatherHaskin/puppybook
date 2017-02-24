import AllPuppies from './AllPuppies';
import {connect} from 'react-redux';
import {fetch} from './action-creators';


const mapStateToProps = (state) => ({ allPuppies: state.allPuppies });

const mapDispatchToProps = function(dispatch){
    return {
        loadAllPuppies: function(){
        dispatch(fetch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies);
