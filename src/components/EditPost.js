// import React, { useState, useEffect} from 'react';
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";


// const EditPost = ({ post, onEdit }) => {

//   const [userId, setUserId] = useState("");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   useEffect(() => {
//     setUserId(post.userId);
//     setTitle(post.title);
//     setBody(post.body);
// }, []);


//   const [formData, setFormData] = useState({
//     title: post.title,
//     userId: post.userId,
//     body: post.body
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   }

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
//         method: 'PUT',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await res.json();
//       onEdit(post.id, data);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//     <FormGroup>
//       <Label for="title">Title</Label>
//       <Input
//         type="text"
//         name="title"
//         placeholder="Edit Title"
//         value={title}
//         onChange={handleChange}
//       />
//     </FormGroup>
//     <FormGroup>
//       <Label for="content">ID</Label>
//       <Input
//         type="textarea"
//         name="ID"
//         placeholder="Edit ID"
//         value={userId}
//         onChange={handleChange}
//       />
//     </FormGroup>
//     <FormGroup>
//       <Label for="post">Post</Label>
//       <Input
//         type="text"
//         name="post"
//         placeholder="Edit Post"
//         value={body}
//         onChange={handleChange}
//       />
//     </FormGroup>
    
//        <Button type="submit">Save Changes</Button>
//   </Form>
//   );
// }

// export default EditPost;

