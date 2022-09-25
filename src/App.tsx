import React, { useState } from 'react';
import Invitee from "./Components/Invitee/Invitee";
import './App.css';
import AddToList from './Components/AddToList/AddToList';

export interface IState {
  invitees: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [invitees, setInvitees] = useState<IState["invitees"]>([
    {
      name: "",
      age: parseInt(""),
      url: "",
      note: ""
    }
  ])
  
  return (
    <div className="App">
      <h1 role="main">List of Invitees to my Party</h1>

      <Invitee invitees={invitees} />

      <AddToList invitees={invitees} setInvitees={setInvitees} />
    </div>
  );
}

export default App;
