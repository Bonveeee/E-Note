import { useState , useEffect} from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { FaThumbsUp } from "react-icons/fa";
import EditPost from "./EditPost";
import Pagination from  "./Pagination"

const Posts = ({ posts, onDelete, onEdit }) => {
  //sorts the data to most recent id which will then be mapped
  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  const [editMode, setEditMode] = useState(null);
  const [editingPostId, setEditingPostId] = useState(null);
  
  //enabling event handlers for edit button
  const handleEdit = (id, updatedPost) => {
    setEditMode(id);
    setEditingPostId(id);
  };

  const handleCancel = () => {
    setEditMode(null);
    setEditingPostId(null);
  };

  const handleSaveChanges = () => {
    setEditMode(true);
    setEditingPostId(null);
  };

  //state variables for card-styles
  const [isHovered, setIsHovered] = useState(false);

//pagination
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(21);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  
  // Get current posts
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // return data in a container
  return (
    <>
      <Container
        className="mt-2"
        style={{ overflowY: "scroll", height: "500px" }}
      >
        <h1
          style={{
            borderRadius: "5px",
            margin: " 0px 20px 10px 25%",
            border: "2px solid blue",
            width: "50%",
            textAlign: "center",
            className: "mx-center",
          }}
        >
          Available Posts
        </h1>
        <Row>
          {currentPosts.map((post, index) => (
            <Col xs={12} md={4} key={post.id}>
              {/* the post will be displayed in a card format */}
              <Card
                style={{
                  borderRadius: "10px",
                  marginBottom: "20px",
                  border: "2px solid blue",
                  width: "100%", height: "auto"
                }}
                className={`card-container ${isHovered ? "hovered" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CardBody>
                  <CardTitle
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Title: {post.title}
                  </CardTitle>
                  <CardSubtitle>
                    <h4
                      style={{
                        fontSize: "1.5em",
                        fontWeight: "500",
                        textAlign: "left",
                      }}
                    >
                      Writer-ID: {post.userId}
                    </h4>
                  </CardSubtitle>
                  <CardSubtitle>
                    <p
                      style={{
                        fontSize: "1.5em",
                        fontWeight: "500",
                        textAlign: "left",
                      }}
                    >
                      Post:
                      <br />
                    </p>
                    <span> {post.body}</span>
                  </CardSubtitle>

                  <Stack direction="horizontal" gap={4}>
                    <button
                      variant="outline-dark"
                      size="lg"
                      style={{
                        fontWeight: "bold",
                        borderRadius: "10px",
                        padding: "5px 7px",
                        background:
                          "linear-gradient(to right, #00c6ff, #0072ff)",
                        boxShadow: "2px 2px 5px #ccc",
                        color: "#fff",
                      }}
                      onClick={() => {
                        handleEdit(post.id);
                        setEditingPostId(post.id);
                      }}
                    >
                      Edit
                    </button>

                    {editMode && editingPostId === post.id ? (
                      <EditPost
                        post={post}
                        onEdit={handleEdit}
                        onCancel={handleCancel}
                        onSave={handleSaveChanges}
                      />
                    ) : null}
                    <Button
                      variant="outline-dark"
                      size="sm"
                      style={{
                        padding: "5px 5px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        background:
                          "linear-gradient(to right, #00c6ff, #0072ff)",
                      }}
                      onClick={() => onDelete(post.id)}
                    >
                      Delete
                    </Button>
                    <div className="vr" />
                    {/* 
 like and unlike buttons */}
                    <Button
                      style={{
                        backgroundColor: post.isClicked
                          ? "blue"
                          : "defaultColor",
                      }}
                    >
                      <FaThumbsUp />
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Pagination 
    itemsPerPage={itemsPerPage} 
    totalItems={data.length} 
    paginate={paginate} 
    currentPage={currentPage}
    />
   </>
  );
};

export default Posts;