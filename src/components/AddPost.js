import { useState } from "react";
import { Form, Button, Collapse } from "react-bootstrap";

//this component is mainly for adding posts,  catch  errors and utilizes react bootstrap form
const AddPost = ({ onAdd }) => {
  //state variables
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [open, setOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    //catch error to avoid unwanted blank dummy data
    if (!body || !title) {
      alert("Please add a title and body for the post");
      return;
    }

    if(isNaN(userId)) alert("Please add a correct ID number");


    onAdd({ userId, title, body });

    setUserId("");
    setTitle("");
    setBody("");
    
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        size="sm"
        style={{marginBottom:"10px"}}
      >
        Click to add a Post
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
                rows={4}
                placeholder="write your post"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
           
            <Button as="input" type="submit" value="Submit" size="sm" />{" "}
          </Form>
        </div>
      </Collapse>
    </>
  );
};

export default AddPost;
