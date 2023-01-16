import { Container, Row, Col, Stack } from "react-bootstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
// import Post from "./Post";
// import EditPost from "./EditPost";


const Posts = ({ posts, onDelete, onToggle, onEdit }) => {

  // return data in a container
  return (
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
        Your Posts
      </h1>
      <Row>
        {posts.map((post, index) => (
          <Col xs={12} md={4} key={index}>
          {/* the post will be displayed in a card format */}
            <Card
              style={{
                borderRadius: "10px",
                marginBottom: "20px",
                border: "2px solid blue",
              }}
            >
              <CardBody>
                <CardTitle>
                  <h4 style={{textAlign: "center"}}>Title: {post.title}</h4>
                </CardTitle>
                <CardSubtitle><h5>ID: {post.userId}</h5></CardSubtitle>
                <CardSubtitle><h5>Post:</h5><span> {post.body}</span></CardSubtitle>

                <Stack direction="horizontal" gap={3}>
                <Button 
                onClick={() => onEdit(post.id)}
                >Edit</Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(post.id)}
                  >
                    Delete
                  </Button>
                  <div className="vr" />
                  {/* 
 like and unlike buttons */}
                  <Button
                    style={{
                      backgroundColor: post.isClicked ? "blue" : "defaultColor",
                    }}
                  >
                    <FaThumbsUp />
                  </Button>
                  <Button>
                    <FaThumbsDown />
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
