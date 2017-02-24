import React from 'react';
import {Link} from 'react-router';

export default class AllPuppies extends React.Component {


  render () {
    const puppies = this.props.allPuppies;
    return (
      <div>
        <div className="container flexbox-container">
          <div className="jumbotron">
            <ul className="list-unstyled">
            {puppies && puppies.map((puppy) => {
              return <li key={puppy.id}><Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>;
            })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
