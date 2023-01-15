import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
//import Search from "./components/Search";

function App() {
  const [posts, setPosts] = useState([]);

  //fetches data from mock local api using async  GET
  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };
    getPosts();
  }, []);

  //fetch posts READ
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return data;
  };

  //add Note POST
  const addNote = async (note) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });

    //new data is added
    const data = await res.json();
    setPosts([...posts, data]);
  };

  //Delete Task
  const deleteNote = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((post) => post.id !== id));
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
        <Posts posts={posts} onDelete={deleteNote} />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
