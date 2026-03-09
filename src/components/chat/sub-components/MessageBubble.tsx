"use client";

import { motion } from "framer-motion";

interface MessageBubbleProps {
    isBot: boolean;
    text: string;
    padding: string;
    children?: React.ReactNode;
}

export const MessageBubble = ({ isBot, text, padding, children }: MessageBubbleProps) => {
    return (
        <div
            className={`w-full rounded-[14px] ${isBot ? "bg-white border border-petrol-border text-petrol-dark rounded-tl-[2px] shadow-sm" : "text-white rounded-tr-[2px] shadow-md font-medium"}`}
            style={isBot ? {
                padding: padding,
            } : {
                background: "linear-gradient(135deg, var(--color-petrol-light) 0%, var(--color-petrol-mid) 100%)",
                padding: padding,
            }}
        >
            <div className="text-[14px] md:text-[15px] leading-relaxed whitespace-pre-wrap">
                {text}
            </div>

            {isBot && children && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="mt-5 pt-5 border-t border-petrol-border"
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};
