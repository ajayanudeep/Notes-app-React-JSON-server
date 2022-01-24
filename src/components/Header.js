import React from 'react';
import { useState,useEffect } from 'react';
import { ReactComponent as Notes} from '../assets/notes.svg'


const Header = () => {
  const [notes,setNotes] = useState([])
  useEffect(() => {
    getNotes()
  }, [])
  
  let getNotes = async () =>{
    let response = await fetch("http://localhost:8000/notes");
    let data = await response.json()
    setNotes(data)
  }
  return <div className='header'>
      <Notes className="notesicon" />
      <h1 style={{"marginRight":"20px"}}>
        {notes.length}
      </h1>
  </div>;
};

export default Header;
