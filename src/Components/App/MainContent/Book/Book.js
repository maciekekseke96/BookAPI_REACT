import React from "react";
import "./Book.scss";

function Book(props) {
  let imgStyle = {
    width: "120px",
    height: "180px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };
  if (props.book.volumeInfo.imageLinks) {
    imgStyle = {
      ...imgStyle,
      background: `url("${props.book.volumeInfo.imageLinks.smallThumbnail}")`,
    };
  } else {
    imgStyle = {
      ...imgStyle,
      background: "white",
    };
  }
  return (
    <div className="book">
      <div className="imgContainer">
        <div className="img" style={imgStyle}></div>
      </div>
      <div className="descriptionContainer">
        <h4>{props.book.volumeInfo.title}</h4>
        {props.book.searchInfo && (
          <p
            dangerouslySetInnerHTML={{
              __html: props.book.searchInfo.textSnippet,
            }}
          ></p>
        )}
        {!props.book.searchInfo && <h3>Description Unknown</h3>}
      </div>
    </div>
  );
}

export default Book;
