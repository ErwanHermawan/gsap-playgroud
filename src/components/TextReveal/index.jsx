"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "./index.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const TextReveal = () => {
	const [lettersRef, setlettersRef] = useArrayRef();
	const triggerRef = useRef(null);

	function useArrayRef() {
		const lettersRef = useRef([]);
		lettersRef.current = [];
		return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
	}

	const text =
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

	useEffect(() => {
		const anim = gsap.to(lettersRef.current, {
			scrollTrigger: {
				trigger: triggerRef.current,
				scrub: true,
				start: "top center",
				end: "bottom 85%",
			},
			color: "#fff",
			duration: 5,
			stagger: 1,
		});
		return () => {
			anim.kill();
		};
	}, [lettersRef]);

	return (
		<div className="section-text">
			<div className="section-text-inner">
				<div ref={triggerRef}>
					{text.split("").map((letter, index) => (
						<span className="reveal-text" key={index} ref={setlettersRef}>
							{letter}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default TextReveal;
