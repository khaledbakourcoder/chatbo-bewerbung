"use client";

import { motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import { StatusBadge } from "@/components/common/StatusBadge";

export const Header = () => {
    const { isMobile } = useWindowSize();

    // Padding moved to style
    const headerPadding = isMobile ? "0 24px" : "0 48px";

    return (
        <header
            className="w-full h-14 md:h-16 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md md:hidden"
            style={{
                background: "rgba(255, 255, 255, 0.85)",
                borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                padding: headerPadding,
            }}
        >
            <div className="flex flex-col">
                <motion.h1
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-base md:text-lg font-black tracking-tight"
                    style={{
                        background: "linear-gradient(180deg, #2980a0 0%, #1a5f7a 50%, #0f3d52 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                    }}
                >
                    KHALED BAKOUR<span style={{ WebkitTextFillColor: "#1a5f7a" }}>.</span>
                </motion.h1>
                <p
                    className="text-[7.5px] md:text-[8.5px] uppercase tracking-[0.25em] font-mono text-[#2980a0] opacity-50 -mt-0.5"
                >
                    Epic AI Bewerbung
                </p>
            </div>

            <StatusBadge
                style={{
                    padding: "6px 12px",
                    scale: 0.9
                }}
            />
        </header>
    );
};
