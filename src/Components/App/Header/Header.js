import React, { useState } from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="headerContainer">
      <h1>Let's find your books!</h1>
      <div className="searchParameters">
        <label>Title</label>
        <input
          type="text"
          value={props.searchingTitle}
          placeholder="Title"
          onChange={(event) => props.setSearchingTitle(event.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          value={props.searchingAuthor}
          placeholder="Author"
          onChange={(event) => props.setSearchingAuthor(event.target.value)}
        />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;
