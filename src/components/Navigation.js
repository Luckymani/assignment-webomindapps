import React from "react";
import "../styles/Navigation.css";

function Navigation() {
	return (
		<section className="nav-bar">
			<div className="left-side">
				<div className="hamburger">
					<div></div>
					<div></div>
					<div></div>
				</div>

				<div className="logo">
					<img alt="logo image" src={"/Assets/logo.png"}></img>
				</div>
			</div>
			<div className="right-side">
				<ul className="nav-links">
					<li className="link link1">Puppy meal</li>
					<li className="link link2">Adult meal</li>
					<li className="link link3">Treats</li>
				</ul>
				<div className="icons">
					<img alt="mail-icon icon" src={"/Assets/mail.png"}></img>
					<img alt="search-icon icon" src={"/Assets/search.png"}></img>
					<img alt="account-icon icon" src={"/Assets/account.png"}></img>
					<img alt="cart-icon icon" src={"/Assets/cart.png"}></img>
				</div>
			</div>
		</section>
	);
}

export default Navigation;
