import {RECEIVE_PUPPIES, SELECT_PUPPY} from './action-creators';
import {combineReducers} from 'redux';

function allReducer(state = [], action) {
  switch (action.type){
     case RECEIVE_PUPPIES: return action.receivedPuppies;
    default: return state;
  }
}

function singleReducer(state = {}, action){
  switch (action.type){
    case SELECT_PUPPY: return action.selectedPuppy;
    default: return state;
    }
}

export default combineReducers({
    allPuppies: allReducer,
    selectedPuppy: singleReducer});
