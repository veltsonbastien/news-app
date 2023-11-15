'use client';

import {Articles} from "./components/Articles";

export default function Home() {

  const date = new Date();

  const font = {
    fontFamily: "monospace",
    color: "#222"
  }

  return (
      <div className="App" style={{textAlign: "center"}}>
        <h1 style={font}> Fun Tech News </h1>
        <h3 style={font}> click on a news card to read the full article! </h3>
        <p style={font}> {date.toDateString()} </p>
        <Articles />
        <p style={font}> the tech news archive @ 2058 </p>
      </div>
  );
}
