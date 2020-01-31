import React from "react";
import { NavLink } from "react-router-dom";

const PostItem = ({ items, handleDelete }) => (
  <li key={items.id} >
    <NavLink to="/post">
      <h3>{items.title}</h3>
      <p>{items.body}</p>
    </NavLink>
    <button type="button" onClick={handleDelete}>
      DELETE
    </button>
  </li>
);

export default PostItem;
