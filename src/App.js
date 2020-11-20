import React, { Component } from 'react';
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

class App extends Component {

  state = {
    notes: [
      {
        id: 1,
        note: 'Hello, world!'
      },
    ]
  }

  render() {
    const {notes} = this.state;

    return (
      <AmplifyAuthenticator>
        <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
          <h1 className="code f2-l">Amplify Notetaker</h1>
          {/* Note Form */}
          <form className="mb3">
            <input type="text" className="pa2 f4" placeholder="Write your note" />
            <button className="pa2 f4" type="submit">Add Note</button>
          </form>

          {/* Notes List */}
          <div>
            {notes.map(item => (
              <div key={item.id} className="felx items-center">
                <li className="list pa1 f3">
                  {item.note}
                </li>
                <button className="bg-transparent bn f4"><span>&times;</span></button>
              </div>
            ))}
          </div>
        </div>
        <AmplifySignOut />
      </AmplifyAuthenticator>
    );
  }
}

export default App;
