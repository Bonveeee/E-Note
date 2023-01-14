import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import Notes from "./Notes";

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = event => {
      setSearchTerm(event.target.value);
  };
  
  const filteredNotes = Notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (   <>
    <Form>
        <FormControl
            type="text"
            placeholder="Search for a note"
            value={searchTerm}
            onChange={handleSearch}
        />
    </Form>
    <Notes notes={filteredNotes}   />
</> )
}

export default Search