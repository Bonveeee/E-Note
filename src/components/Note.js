import { FaTimes } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const Note = ({note, onDelete, onToggle}) => {
  return (
    <Card className={`note ${note.reminder ? 'reminder' : ''}`}>
      <Card.Body>
        <Card.Title>
          {note.title}
          <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(note.id)}/>
        </Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <Card.Text>{note.category}</Card.Text>
        <Card.Text onChange={() => onToggle(note.id)} checked={note.reminder}>Reminder:</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Note;
