const React = require('react');
const dayjs = require('dayjs');

class Show extends React.Component {
  render() {
    const {log} = this.props;
    return (
      <div>
        <h1>Show Page</h1>
        This {title.name} is {log.entry}
        {log.shipIsBroken? 'It is broken' : 'It is not broken:"NOT BROKEN"' }
        <a href="/logs">Back to Index</a>
      </div>
    );
  }
}

module.exports = Show;
