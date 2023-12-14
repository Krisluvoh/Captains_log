const React = require('react');
const dayjs = require('dayjs');

class Show extends React.Component {
  render() {
    return (
      <div>
        <h1>Show Log</h1>
        {}
        <a href="/logs">Back to Index</a>
      </div>
    );
  }
}

module.exports = Show;
