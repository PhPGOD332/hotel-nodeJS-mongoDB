import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";


const Header = (props) => {

	return (
		<header className="header">
			<Logo/>
			{props.children}
			<div className="search-block">
				<svg className="search-icon" width="14" height="14" viewBox="0 0 15 15" fill="none"
				     xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13.5642 14.3392L8.80167 9.57587C6.68306 11.0821 3.7637 10.7137 2.08573 8.72831C0.407761 6.74296 0.53097 3.80303 2.36917 1.96504C4.20689 0.126242 7.14711 0.00250036 9.13283 1.68038C11.1185 3.35827 11.4872 6.27791 9.98084 8.3967L14.7433 13.16L13.565 14.3384L13.5642 14.3392ZM5.90417 2.16669C4.32392 2.16634 2.96058 3.2756 2.63957 4.8229C2.31855 6.3702 3.1281 7.93026 4.57807 8.55857C6.02804 9.18687 7.71992 8.71073 8.62937 7.41841C9.53883 6.1261 9.41589 4.3728 8.335 3.22004L8.83917 3.72004L8.27084 3.15337L8.26084 3.14337C7.63733 2.51602 6.78867 2.16431 5.90417 2.16669Z"
						fill="white"/>
				</svg>
				<span className="search-text">Найти</span>
			</div>
		</header>
	)
}

export default Header;