import React from "react";
import Book from "./Book/Book";
import "./MainContent.scss";

function MainContent(props) {
  return (
    <div className="mainContentContainer">
      <ul>
        {props.books.map((book, index) => {
          return <Book book={book} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default MainContent;
