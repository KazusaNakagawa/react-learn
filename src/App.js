import React from 'react';

const App = () => {
  const profiles = [
    { name: "Saki", age: 17},
    { name: "Natu", age: 15},
    { name: "NoName",},
    { age: 200}
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

// defaultの値: 引数にない時の値を指定できる
User.defaultProps = {
  name: "Gest",
  age: 0
}

export default App;
