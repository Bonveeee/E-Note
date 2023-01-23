import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  //fetch posts 
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
    setShowModal(true);
    // Display filtered posts
  //  console.log(filteredPosts)
  };

  return (
    <>
    <Form.Group className="d-flex">
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
    </Form.Group>

    {/* this modal sets the results to appear on top */}
    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {filteredPosts.length ? (
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.id}>
                  <h3>Title: {post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </Modal.Body>
      </Modal>

  </>
  );
};

export default Search;