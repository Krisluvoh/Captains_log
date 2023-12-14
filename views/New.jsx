const React = require('react');
const dayjs = require('dayjs');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a New Log</h1>
        <form action="/logs" method="POST">
          <label>Title: </label>
          <input type="text" name="title" /><br/>
          <label>Entry: </label>
          <textarea name="entry"></textarea><br/>
          <label>Ship is Broken: </label>
          <input type="checkbox" name="shipIsBroken" /><br/>
          <input type="submit" value="Create Log" />
        </form>
      </div>
    );
  }
}

module.exports = New;
