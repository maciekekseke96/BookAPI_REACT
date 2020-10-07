import React, { useState } from "react";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import "./App.scss";

function App() {
  const [booksFound, setBooksFound] = useState([]);
  const [searchingTitle, setSearchingTitle] = useState("");
  const [searchingAuthor, setSearchingAuthor] = useState("");

  const APIKey = "AIzaSyCEUjLfNCaKT3fqgq1WeNqxxVwb14bhDLI";

  const findBooks = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=+intitle:${searchingTitle}+inauthor:${searchingAuthor}&key=${APIKey}`
    )
      .then((resp) => resp.json())
      .then((data) => setBooksFound(data.items));
  };
  return (
    <div className="app">
      <Header
        findBooks={findBooks}
        searchingTitle={searchingTitle}
        setSearchingTitle={setSearchingTitle}
        searchingAuthor={searchingAuthor}
        setSearchingAuthor={setSearchingAuthor}
      />
      <MainContent books={booksFound} />
    </div>
  );
}

export default App;
