import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Tweets from "./components/Tweets";
import Trends from "./components/Trends";

function App() {
  return (
    <div className="twitter">
      <Sidebar />
      <Tweets />
      <Trends />
    </div>
  );
}

export default App;
