"use client";

import { motion } from "framer-motion";

interface StatusBadgeProps {
    style?: React.CSSProperties;
}

export const StatusBadge = ({ style }: StatusBadgeProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 bg-[#f0f7fa] border border-[#2980a0]/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full w-fit"
            style={style}
        >
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#22c55e] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-bold font-mono text-[#1a5f7a] tracking-wider">
                SYSTEM ONLINE
            </span>
        </motion.div>
    );
};
