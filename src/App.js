import './App.css';
import Header from './components/Header';
import List from './components/List';
import Note from './components/Note';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className='container'>
    <Router>
      <div className="app">
        <Header>          
        </Header>
	      <Routes>
          <Route path='/' element={<List />} />
          <Route path='note/:id' element={<Note />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;