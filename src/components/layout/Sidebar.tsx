"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { StatusBadge } from "@/components/common/StatusBadge";
import { InfoList } from "./sub-components/InfoList";
import { fadeInUp } from "@/lib/motion";

export const Sidebar = () => {
    const [mounted, setMounted] = useState(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);
    const { isDesktop } = useWindowSize();

    if (!mounted) return <aside className="w-full h-screen bg-white" />;

    // Padding values moved to style
    const outerPadding = isDesktop ? "64px" : "32px";
    const innerTopPadding = isDesktop ? "60px" : "40px";
    const badgePadding = isDesktop ? "40px" : "24px";

    return (
        <aside
            className="w-full h-screen flex flex-col justify-between shrink-0 relative z-20 overflow-hidden bg-white border-r border-petrol-border"
            style={{
                padding: outerPadding,
            }}
        >
            <div style={{ padding: innerTopPadding }}>
                <motion.div
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, duration: 0.8 }}
                >
                    <h1
                        className="text-5xl lg:text-6xl"
                        style={{
                            fontWeight: 900,
                            letterSpacing: "-2px",
                            background: "linear-gradient(180deg, var(--color-petrol-light) 0%, var(--color-petrol-mid) 50%, var(--color-petrol-dark) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginBottom: "8px",
                            fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                        }}
                    >
                        KHALED<span style={{ WebkitTextFillColor: "var(--color-petrol-mid)" }}>.</span>
                    </h1>
                    <p
                        className="text-petrol-light"
                        style={{
                            fontSize: "10px",
                            fontFamily: "monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.4em",
                            marginBottom: "24px",
                            opacity: 0.7,
                        }}
                    >
                        Bewerbung @ Epic AI
                    </p>
                </motion.div>

                <InfoList />
            </div>

            {/* Status Badge */}
            <div style={{ padding: badgePadding }}>
                <StatusBadge
                    style={{
                        padding: "10px 20px",
                        width: "fit-content",
                    }}
                />
            </div>
        </aside>
    );
};