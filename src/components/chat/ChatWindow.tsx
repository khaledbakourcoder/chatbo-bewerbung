"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@/hooks/useChat";
import { ChatMessage } from "./ChatMessage";
import { OptionButtons } from "./OptionButtons";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import { TypingIndicator } from "./sub-components/TypingIndicator";
import { fadeIn } from "@/lib/motion";

export const ChatWindow = () => {
    const [mounted, setMounted] = useState(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    const { messages, currentNode, selectOption, isTyping } = useChat();
    const scrollRef = useRef<HTMLDivElement>(null);
    const { isMobile, isTablet } = useWindowSize();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    if (!mounted) return <div className="flex-1 h-full bg-white" />;

    // Padding values moved to style
    const horizontalPadding = isMobile ? "16px" : isTablet ? "32px" : "48px";
    const verticalPadding = isMobile ? "24px" : "48px";

    return (
        <div className="flex-1 overflow-hidden flex flex-col h-full bg-white">
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto space-y-4 scroll-smooth custom-scrollbar relative"
                style={{
                    paddingLeft: horizontalPadding,
                    paddingRight: horizontalPadding,
                    paddingTop: verticalPadding,
                    paddingBottom: "100px",
                }}
            >
                <div className="max-w-4xl mx-auto flex flex-col w-full">
                    <AnimatePresence mode="popLayout">
                        {messages.map((msg) => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}

                        {isTyping && <TypingIndicator />}
                    </AnimatePresence>

                    {/* Highly Minimalist Header for Options */}
                    {!isTyping && currentNode && (
                        <motion.div
                            {...fadeIn}
                            transition={{ ...fadeIn.transition, delay: 0.3, duration: 0.5 }}
                            className="mt-8 flex flex-col items-start"
                            style={{
                                paddingLeft: isMobile ? "0px" : "48px",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4 opacity-40">
                                <div className="w-1 h-1 rounded-full bg-petrol-mid" />
                                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-petrol-mid">
                                    Aktion erforderlich
                                </span>
                            </div>
                            <OptionButtons
                                options={currentNode.options}
                                onSelect={selectOption}
                            />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};