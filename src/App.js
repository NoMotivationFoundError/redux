import React from "react";

const App = () => {
  const profiles = [
    {
      name:"Shinzo",
      age: 10,
    },
    {
      name:"Taro",
      age: 100,
    },
    {
      name: 'hoge'
    }
  ];
  return <div>
        {
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index} />
          })
        }
        </div>
};

const User = (props) => {
  return <div>
    Hi, I am {props.name}, {props.age} years old !
  </div>;
};

User.defaultProps = {
  age : 1
}

export default App;
