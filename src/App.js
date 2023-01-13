import { useState } from "react";
import AddNote from "./components/AddNote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [notes, setNotes] = useState([]);

 //add Note
 const addNote = async (note) => {
  const res = await fetch("http://localhost:5000/notes", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(note),
  });
 
  //new data is added
  const data = await res.json();
  setNotes([...notes, data]);
 };

//delete Task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });

  setNotes(notes.filter((note) => note.id !== id));
};

  return (
    <Router>
      <div className="container">
        <Header
          title="Note Tracker"
        />
        <AddNote onAdd={addNote}/> 
        <Routes>
       <Route path='/about' element={<About />} />
         </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
