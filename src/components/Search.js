import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setPosts] = useState([]);

  //fetch posts READ
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return data;
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    // Get all posts
    const posts = await fetchPosts();

    // Filter posts based on search value
    const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    // console.log(filteredPosts)

    // Update state with filtered posts
    setPosts(filteredPosts);

    // Display filtered posts
 
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Search for a blog-Post"
          className="me-1"
          aria-label="Search"
          style={{ r: "auto" }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button variant="outline-dark" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      {filteredPosts.map((post) => (
        <ul>
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Search;
