import { useState } from "react";

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

    onAdd({ title, content, category, reminder });

    setTitle("");
    setContent("");
    setCategory("");
    setReminder("");
  };

  return (
    <form className="add-note-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Content</label>
        <textarea
          placeholder="Add Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="form-control">
        <label>Category</label>
        <input
          type="text"
          placeholder="Add Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Reminder:</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
