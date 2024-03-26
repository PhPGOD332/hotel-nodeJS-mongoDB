import React from "react";

export default function StartScreen() {

	return (
		<section className="screen start-screen">

			<div className="subscribe-block">
				<span className="subscribe-text">Подпишись</span>
				<div className="icon-block">
					<a href="#" className="subscribe-link">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M7.8 2H16.2C19.4032 2 22 4.59675 22 7.8V16.2C22 19.4033 19.4032 22 16.2 22H7.8C4.59675 22 2 19.4033 2 16.2V7.8C2 4.59675 4.59675 2 7.8 2ZM7.6 3.99998C5.61177 3.99998 4 5.61176 4 7.59998V16.4C4 18.3882 5.61177 20 7.6 20H16.4C18.3882 20 20 18.3882 20 16.4V7.59998C20 5.61176 18.3882 3.99998 16.4 3.99998H7.6ZM17.25 5.49998C17.9404 5.49998 18.5 6.05963 18.5 6.74998C18.5 7.44034 17.9404 7.99998 17.25 7.99998C16.5596 7.99998 16 7.44034 16 6.74998C16 6.05963 16.5596 5.49998 17.25 5.49998ZM12 6.99998C14.7614 6.99998 17 9.23856 17 12C17 14.7614 14.7614 17 12 17C9.23857 17 7 14.7614 7 12C7 9.23856 9.23857 6.99998 12 6.99998ZM12 8.99998C10.3431 8.99998 9 10.3432 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3432 13.6569 8.99998 12 8.99998Z"
								fill="white"/>
						</svg>
					</a>
					<a href="#" className="subscribe-link">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M22.9184 6.01238C22.1488 6.35373 21.3216 6.58442 20.4536 6.68815C21.3395 6.15701 22.0201 5.31598 22.3405 4.31378C21.5112 4.80564 20.5928 5.16278 19.6152 5.3552C18.8324 4.52112 17.7171 4 16.4827 4C14.1126 4 12.1909 5.92147 12.1909 8.29155C12.1909 8.6279 12.2289 8.95546 12.3021 9.2696C8.73532 9.0906 5.57298 7.38203 3.45632 4.78551C3.08688 5.41935 2.87524 6.15656 2.87524 6.94309C2.87524 8.43204 3.63287 9.74563 4.78446 10.5153C4.08102 10.4929 3.41919 10.2999 2.84062 9.97846C2.84021 9.99639 2.84021 10.0143 2.84021 10.0324C2.84021 12.1118 4.31956 13.8463 6.28282 14.2406C5.92272 14.3387 5.54357 14.3912 5.15217 14.3912C4.87563 14.3912 4.60678 14.3642 4.34469 14.3142C4.89084 16.0191 6.47576 17.26 8.35377 17.2945C6.88499 18.4457 5.0345 19.1318 3.02376 19.1318C2.67735 19.1318 2.33574 19.1114 2 19.0717C3.89926 20.2894 6.15514 21 8.57873 21C16.4726 21 20.7894 14.4605 20.7894 8.78918C20.7894 8.60314 20.7852 8.41805 20.7769 8.23395C21.6155 7.62886 22.3431 6.87302 22.9184 6.01238Z"
								fill="white"/>
						</svg>
					</a>
					<a href="#" className="subscribe-link">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_18_288)">
								<path
									d="M14.9917 5.81896H17V2.16196C16.6535 2.11212 15.462 2 14.0742 2C11.1787 2 9.19523 3.90421 9.19523 7.40404V10.625H6V14.7132H9.19523V25H13.1127V14.7142H16.1787L16.6654 10.626H13.1118V7.80942C13.1127 6.62779 13.417 5.81896 14.9917 5.81896Z"
									fill="white"/>
							</g>
							<defs>
								<clipPath id="clip0_18_288">
									<rect width="24" height="24" fill="white"/>
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
			</div>
			<div className="slogan-block">
				<span className="slogan">Насладись незабываемым отдыхом</span>
				<h1 className="title">Космический Отдых</h1>
			</div>
			<div className="scroll-down">
				<span className="scroll-text">Прокрутить вниз</span>
				<svg className="scroll-icon" width="12" height="18" viewBox="0 0 16 24" fill="none"
				     xmlns="http://www.w3.org/2000/svg">
					<path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white"/>
				</svg>
			</div>
		</section>
	)
}