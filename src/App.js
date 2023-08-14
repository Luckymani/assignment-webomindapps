import React from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Meals from "./components/Meals";
import AditionalPage from "./components/AditionalPage";

function App() {
	return (
		<div className="App">
			<Navigation></Navigation>
			<HomePage></HomePage>
			<Meals></Meals>
			<AditionalPage></AditionalPage>
		</div>
	);
}

export default App;
