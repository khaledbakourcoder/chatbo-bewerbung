"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export const SkillChart = () => {
    return (
        <div className="flex flex-col gap-4 my-2">
            {skills.map((skill, index) => (
                <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                        <span style={{
                            fontSize: "10px",
                            fontFamily: "monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            color: "var(--color-petrol-mid)",
                            fontWeight: 600,
                        }}>
                            {skill.name}
                        </span>
                        <span style={{
                            fontSize: "10px",
                            fontFamily: "monospace",
                            color: "var(--color-petrol-light)",
                            fontWeight: 700,
                        }}>
                            {skill.percentage}%
                        </span>
                    </div>
                    <div style={{
                        height: "4px",
                        width: "100%",
                        background: "var(--color-petrol-border)",
                        borderRadius: "999px",
                        overflow: "hidden",
                    }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
                            style={{
                                height: "100%",
                                background: "linear-gradient(90deg, var(--color-petrol-light), var(--color-petrol-mid))",
                                borderRadius: "999px",
                                boxShadow: "0 0 10px rgba(41,128,160,0.35)",
                                position: "relative",
                            }}
                        >
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2))",
                                borderRadius: "999px",
                            }} />
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    );
};