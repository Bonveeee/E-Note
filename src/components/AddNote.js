import { useState } from "react";
import {Form, Button} from 'react-bootstrap';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [reminder, setReminder] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!content) {
      alert("Please add content for the note");
      return;
     
  }

      if (!title) {
      alert("Please add a title for the note");
      return;
      }
      
      if (!category) {
      alert("Please add a category for the note");
      return;
      }

    onAdd({ title, content, category, reminder });

    setTitle("");
    setContent("");
    setCategory("");
    setReminder("");
  };

  return (
    <Form  onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Add Title</Form.Label>
      <Form.Control type="text" placeholder="title"  value={title}  onChange={(e) => setTitle(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Add Note</Form.Label>
      <Form.Control as="textarea" rows={3}  placeholder="write your note"  value={content}  onChange={(e) => setContent(e.target.value)}/>
    </Form.Group>

    <Form.Label>Category</Form.Label>
    <Form.Select aria-label="Default select example" value={category}  onClick={(e) => setCategory(e.target.value)}>
      <option>Open this select menu</option>
      <option value="Work">Work</option>
      <option value="Personal">Personal</option>
      <option value="Other">Other</option>
    </Form.Select>

    <Form.Label>Reminder</Form.Label>
    <Form.Check 
        type="switch"
        id="custom-switch"
        value={reminder}
        label="On"
        onChange={(e) => setReminder(e.currentTarget.checked)}
      />
      <Button as="input" type="submit" value="Submit" />{' '}
  </Form>
  
  );
};

export default AddNote;
