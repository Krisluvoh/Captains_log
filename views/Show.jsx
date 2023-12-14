const React = require('react');
const moment = require('moment');

class Show extends React.Component {
  render() {
    return (
      <div>
        <h1>Show Log</h1>
        {/* Render log details here */}
        <a href="/logs">Back to Index</a>
      </div>
    );
  }
}

module.exports = Show;
