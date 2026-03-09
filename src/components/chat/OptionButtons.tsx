"use client";

import { motion } from "framer-motion";
import { Option } from "@/types";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";
import { scaleIn } from "@/lib/motion";

interface OptionButtonsProps {
    options: Option[];
    onSelect: (option: Option) => void;
    disabled?: boolean;
}

export const OptionButtons = ({ options, onSelect, disabled }: OptionButtonsProps) => {
    const { isMobile } = useWindowSize();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Padding moved to style
    const buttonPadding = isMobile ? "8px 16px" : "10px 22px";

    return (
        <div
            className="flex flex-wrap gap-2 md:gap-3 mt-2 justify-start items-center pb-5"
        >
            {options.map((option, index) => (
                <motion.button
                    key={option.label}
                    {...scaleIn}
                    transition={{
                        ...scaleIn.transition,
                        delay: index * 0.05,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={!disabled ? {
                        scale: 1.02,
                        backgroundColor: "var(--color-petrol-border)",
                        borderColor: "var(--color-petrol-border-hover)",

                    } : {}}
                    whileTap={!disabled ? { scale: 0.98 } : {}}
                    onClick={() => onSelect(option)}
                    disabled={disabled}
                    className="relative flex items-center gap-1.5 overflow-hidden transition-all duration-300"
                    style={{
                        cursor: disabled ? "not-allowed" : "pointer",
                        padding: buttonPadding,
                        background: "rgba(255, 255, 255, 0.45)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid var(--color-petrol-border)",
                        borderRadius: "999px",
                        color: "var(--color-petrol-mid)",
                        fontSize: isMobile ? "12px" : "13px",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                        opacity: disabled ? 0.5 : 1,
                    }}
                >
                    <span className="relative z-10">{option.label}</span>
                    <motion.div
                        animate={{
                            x: hoveredIndex === index ? 0 : -5,
                            opacity: hoveredIndex === index ? 1 : 0,
                            width: hoveredIndex === index ? "auto" : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-petrol-light"
                        >
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </motion.div>
                </motion.button>
            ))}
        </div>
    );
};
