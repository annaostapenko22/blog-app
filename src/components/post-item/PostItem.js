import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PostLink = styled(NavLink)`
  text-decoration: none;
  color: #280c5c;
  :hover {
    color: #7d48de;
  }
`;
const DeleteBtn = styled.button`
  color: #fff;
  border: none;
  background-color: #dc3545;
  border-color: solid 2px #dc3545;
  padding: 10px;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  border-radius: 5px;
  :hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;

const PostItem = ({ items, handleDelete }) => (
  <li key={items.id}>
    <PostLink to={`/posts/${items.id}`}>
      <h3>{items.title}</h3>
      <p>{items.body}</p>
    </PostLink>
    <DeleteBtn type="button" onClick={handleDelete}>
      delete
    </DeleteBtn>
  </li>
);

export default PostItem;
