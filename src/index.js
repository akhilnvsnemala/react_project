import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var currentTime = new Date();
var curHour = currentTime.getHours();
// var curHour = "18";
var wishMsg = "";
var displayColor = "";
if (12 > curHour) wishMsg = "Good morning";
else if (18 > curHour) wishMsg = "Good Afternoon";
else if (24 > curHour) wishMsg = "Good Evening";

if (wishMsg === "Good morning") displayColor = "red";
else if (wishMsg === "Good Afternoon") displayColor = "green";
else if (wishMsg === "Good evening") displayColor = "blue";
console.log(curHour, wishMsg, displayColor);

const colorDisplay = {
  color: displayColor
};
function App() {
  return (
    <div className="App">
      <h1 style={colorDisplay}>{wishMsg}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
