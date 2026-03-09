"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

export const ProjectCards = () => {
    return (
        <div className="flex flex-col gap-3 " style={{marginTop:"10px"}}>
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    {...fadeInUp}
                    transition={{
                        ...fadeInUp.transition,
                        delay: index * 0.08,
                    } as any}
                    whileHover={{ y: -2 }}
                    className="relative px-6 py-5 bg-petrol-bg border border-petrol-border rounded-[14px] overflow-hidden cursor-default transition-all duration-300 hover:shadow-lg hover:border-petrol-border-hover"
                    style={{
                        // Specific shadow value not in variables
                        padding:"20px",
                        boxShadow: "none",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(26,95,122,0.1)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-sm"
                        style={{
                            background: "linear-gradient(180deg, var(--color-petrol-light), var(--color-petrol-mid))",
                        }}
                    />

                    {/* Header */}
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="font-bold text-[15px] text-petrol-dark tracking-tighter mb-0.5"
                                style={{
                                    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                                }}>
                                {project.title}
                            </h3>
                            <p className="text-[11px] font-mono text-petrol-light opacity-70">
                                {project.company}
                            </p>
                        </div>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 bg-petrol-light/10 text-petrol-mid rounded-lg flex items-center transition-colors hover:bg-petrol-light/20"
                            >
                                <ExternalLink size={14} />
                            </a>
                        )}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mb-3.5">
                        {project.tech.split(" ").map((t) => (
                            <span key={t}  style={{padding:"2px"}} className="text-[10px] font-mono bg-petrol-light/5 border border-petrol-light/15 text-petrol-mid rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center border-t border-petrol-light/10 pt-3">
                        <span className="text-[10px] font-mono text-petrol-light uppercase tracking-widest font-bold">
                            {project.role}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};