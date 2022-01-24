import React,{useEffect, useState} from 'react';
import ListItem from './ListItem';
import { ReactComponent as Add } from '../assets/add.svg';
import {Link} from 'react-router-dom';



const List = () => {
  let [notes,setNotes] = useState([]);

  useEffect(() => {
    getNotes()  
  }, [])

  let getNotes = async () =>{
    let response = await fetch("http://localhost:8000/notes");
    let data = await response.json()
    setNotes(data)
  }
  return <div className='titles'>
          <div className='notes'>
              {notes.map(note => (<ListItem item={note} key={note.id} />))}
              <Link className='AddButton' to="/note/new/">
                <Add className='addButton' style={{"fill":"#323232"}} />
              </Link>
          </div>
  </div>;
};

export default List;
