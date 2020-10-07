import React, { useState, useEffect } from "react";
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import "./App.scss";

function App() {

  return (
    <div className="app">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
