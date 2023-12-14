const React = require('react');
const moment = require('moment');

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Logs Index</h1>
        <ul>
        // Add this in the loop rendering logs
<form action={`/logs/${log._id}?_method=DELETE`} method="POST">
  <input type="submit" value="Delete" />
</form>

        </ul>
        <a href="/logs/new">Create a new log</a>
      </div>
    );
  }
}

module.exports = Index;
