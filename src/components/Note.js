import React,{useState,useEffect} from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import { ReactComponent as GoBack} from '../assets/goback.svg'


const Note = () => {
    let [note,setNote] = useState(null);
    const { id } = useParams(); 
    const history= useNavigate();
    console.log(id);
    let getNote = async () => {
        if(id==="new") return 
        let response = await fetch(`http://localhost:8000/notes/${id}`);
        let data = await response.json();
        console.log(data);
        setNote(data);
    }
    useEffect(() => {
        getNote();
    }, [id])
    let createNote = async () => {
        await fetch(`http://localhost:8000/notes/`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...note,"created":new Date(),"updated":""})
        })
    }
    let updateNote = async () => {
        await fetch(`http://localhost:8000/notes/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...note,"updated":new Date()})
        })
    }
    let deleteNote = async () => {
        await fetch(`http://localhost:8000/notes/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
        history('/')
    } 
    let handleSubmit = () => {
        if(id!=="new" && !note.body){
            deleteNote()
        }
        else if(id!=="new"){
            updateNote()
        }
        else if(id==="new" && note!==null){
            createNote()
        }
        history('/')
    } 

    return <div>
        <div className='head'>
            <Link style={{"fill":"#E83F2C"}} to="/">
                <GoBack onClick={handleSubmit} />
            </Link>
            {id==="new"?
            (<button onClick={handleSubmit}>Done</button>):
            (<button onClick={deleteNote}>Delete</button>)
            }
        </div>
        <div className='note'>
            <textarea onChange={(e) => {setNote({...note,'body':e.target.value})}} value={note?.body}></textarea>
        </div>
    </div>;
};

export default Note;
