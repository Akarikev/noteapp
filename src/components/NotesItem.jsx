import React from "react";
import { Link } from "react-router-dom";

const NotesItem = ({ note }) => {
  return (
    <Link to={`/editnote/${note.id}`} className="note">
      <h4>
        {note.title.length > 50 ? note.title.substr(0, 50) + "..." : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NotesItem;
