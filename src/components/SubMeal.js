import React from "react";
import "../styles/Meals.css";

function SubMeal(props) {
	return (
		<div className="single-meal">
			<img src={props.value.img} alt="dog images"></img>
			<img className="vector" src={props.value.vector} alt="vector images"></img>
			<div className="content">
				<h1>{props.value.name}</h1>
				<button className="button">Shop now</button>
			</div>
		</div>
	);
}

export default SubMeal;
