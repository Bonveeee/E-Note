import { Container, Row, Col, Form, Stack } from "react-bootstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import {FaThumbsUp} from 'react-icons/fa';
import Note from "./Note";

const Posts = ({ posts, onDelete, onToggle, onEdit }) => {
  // return data in form of card
  return (
    <Container mt-2>
      <Row>
        {posts.map((note, index) => (
          <Col xs={6} md={4} key={index}>
            <Card>
              <CardBody>
                <CardTitle>
                  <h5>Title: {note.title}</h5>
                </CardTitle>
                <CardSubtitle>ID: {note.userId}</CardSubtitle>
                <CardSubtitle>Post: {note.body}</CardSubtitle>
                {/* <CardText>
                  <p>{note.content}</p>
                </CardText> */}
                {/* <div className="note-actions">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={note.reminder}
                      onChange={() => onToggle(note.id)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div> */}
                <Stack direction="horizontal" gap={3}>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(note.id)}
                  >
                    Delete
                  </Button>
                  <div className="vr" />
                  <Button size="sm" onClick={onEdit}>
                    Edit
                  </Button>
                 
                  <Button>
                    <FaThumbsUp />
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
