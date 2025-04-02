
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://test:test@localhost:27017/notesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));
// Define Note Schema
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
});

const Note = mongoose.model("Note", noteSchema);

// API Endpoint to Add a Note
app.post("/api/notes", async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const note = new Note({ title, content, tags });
    console.log(note)
    await note.save();
    res.status(201).json({ message: "Note added successfully", note });
    console.log(1)
  } catch (error) {
    res.status(500).json({ error: "Failed to add note" });
  }
});


// Start Server
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Test Route to Check Database Connectivity
app.get("/api/test-db", async (req, res) => {
  try {
    // Fetch all notes from the 'notes' collection
    const notes = await Note.find();
    if (notes.length === 0) {
      return res.status(404).json({ message: "No notes found in the database" });
    }
    res.status(200).json({ message: "Database is connected, notes fetched", notes });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: "Failed to fetch notes or check database connection" });
  }
});