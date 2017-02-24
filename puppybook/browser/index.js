'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {fetch, fetchOne} from './action-creators';

//hook to load onto state when app is entered
const onAppEnter = function(){
  //use fech, which returns a function, so you have to invoke it twice. And the returned func takes in dispatch which we pass in here
  fetch()(store.dispatch);
};

//Note that the onEnter hook gives the function passed to it the new state of the Router—this includes params, which will contain our puppyId from the url!
const onSinglePuppyEnter = function(nextRouterState){
  //in thunk creator, fetchOne takes a puppyID, and its return function takes the dispatch
  fetchOne(nextRouterState.params.puppyId)(store.dispatch);
};

ReactDOM.render(
 <Provider store={store} >
  <Router history={hashHistory}>
    <Route path="/" onEnter={onAppEnter}>
      <Route path="puppies" component={AllPuppiesContainer} />
      <Route path="puppies/:puppyId" component={SinglePuppyContainer} onEnter={onSinglePuppyEnter} />
      <IndexRoute component={AllPuppiesContainer} />
    </Route>
  </Router>
 </Provider>,
  document.getElementById('app')
);
