import {setLyrics} from '../action-creators/lyrics';
const initialState = { text: ''};

export function reducer(state = initialState, action){
    switch(action.type){
        case SET_LYRICS:
            return Object.assign({}, state, { text: action.lyrics });
        default:
            return state;

    }
}
