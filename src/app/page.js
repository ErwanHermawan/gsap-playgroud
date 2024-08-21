import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import TextReveal from "@/components/TextReveal";
import ScrollSection from "@/components/ScrollSection/index.";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Banner />
			<ScrollSection />
			<TextReveal />
			<Footer />
		</>
	);
}
