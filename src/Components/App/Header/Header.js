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
        <button
          onClick={(event) => {
            event.preventDefault();
            if (props.searchingAuthor === "" && props.searchingTitle === "") {
              alert("Please fill at least one search parameter");
            } else {
              props.findBooks();
            }
          }}
        >
          Search
        </button>
        <button onClick={(event)=> {
          event.preventDefault();
          props.setSearchingAuthor("");
          props.setSearchingTitle("");
          props.setBooksFound(false);
        }}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Header;
