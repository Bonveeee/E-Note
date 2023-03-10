import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditPost = ({ post, onEdit, onCancel }) => {
  //state variables
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  useEffect(() => {
    setTitle(post.title);
    setUserId(post.userId);
    setBody(post.body);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    post.title = title;
    post.userId = userId;
    post.body = body;
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          method: "PUT",
          body: JSON.stringify(post),
           headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data)
      onEdit(post.id, data);
         console.log(data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          placeholder="Edit Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="userID">ID</Label>
        <Input
          type="text"
          name="ID"
          placeholder="Edit ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="post">Post</Label>
        <Input
          type="text"
          name="post"
          placeholder="Edit Post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </FormGroup>
      <button type="submit" onClick={() => onEdit(post.id, post)}>Save Changes</button>

      <Button
        className="mt-2"
        variant="secondary"
        onClick={() => {
          onCancel();
        }}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default EditPost;