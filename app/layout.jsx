import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

// I have commented out the Chat widget to keep the portfolio formal and professional.
// import Chat from "@/components/Chat"; 

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://www.nimbalkar.in"), 
	title: "Vismaya Nimbalkar | Legal Portfolio",

	description:
		"Vismaya Nimbalkar, Detail-oriented Law & Company Secretary Student specializing in legal research, compliance drafting, and policy advocacy.",

	author: "Vismaya Nimbalkar",
	siteUrl: "https://www.vismaya-nimbalkar.in",
	applicationName: "Vismaya Portfolio",

	keywords: [
		"vismaya nimbalkar",
		"vismaya",
		"law student pune",
		"symbiosis law school",
		"company secretary student",
		"legal research",
		"policy advocacy",
		"after the silence",
	],

	openGraph: {
		type: "website",
		url: "https://www.nimbalkar.in",
		title: "Vismaya Nimbalkar | Legal Portfolio",
		siteName: "Vismaya Nimbalkar | Legal Portfolio",
		description: "Detail-oriented Law Professional specializing in legal research and compliance.",
		images: [
			{
				url: "/og-image-rev.png", // You can replace this image in the public folder later
				alt: "Vismaya Nimbalkar Portfolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Vismaya Nimbalkar",
	url: "https://www.nimbalkar.in",
	jobTitle: "Law Student & Legal Professional",
	worksFor: [
		{ "@type": "Organization", name: "After The Silence" },
		{ "@type": "Organization", name: "Law Chambers of Lakshmi Menon" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Symbiosis Law School, Pune",
	},
	sameAs: [
		"https://www.linkedin.com/in/vismaya-nimbalkar/",
		"mailto:vismaya@nimbalkar.in",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */} 
				<Analytics />
			</body>
		</html>
	);
}