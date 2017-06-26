import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text"></input>
        <input type="password"></input>
        <div>
          <button type="submit" value="Submit"></button>
        </div>
      </form>
    )
  }
}

export default RegistrationForm;
