import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    {
      name: "Shinzo",
      age: 10
    },
    {
      name: "Taro",
      age: 100
    },
    {
      name: "Hoge",
      age: 1223
    }
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = props => {
  return (
    <div>
      Hi, I am {props.name}, {props.age} years old !
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default App;
