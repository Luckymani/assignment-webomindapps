import React from "react";
import "../styles/HomePage.css";

function HomePage() {
	return (
		<section className="home-page">
			<div className="left-image">
				<div className="background-circle"></div>
				<img className="dog-image" src={"/Assets/dog.png"} alt="dog-image"></img>
				<img className="leaves-white" src={"/Assets/leaves-white.svg"} alt="style leaves"></img>
			</div>
			<div className="right-content">
				<div className="wrapper">
					<h1 className="headding">Adult dog meal </h1>
					<p>traditional dog food leaves an environmental mess. The good boy formulated to care for the planet as well as you care for your dog.</p>
					<button> Order now</button>
					<img className="leaves-white" src={"/Assets/leaves-white.svg"} alt="style leaves"></img>
				</div>
			</div>
		</section>
	);
}

export default HomePage;
