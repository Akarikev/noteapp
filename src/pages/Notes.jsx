import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NotesItem from "../components/NotesItem";
import { useState, useEffect } from "react";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNote, setFilteredNote] = useState(notes);

  const handleSearch = () => {
    setFilteredNote(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) {
          return note;
        }
      })
    );
  };
  useEffect(handleSearch, [text]);

  return (
    <div>
      <section>
        <header className="notes__header">
          {!showSearch && <h2>My Notes</h2>}
          {showSearch && (
            <input
              type="text"
              autoFocus
              placeholder="search note..."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                handleSearch();
              }}
            />
          )}
          <button
            className="btn"
            onClick={() => setShowSearch((prevState) => !prevState)}
          >
            {!showSearch ? <CiSearch /> : <MdClose />}
          </button>
        </header>
        <div className="notes__container">
          {filteredNote.length == 0 && (
            <p className="empty__notes"> no notes found</p>
          )}
          {filteredNote.map((note) => (
            <NotesItem key={note.id} note={note} />
          ))}
        </div>
        <Link to="/createnote" className="btn add__btn">
          <BsPlusLg />
        </Link>
      </section>
    </div>
  );
};

export default Notes;
