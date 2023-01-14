import { Container, Row, Col } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import Note from "./Note";

const Notes = ({ notes, onDelete, onToggle, onEdit }) => {

// return data in form of card
  return (
    <Container mt-2>
      <Row>
        {notes.map((note, index) => (
          <Col xs={12} sm={6} md={4} key={index}>
            <Card className={`note ${note.reminder ? "reminder" : ""}`}>
              <CardBody>
                <Button size="sm" onClick={onEdit}>
                  Edit
                </Button>
                <CardTitle>
                  <h5>Title: {note.title}</h5>
                </CardTitle>
                <CardSubtitle>Category: {note.category}</CardSubtitle>
                <CardText>
                  <p>{note.content}</p>
                </CardText>
                <div className="note-actions">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={note.reminder}
                      onChange={() => onToggle(note.id)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(note.id)}
                >
                  Delete
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Notes;
