const React = require('react');
const dayjs = require('dayjs');

class Index extends React.Component {
  render() {
    const { logs } = this.props;
     // const logs = this.props.logs;

    return (
      <div>
        <h1>Logs Index</h1>
        <nav>
                    <a href="/logs/new">Create a New Log</a>
                </nav>
                <ul>
                {logs.map((log, i) => {
                        return (
                            <li>
                                This {' '}
                                <a href={`/logs/${log._id}`}>
                                    {log.name}
                                </a> {' '}
                                is {log.entry} <br></br>
                                {log.shipIsBroken
                                ? `It is broken`
                            :   `It is not broken:"NOT BROKEN"`}
                            <br />
                            <a href={`/logs/${log._id}/edit`}> Edit This Log </a>
                            <form action={`logs/${log._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;


       