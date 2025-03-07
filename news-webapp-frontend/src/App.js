import React from "react";
import { NewsContextProvider } from "./contexts/NewsContext";
import FormSubmit from "./components/FormSubmit";
import "./styles/app.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <NewsContextProvider>
      <FormSubmit />
    </NewsContextProvider>
  );
}

export default App;
