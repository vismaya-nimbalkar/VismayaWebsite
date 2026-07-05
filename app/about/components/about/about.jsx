"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Vismaya Nimbalkar"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Vismaya Nimbalkar"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Vismaya Nimbalkar"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
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
						Vismaya Nimbalkar
					</h2>
					<p className="text-gray-600 text-justify title text-lg leading-relaxed">
						I am a{" "}
						<span className="text-black font-medium">
							Detail-Oriented Law Professional{" "}
						</span>
						specialized in bridging the gap between{" "}
						<span className="text-black font-medium">
							rigorous corporate compliance and impactful social advocacy
						</span>
						. Currently pursuing my BBA.LLB (Hons.) at{" "}
						<span className="text-black font-medium">
							Symbiosis Law School, Pune
						</span>
						{" "}and a Professional Certification from the{" "}
                        <span className="text-black font-medium">
							Indian Institute of Company Secretaries
						</span>
						, my journey is defined by a commitment to comprehensive legal research, effective administrative support, and clear communication.
						<br />
						<br />
						Currently, I apply my research expertise as a Social Worker at{" "}
						<span className="text-black font-medium">
							After The Silence
						</span>
						, advocating for LGBTQ+ rights and authoring accessible guides for legal identity updates. My practical experience includes drafting critical legal instruments—from Writ Petitions to Memos of Compliance—at the{" "}
						<span className="text-black font-medium">
							Law Chambers of Lakshmi Menon
						</span>
						. I remain dedicated to delivering actionable solutions and leveraging my oral advocacy skills in fast-paced professional environments.
					</p>
				</motion.div>
			</div>
		</>
	);
}