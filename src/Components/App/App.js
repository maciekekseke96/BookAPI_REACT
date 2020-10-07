import React, { useState } from "react";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import "./App.scss";

function App() {
  const [booksFound, setBooksFound] = useState([]);
  const [searchingTitle, setSearchingTitle] = useState("Potter");

  const APIKey = "AIzaSyCEUjLfNCaKT3fqgq1WeNqxxVwb14bhDLI";

  const findBooks = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=+intitle:${searchingTitle}&key=${APIKey}`
    )
      .then((resp) => resp.json())
      .then((data) => setBooksFound(data.items));
  };
  return (
    <div className="app">
      <Header findBooks={findBooks} />
      <MainContent books={booksFound} />
    </div>
  );
}

export default App;
