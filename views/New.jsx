const React = require('react');
const dayjs = require('dayjs');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/logs" method="POST">
       Name: <input type="title" name="name" /><br/>
                 Title: <input type="text" name="title" /><br/>
                 Entry: <input type="log" name="entry" /><br/>
                 Is Broken: <input type="checkbox" name="shipIsBroken" /><br/>
                 <input type="submit" name="" value="Create Log"/>
               </form>
           </div>);
       }
     }

   module.exports = New;