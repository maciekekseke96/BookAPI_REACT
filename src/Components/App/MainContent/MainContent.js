import React from "react";
import Book from "./Book/Book";
import "./MainContent.scss";

function MainContent(props) {
  return (
    <div className="mainContentContainer">
      <ul>
        {props.books.map((book, index) => {
          if (index < props.maxResults) {
            return <Book book={book} key={index} />;
          }
        })}
      </ul>
    </div>
  );
}

export default MainContent;
