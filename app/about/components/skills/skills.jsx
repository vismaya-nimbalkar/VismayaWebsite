"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
	faBalanceScale, 
	faFileContract, 
	faUsers, 
	faBullhorn 
} from "@fortawesome/free-solid-svg-icons";

const skillCategories = {
	research: {
		title: "Legal Research & Drafting",
		icon: faBalanceScale,
		description: "Comprehensive legal research and preparation of legal documents.",
		languages: [
			{ name: "Legal Research", highlight: true },
			{ name: "Writ Petitions", highlight: true },
			{ name: "General Power of Attorney", highlight: true },
			{ name: "Memos of Compliance", highlight: true },
			{ name: "Case Briefing", highlight: false },
			{ name: "Issue Identification", highlight: false },
			{ name: "Legal Writing", highlight: false },
			{ name: "Policy Analysis", highlight: false },
		],
		tools: [
			"Intellectual Property Laws",
			"Criminal Procedure Code (CrPC)",
			"Government Contract Law",
			"Arbitration",
			"Statutes & Case Law",
		],
	},
	compliance: {
		title: "Corporate & Compliance",
		icon: faFileContract,
		description: "Ensuring regulatory adherence and administrative operations.",
		languages: [
			{ name: "Compliance Documentation", highlight: true },
			{ name: "GST Regulations", highlight: true },
			{ name: "Corporate Governance", highlight: true },
			{ name: "Data Analysis", highlight: false },
			{ name: "Actionable Reporting", highlight: false },
			{ name: "Project Coordination", highlight: false },
		],
		tools: [
			"Company Secretary Training",
			"Spreadsheet Management",
			"Administrative Support",
			"Operational Problem Solving",
		],
	},
	advocacy: {
		title: "Advocacy & Social Work",
		icon: faUsers,
		description: "Championing LGBTQ+ rights, climate justice, and legal accessibility.",
		languages: [
			{ name: "LGBTQ+ Advocacy", highlight: true },
			{ name: "Legal Identity Updates", highlight: true },
			{ name: "Academic Research", highlight: true },
			{ name: "Human Rights Law", highlight: true },
			{ name: "Environmental Law", highlight: false },
			{ name: "Doctrinal Analysis", highlight: false },
		],
		tools: [
			"After The Silence Platform",
			"Accessible Instructional Guides",
			"Gender Champions Cell",
			"Community Outreach",
		],
	},
	communication: {
		title: "Communication & Leadership",
		icon: faBullhorn,
		description: "Delivering effective presentations and leading initiatives.",
		languages: [
			{ name: "Public Speaking", highlight: true },
			{ name: "Oral Advocacy", highlight: true },
			{ name: "Academic Presentations", highlight: true },
			{ name: "Toastmasters", highlight: true },
			{ name: "Team Leadership", highlight: false },
			{ name: "Event Hosting", highlight: false },
			{ name: "Model UN (MUN)", highlight: false },
		],
		tools: [
			"Academic & Research Cell",
			"Project Presentations",
			"Cross-functional Collaboration",
			"Fast-paced Environments",
		],
	},
};

function SkillCard({ skill, isSelected, onClick }) {
	return (
		<motion.div
			onClick={onClick}
			className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${
				isSelected
					? "bg-white/20 border-black border-2 shadow-lg"
					: "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30"
			}`}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.97 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}>
			{/* Glow effect */}
			{!isSelected && (
				<div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
			)}

			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 flex justify-center items-center ${
						isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
					}`}>
					<FontAwesomeIcon icon={skill.icon} className="w-8 h-8 text-black" />
				</div>
				<div>
					<h3 className="font-semibold text-black text-lg mb-2">
						{skill.title}
					</h3>
					<p className="text-gray-600 text-sm leading-relaxed">
						{skill.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

function SkillDetails({ selectedSkill }) {
  if (!selectedSkill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-12 space-y-8"
    >
      {/* Competencies Section */}
      <motion.div
        className="bg-white/40 border border-gray-300/30 rounded-2xl p-8 shadow-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
          Core Competencies
        </h3>
        <motion.div
          key={selectedSkill.title}
          className="flex flex-wrap justify-center gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.languages.map((skill) => (
            <motion.span
              key={skill.name}
              variants={tagVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2
                ${
                  skill.highlight
                    ? "bg-black text-white shadow-md border-black scale-105 z-10 hover:shadow-lg"
                    : "bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 text-black hover:bg-white/60"
                }`}
            >
              {skill.highlight && (
                <span className="text-yellow-400 text-[10px] animate-pulse">✦</span>
              )}
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        className="bg-white/20 border border-gray-300/20 rounded-2xl p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-medium text-gray-500 mb-6 text-center uppercase tracking-wider">
          Focus Areas & Platforms
        </h3>
        <motion.div
          key={selectedSkill.title + "-tools"}
          className="flex flex-wrap justify-center gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.tools.map((tool) => (
            <motion.span
              key={tool}
              variants={tagVariants}
              className="px-4 py-1.5 bg-gray-300/30 border border-gray-400/20 rounded-lg text-gray-600 text-xs font-medium"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("research");
	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16">
					<h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
						Skills & Expertise
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
						Explore my competencies across different legal and advocacy domains. Click on any
						category to see specific skills and focus areas.
					</p>
				</motion.div>

				{/* Skill Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{Object.entries(skillCategories).map(([key, skill], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							<SkillCard
								skill={skill}
								isSelected={selectedCategory === key}
								onClick={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* Skill Details */}
				<AnimatePresence mode="wait">
					<SkillDetails selectedSkill={skillCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</div>
	);
}