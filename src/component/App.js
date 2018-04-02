import React, { Component } from 'react';
import Password from '../containers/Password';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <Password />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
