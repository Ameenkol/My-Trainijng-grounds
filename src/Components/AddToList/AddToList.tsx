import React, { useState } from 'react'
import "../../App.css";
import { IState as Props } from "../../App";

interface IProps {
  invitees: Props["invitees"]
  setInvitees: React.Dispatch<React.SetStateAction<Props["invitees"]>>
}

const AddToList: React.FC<IProps> = ({invitees, setInvitees}) => {
 
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => { 
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if(
        !input.name || !input.age || !input.img
    ) {
      return
    }
  
    setInvitees([
      ...invitees, {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note
      }
    ])

    setInput({
      name: "",
      age: "",
      img: "",
      note: ""
    }) 
  }

  return (
    <div className='AddToList'>
      <input
        type="text"
        placeholder='name'
        className='AddToList-input'
        value={input.name}
        onChange={handleChange}
        name="name"
      />

      <input
        type="text"
        placeholder='Age'
        className='AddToList-input'
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      
      <input
        type="text"
        placeholder='Image url'
        className='AddToList-input'
        value={input.img}
        onChange={handleChange}
        name="img"
        />

      <input
        type="text"
        placeholder='note'
        className='AddToList-input'
        value={input.note}
        onChange={handleChange}
        name="note"
      />

      <button
        className='AddToList-btn'
        onClick={handleClick}
        type="submit"
      >
        Add to Invitee List
      </button>
    </div>
  )
}

export default AddToList
