import NoteForm from "./Noteform";
import axios from "axios";

fetch("http://localhost:8001/api/test-db")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching from /api/test-db:", error));

function Addnote() {
  const handleAddNote = async (note) => {
    try {
      // Send a POST request to the backend to save the note
      const response = await axios.post("http://localhost:8001/api/notes", note);
      console.log("Note saved:", response.data);
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <NoteForm onSubmit={handleAddNote} primaryColor="#f39c12" secondaryColor="#e74c3c" />
  );
}

export default Addnote;
