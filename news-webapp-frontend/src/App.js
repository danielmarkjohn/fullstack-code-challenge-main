import React from "react";
import { NewsContextProvider } from "./contexts/NewsContext";
import News from "./components/News";
import "./styles/app.css";

function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;
