import React from "react";
import { IState as IProps } from "../../App";

import "../../App.css"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Invitee: React.FC<IProps> = ({invitees}) => {
  
  const renderInvitee = (): JSX.Element[] => {
    return (
      invitees.map((invitee, index) => {
        return (
          <li key={index + `${invitee.name}`} className="List">
            <div className="List-header">
              <img className="List-img" src={invitee.url} alt="image" />
              <h2>{ invitee.name }</h2>
            </div>

            <p>{invitee.age} years old</p>
            <p className="List-note">{invitee.note}</p>
            <button
              className="List-remove"
              type="button"
              onClick={() => {
                invitees.pop()
              }}
            >
              Remove
            </button>
          </li>
        )
      })
    )
  }
  
  return (
    <ul>
      {renderInvitee()}
    </ul>
  )
}

export default Invitee