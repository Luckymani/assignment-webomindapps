import React from "react";
import "../styles/Aditionalpage.css";

function AditionalPage() {
	return (
		<section className="aditional-page">
			<div className="comp-wrapper">
				<div className="left-content">
					<h1>
						Made by Hoomans <br />
						Loved By Dogs
					</h1>
					<ul className="specifications">
						<li>oxo biodegradable packing-environmental friendly </li>
						<li>Trail Weekly & Monthly subscription at offordable prices</li>
						<li>Made fresh from oil human grade ingredients</li>
						<li>pre portioned & coustomized meal plans for evey pet</li>
						<li>Gently hand cooked & loaded with superfoods. </li>
						<li>Fresh and Nutritionst certified. </li>
						<li>No added preservations </li>
						<li>we don't make dog 'food' we cook real food for dogs</li>
					</ul>
				</div>
				<div className="right-image">
					<div className="background-circle"></div>
					<img className="dog-image" src={"/Assets/black-dog.png"} alt="dog image"></img>
				</div>
			</div>
		</section>
	);
}

export default AditionalPage;
