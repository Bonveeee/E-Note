import { useState, useEffect } from "react";
import AddNote from "./components/AddPost";
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

  //add POST
  const addPost = async (post) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    //new data is added
    const data = await res.json();
    setPosts([...posts, data]);
  };

  //update
  const editPost = async (post) => {
       
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      setPosts(post.id, data);
   
  }
  //Delete Task
  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg" className="justify-content-between">
        <Navbar.Brand href="#home"><h1 style={{margin:" 10px 20px 10px 10px"}}>E-Post</h1></Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#about">Search</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        {/* <Search /> */}
        <AddNote onAdd={addPost} />
        <Posts posts={posts} onDelete={deletePost} onEdit={editPost} />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
