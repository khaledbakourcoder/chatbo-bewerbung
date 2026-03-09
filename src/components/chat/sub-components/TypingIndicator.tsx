"use client";

import { motion } from "framer-motion";

export const TypingIndicator = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className=" flex items-center gap-2 px-[18px] py-[14px] bg-transparent   w-fit mb-4 "
        >
            {[0, 0.2, 0.4].map((delay, i) => (
                <motion.span
                    key={i}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay }}
                    className=" w-1.5 h-1.5 rounded-full bg-petrol-light inline-block animate-pulse md:w-3 md:h-3 "
                />
            ))}
        </motion.div>
    );
};
