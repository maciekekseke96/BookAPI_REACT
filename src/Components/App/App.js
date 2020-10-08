import React, { useState } from "react";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import LoadingScreen from "./LoadingScreen/LoadingScreen"
import "./App.scss";

function App() {
  const [booksFound, setBooksFound] = useState(false);
  const [searchingTitle, setSearchingTitle] = useState("");
  const [searchingAuthor, setSearchingAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [maxResults, setMaxResults] = useState(10);

  const prepareFetchLink = () => {
    const APIKey = "AIzaSyCEUjLfNCaKT3fqgq1WeNqxxVwb14bhDLI";
    const parametersObject = {
      intitle: searchingTitle,
      inauthor: searchingAuthor,
    };
    let fetchingLink = `https://www.googleapis.com/books/v1/volumes?q=`;

    for (const parameter in parametersObject) {
      if (parametersObject[parameter] !== "") {
        fetchingLink += `+${parameter}:${parametersObject[parameter]}`;
        console.log(fetchingLink);
      }
    }
    fetchingLink += `&maxResults=${maxResults}&key=${APIKey}`;

    return fetchingLink;
  };

  const findBooks = () => {
    setBooksFound(false);
    setIsLoading(true)
    fetch(prepareFetchLink())
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.items);
        setIsLoading(false)
        setBooksFound(data.items);
      });
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
      {booksFound && <MainContent books={booksFound} />}
      {isLoading && <LoadingScreen books={booksFound} />}
    </div>
  );
}

export default App;
