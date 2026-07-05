"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function ProjectCard({ project }) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.3 }}
			className="p-8 m-2 border-2 border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col h-full"
		>
			<div className="flex-grow">
				<div className="flex justify-between items-start mb-4">
					<h3 className="text-2xl font-bold text-black leading-tight">
						{project.title}
					</h3>

					<span className="text-xs font-semibold text-gray-500 bg-gray-200 px-3 py-1 rounded-full whitespace-nowrap ml-4">
						{project.year}
					</span>
				</div>

				<div className="flex flex-wrap gap-2 mb-6">
					{project.tech?.map((skill) => (
						<span
							key={skill}
							className="text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 px-2 py-1 rounded-md"
						>
							{skill}
						</span>
					))}
				</div>

				<ul className="space-y-3 mb-6">
					{project.desc?.map((paragraph, idx) => (
						<li
							key={idx}
							className="text-gray-600 text-sm text-justify leading-relaxed flex items-start"
						>
							<span className="text-gray-400 mr-2 mt-1">•</span>
							<span>{paragraph}</span>
						</li>
					))}
				</ul>
			</div>

			{project.preview && (
				<div className="mt-auto pt-4 border-t border-gray-200">
					<Button variation="primary">
						<a
							href={project.preview}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Document
						</a>
					</Button>
				</div>
			)}
		</motion.div>
	);
}