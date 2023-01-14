// import React, { useState } from 'react';
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";


// const EditNote = ({ note, onEdit }) => {
//   const [formData, setFormData] = useState({
//     title: note.title,
//     content: note.content,
//     category: note.category,
//     reminder: note.reminder
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
//       const res = await fetch(`http://localhost:5000/notes/${note.id}`, {
//         method: 'PUT',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await res.json();
//       onEdit(note.id, data);
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
//         value={formData.title}
//         onChange={handleChange}
//       />
//     </FormGroup>
//     <FormGroup>
//       <Label for="content">Content</Label>
//       <Input
//         type="textarea"
//         name="content"
//         placeholder="Edit Content"
//         value={formData.content}
//         onChange={handleChange}
//       />
//     </FormGroup>
//     <FormGroup>
//       <Label for="category">Category</Label>
//       <Input
//         type="text"
//         name="category"
//         placeholder="Edit Category"
//         value={formData.category}
//         onChange={handleChange}
//       />
//     </FormGroup>
//     <FormGroup check>
//       <Label check>
//         <Input
//           type="checkbox"
//           name="reminder"
//           checked={formData.reminder}
//           onChange={handleChange}
//         />
//         Edit Reminder
//       </Label>
//     </FormGroup>
//     <Button type="submit">Save Changes</Button>
//   </Form>
//   );
// }

// export default EditNote;

