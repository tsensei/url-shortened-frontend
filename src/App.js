import React, { useState, useRef } from "react";
import urlServices from "./services/url.js";
import "./App.css";
const App = () => {
  const [shortUrl, setShortUrl] = useState();
  //Development build
  // const baseUrl = useRef("http://localhost:3001");
  //Production build
  const baseUrl = useRef("https://weeurlio.herokuapp.com");
  const urlRef = useRef();
  return (
    <div className="App">
      <header>
        <div>WeeURL.io</div>
        <p>The only URL Shortener you'll ever need</p>
      </header>

      {!shortUrl ? (
        <form
          className="main-form"
          onSubmit={(e) => {
            e.preventDefault();
            urlServices
              .sendUrl(urlRef.current.value)
              .then((code) => setShortUrl(`${baseUrl.current}/${code}`));
          }}
        >
          <input required ref={urlRef} type="text" />
          <button type="submit">Shorten!</button>
        </form>
      ) : (
        <div className="main-form">
          <input readOnly value={shortUrl} type="text" />
          <button
            onClick={(e) => {
              navigator.clipboard.writeText(shortUrl);
              e.target.textContent = "Copied!";
            }}
          >
            Copy
          </button>
        </div>
      )}

      <footer>
        Made with ❤️️ by{" "}
        <a href="https://www.instagram.com/_tsensei_">tsensei</a>
      </footer>
    </div>
  );
};

export default App;
