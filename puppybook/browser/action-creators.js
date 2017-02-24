import axios from 'axios';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const SELECT_PUPPY = 'SELECT_PUPPY';


//sync action creators
export const receivePuppies = (puppies) => {
    return {
        type: RECEIVE_PUPPIES,
        receivedPuppies: puppies
    };
};
export const selectPuppy = (puppy) => {
    return {
        type: SELECT_PUPPY,
        selectedPuppy: puppy
    };
};


//thunk action creators
export const fetch = () => {
    return (dispatch) => {
        axios.get('/api/puppies')
        .then((res) => res.data)
        .then((puppies) => {
            dispatch(receivePuppies(puppies));
        })
        .catch(function (err) {
            console.error(err);
        });
    };
};

export const fetchOne = (puppyId) => {
    return (dispatch) => {
        axios.get(`/api/puppies/${puppyId}`)
        .then((res) => res.data)
        .then((puppy) => {
            dispatch(selectPuppy(puppy));
        })
        .catch(function (err) {
            console.error(err);
        });
    };
};
