import React from "react";
import "./Header.scss";
import { daryo } from "../../../public/images";

const Header = () => {
	return (
		<header>
			<nav className="container">
				<ul className="navbar-list">
					<div className="logo">
						<img src={daryo} alt="" width={80} height={40}/>
					</div>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Business</a>
					</li>
					<li>
						<a href="">Entertainment</a>
					</li>
					<li>
						<a href="">General</a>
					</li>
					<li>
						<a href="">Health</a>
					</li>
					<li>
						<a href="">Science</a>
					</li>
					<li>
						<a href="">Sports</a>
					</li>
					<li>
						<a href="">Technology</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
