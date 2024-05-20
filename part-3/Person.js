import React from 'react';

class Person extends React.Component {
  render() {
    const { name, age, hobbies } = this.props;
    const displayName = name.length > 8 ? name.substring(0, 6) : name;

    return (
      <div>
        <p>Learn some information about this person</p>
        <p>Name: {displayName}</p>
        <p>Age: {age}</p>
        {age > 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Person;
