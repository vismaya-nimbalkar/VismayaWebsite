"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images (Replace these files in your public folder with your own photos!)
import Intervyou1 from "@/public/image/projects/web/intervyou/intervyou-1.png";
import Intervyou2 from "@/public/image/projects/web/intervyou/intervyou-2.jpeg";
import Intervyou3 from "@/public/image/projects/web/intervyou/intervyou-3.webp";
import ProjectAll from "@/public/image/projects.png";

import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
	// Filters only the items marked as show: true, keeping all boxes visible together
	const projects = Projects.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="Vismaya Nimbalkar"
								fill
								placeholder="blur"
								className="object-cover"
								sizes="(max-width: 768px) 80vw, 30vw"
							/>
						</motion.div>
					</div>
					
					{/* FIXED UI SECTION: Constrained width, adjusted font sizes, and line breaks added */}
					<div className="z-10 w-full absolute md:w-[50vw] md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
							Experience <br className="hidden md:block" />& Advocacy
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 md:max-w-lg">
							A detailed record of experience and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								advocacy initiatives.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h1 className="text-3xl font-bold mt-3">Highlight</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="relative w-full h-full shadow-lg">
									<Image
										src={Intervyou1}
										alt="After The Silence"
										fill
										placeholder="blur"
										className="rat object-cover"
										sizes="50vw"
									/>
								</motion.div>
							</div>
							<div className="absolute top-10 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="relative w-full h-full shadow-lg ">
									<Image
										src={Intervyou3}
										alt="After The Silence"
										fill
										placeholder="blur"
										className="object-cover"
										style={{ objectPosition: "0% 0%" }}
										sizes="40vw"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-10 md:bottom-26 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="relative w-full h-full shadow-lg">
									<Image
										src={Intervyou2}
										alt="After The Silence"
										fill
										placeholder="blur"
										className="object-cover"
										sizes="40vw"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							After The Silence
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							A social advocacy platform dedicated to queer rights and support. Provided comprehensive assistance to queer individuals navigating the complex bureaucratic process of updating legal documents to reflect their correct name and gender identity. In addition to developing accessible, step-by-step instructional guides for the community, I conducted independent research and authored multiple research papers on queer advocacy.
						</p>{" "}
						<div className="mt-3">
							<Button variation="primary">
								{/* You can replace this # with a link to your paper if you have one */}
								<a href="https://afterthesilence.org">Read Publications</a>
							</Button>
						</div>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Other Notable Experience
						</motion.h1>
					</div>
				</div>

				{/* Project boxes grid (Categories completely removed) */}
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer mt-10">
					{projects.map((project, index) => (
						<ProjectCard
							project={project}
							key={index}
						/>
					))}
				</div>

				{/* view in archive btn */}
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						{/* You can remove this button entirely if you don't have an archive page */}
						<Link href="/">Back to Home</Link>
					</Button>
				</motion.div>
			</main>
		</>
	);
}