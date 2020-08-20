import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Saki", age: 17},
    { name: "Natu", age: 15},
    { name: "NoAge", age: 88},
    { age: 100}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
  <div>
    <ul>
      <li>Hi, I am {props.name} and {props.age} years old! </li>
    </ul>
  </div>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
