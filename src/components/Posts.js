import { Container, Row, Col, Stack } from "react-bootstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Post from "./Post";


const Posts = ({ posts, onDelete, onToggle, onEdit }) => {

    // return data in form of card
return (
    <Container className="mt-2" style={{ overflowY: 'scroll', height: '500px' }} >
      <h1 className="text-center ">Your Posts</h1>
      <Row>
        {posts.map((post, index) => (
          <Col xs={6} md={4} key={index}>
            <Card style={{borderRadius:"10px",marginBottom:"20px",border:"2px solid blue"}}>
              <CardBody>
                <CardTitle>
                  <h5>Title: {post.title}</h5>
                </CardTitle>
                <CardSubtitle>ID: {post.userId}</CardSubtitle>
                <CardSubtitle>Post: {post.body}</CardSubtitle>
               
                <Stack direction="horizontal" gap={3}>
                  <Button size="sm" onClick={onEdit}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(post.id)}
                  >
                    Delete
                  </Button>
                  <div className="vr" />

                  <Button  style={{ backgroundColor: post.isClicked ? "blue" : "defaultColor" }}>
                    <FaThumbsUp />
                 
                  </Button>
                  <Button >
                
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
