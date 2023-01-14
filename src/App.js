import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
//import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([]);

  //fetches data from mock local api using async  GET
  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes();
      setNotes(notesFromServer);
    };
    getNotes();
  }, []);

  //fetch notes READ
  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5000/notes");
    const data = await res.json();

    return data;
  };

  //add Note POST
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

  //Delete Task
  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    });

    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg" className="justify-content-between">
        <Navbar.Brand href="#home"><h1>E-Note</h1></Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#about">Search</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        {/* <Search /> */}
        <AddNote onAdd={addNote} />
        <Notes notes={notes} onDelete={deleteNote} />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
