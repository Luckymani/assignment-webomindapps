import React from "react";
import "../styles/Meals.css";
import SubMeal from "./SubMeal";

function Meals() {
	return (
		<section className="meals">
			<div className="style-img">
				<img src={"/Assets/leaves-green.svg"} alt="style leaves images"></img>
			</div>
			<div className="meal-image-wrapper">
				<SubMeal value={{ img: "/Assets/meal1.png", name: "Puppy meal", vector: "/Assets/vector1.svg" }}></SubMeal>
				<SubMeal value={{ img: "/Assets/meal2.png", name: "Adult meal", vector: "/Assets/vector2.svg" }}></SubMeal>
				<SubMeal value={{ img: "/Assets/meal3.png", name: "Treats", vector: "/Assets/vector3.svg" }}></SubMeal>
			</div>
		</section>
	);
}

export default Meals;
