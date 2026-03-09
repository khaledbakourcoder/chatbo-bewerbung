"use client";

import { motion } from "framer-motion";
import { Message } from "@/types";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Avatar } from "./sub-components/Avatar";
import { MessageBubble } from "./sub-components/MessageBubble";
import { MessageComponentRegistry } from "../chat/MessageComponentRegistry";
import { scaleIn } from "@/lib/motion";

interface ChatMessageProps {
    message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
    const isBot = message.sender === "bot";
    const { isMobile, isTablet } = useWindowSize();

    // Registry lookup instead of switch statement (OCP)
    const DynamicComponent = message.component ? MessageComponentRegistry[message.component] : null;

    // Responsive message bubble padding
    const bubblePadding = isMobile ? "12px 16px" : isTablet ? "16px 20px" : "20px 24px";

    return (
        <motion.div
            {...scaleIn}
            transition={{ ...scaleIn.transition, duration: 0.5 } as any}
            className={`flex items-start gap-3 md:gap-4 mb-6 w-full group ${isBot ? "flex-row" : "flex-row-reverse"}`}
        >
            <Avatar type={isBot ? "bot" : "user"} />

            <div className={`flex flex-col ${isBot ? "items-start" : "items-end"} max-w-[88%] md:max-w-[85%]`}>
                <MessageBubble
                    isBot={isBot}
                    text={message.text}
                    padding={bubblePadding}
                >
                    {DynamicComponent && <DynamicComponent />}
                </MessageBubble>

                <span
                    suppressHydrationWarning
                    className="text-petrol-light mt-2 group-hover:opacity-40 transition-opacity"
                    style={{
                        fontSize: "9px",
                        fontFamily: "monospace",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        opacity: 0,
                    }}
                >
                    {isBot ? "SYSTEM" : "USER"} // {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </motion.div>
    );
};