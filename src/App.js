import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import About from "./components/About";
import Contact from "./components/Contact";
// import { Search } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddPost from "./components/AddPost";


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

  //Delete Task
  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/blog"
          element={
            <>
             <AddPost onAdd={addPost} />
            <Posts            
              posts={posts}
              onDelete={deletePost}
              //  onEdit={editPost }
            />
            
             </>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
