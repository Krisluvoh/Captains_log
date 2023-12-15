const React = require('react');
const dayjs = require('dayjs');

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1> Edit the Log</h1>
                <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
                    Title: <input type="title" name="name" defaultValue={this.props.log.name} /><br />
                    Entry: <input type="text" name="entry" defaultValue={this.props.log.entry} /><br />
                    shipIsBroken:
                    {this.props.log.shipIsBroken ? <input type="checkbox" name="shipIsBroken" defaultChecked /> : <input type="checkbox" name="It is not broken:NOT BROKEN" />}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </div>

        )
    }
}
module.exports = Edit;