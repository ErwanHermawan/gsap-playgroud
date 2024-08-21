"use client";

import { useRef, useEffect } from "react";

import "./index.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const ScrollSection = () => {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-300vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
				},
			}
		);
		return () => {
			{
				/* A return function for killing the animation on component unmount */
			}
			pin.kill();
		};
	}, []);

	return (
		<div className="scroll-section-outer">
			<div ref={triggerRef}>
				<div ref={sectionRef} className="scroll-section-inner">
					<div className="scroll-section">
						<h2>Scroll Section 1</h2>
					</div>
					<div className="scroll-section">
						<h2>Scroll Section 2</h2>
					</div>
					<div className="scroll-section">
						<h2>Scroll Section 3</h2>
					</div>
					<div className="scroll-section">
						<h2>Scroll Section 4</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollSection;
