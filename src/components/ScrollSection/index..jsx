"use client";

import { useRef, useEffect } from "react";

import "./index.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ScrollSection = () => {
	const horizontalSection = useRef();

	useGSAP(
		() => {
			const slides = gsap.utils.toArray(".horizontal-panel");
			gsap.to(slides, {
				xPercent: -100 * (slides.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: horizontalSection.current,
					pin: true,
					start: "top top",
					end: "+=300%",
					markers: false,
					scrub: true,
				},
			});
		},
		{
			scope: horizontalSection,
		}
	);

	return (
		<section className="horizontal-section" ref={horizontalSection}>
			<div className="horizontal-panel red"></div>
			<div className="horizontal-panel purple"></div>
			<div className="horizontal-panel green"></div>
		</section>
	);
};

export default ScrollSection;
