import { useState } from "react";
import { Form, Button, Collapse } from "react-bootstrap";

//this component is mainly for adding notes, it has catch  errors and utilizes react bootstrap form
const AddNote = ({ onAdd }) => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // const [category, setCategory] = useState("");
  // const [reminder, setReminder] = useState("");

  const [open, setOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    //catch error to avoid unwanted dummy data
    if (!body) {
      alert("Please add body for the note");
      return;
    }

    if (!title) {
      alert("Please add a title for the note");
      return;
    }

    if (!userId) {
      alert("Please add a ID for the note");
      return;
    }

    onAdd({ title, body, userId });

    setTitle("");
    setBody("");
    setUserId("");
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        size="sm"
      >
        Click to add Note
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="enter ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="write your note"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={userId}
              onClick={(e) => setUserId(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Other">Other</option>
            </Form.Select>
            <Form.Label>Keep a Reminder?</Form.Label>
            <Form.Check
              type="switch"
              id="custom-switch"
              value={reminder}
              label="On"
              onChange={(e) => setReminder(e.currentTarget.checked)}
            /> */}
            <Button as="input" type="submit" value="Submit" size="sm" />{" "}
          </Form>
        </div>
      </Collapse>
    </>
  );
};

export default AddNote;
