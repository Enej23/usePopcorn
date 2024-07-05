import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [moviceRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating onSetRating={setMovieRating} color="blue"></StarRating>
      <p>This movie was rated {moviceRating} </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={10}></StarRating>
    <StarRating></StarRating>
    <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "bad", "Okay", "good", "Amazing"]}
      defaultRating={3}
    ></StarRating>
    <Test></Test> */}
    <App />
  </React.StrictMode>
);
