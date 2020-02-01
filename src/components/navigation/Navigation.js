import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.ul`
 display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: flex-start;
   color: black;
   padding: 20px;
   background-color: rgb(255, 255, 255);
   width: 100%;
   box-shadow: 0px 0px 11px 9px rgba(0,0,0,0.19);
   border-radius: 5px;
   margin-bottom: 20px;
`;
const NavigationItem = styled.li`
  margin-right: 30px;
  
`;

const NavigationLink = styled(NavLink)`
   text-decoration: none;
    font-size: 22px;
    font-weight: 800;
    :hover {
    color: rgba(168, 19, 19, 0.7);}
`

const Navigation = () => (

    <Header>
      <NavigationItem>
        <NavigationLink to="/"> Home</NavigationLink>
      </NavigationItem>
      <li>
        <NavigationLink to="/postAdd">Add New Post</NavigationLink>
      </li>
    </Header>
 
);

export default Navigation;
