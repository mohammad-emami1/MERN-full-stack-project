import React, { useState } from "react";
import MarkdownCard from "./MarkdownCard"; // Assuming you have a MarkdownCard component for markdown rendering

// The NoteForm component allows note creation with Markdown preview and tag input
const NoteForm = ({ onSubmit, primaryColor = "#3498db", secondaryColor = "#2ecc71" }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  // Handles form submission to send note data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      // Prepare the note object
      const noteData = {
        title,
        content,
        tags: tags.split(",").map((tag) => tag.trim()),
      };
  
      // Pass the JavaScript object directly to the onSubmit callback
      onSubmit(noteData);
  
      // Reset form fields
      setTitle("");
      setContent("");
      setTags("");
    }
  };
  

  return (
    <div style={formContainerStyles(primaryColor, secondaryColor)}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Create a New Note</h2>

        {/* Title Input */}
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            placeholder="Note title"
          />
        </div>

        {/* Content (Markdown) Input */}
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
            placeholder="Markdown content"
          />
        </div>

        {/* Tags Input */}
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            style={styles.input}
            placeholder="Comma-separated tags (e.g., 'math, science')"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Add Note
        </button>
      </form>

      {/* Markdown Preview */}
      <div style={styles.previewContainer}>
        <h3>Markdown Preview</h3>
        <MarkdownCard title={title} content={content} />
      </div>
    </div>
  );
};

// Form Container Styles with Dynamic Colors
const formContainerStyles = (primaryColor, secondaryColor) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "20px",
  padding: "20px",
  backgroundColor: primaryColor,
  color: secondaryColor,
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

// CSS-in-JS Styling
const styles = {
  form: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    fontSize: "1.5em",
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontSize: "0.9em",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    resize: "vertical",
    height: "100px",
  },
  button: {
    backgroundColor: "#2ecc71",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  previewContainer: {
    flex: "1",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  },
};

export default NoteForm;
