import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import EditNote from "./pages/EditNote.jsx";
// import dummynotes from "./dummynotes";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/createnote"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/editnote/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
