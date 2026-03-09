"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { tree } from "@/data/tree";
import { Message, Node, Option } from "@/types";
export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentNodeId, setCurrentNodeId] = useState<string>("START");
    const [isTyping, setIsTyping] = useState(false);
    const initialized = useRef(false);
    const typingTimer = useRef<NodeJS.Timeout>(undefined);

    const addMessage = useCallback((text: string, sender: 'bot' | 'user', component?: Node['component']) => {
        console.log("add MEssage")
        setMessages((prev) => {
            console.log(prev, "prev")
            return [...prev, {
                id: `${Date.now()}`,
                text,
                sender,
                timestamp: Date.now(),
                component,
            }];
        });
    }, []);

    const selectOption = useCallback((option: Option) => {
        addMessage(option.label, 'user');
        setIsTyping(true);

        if (typingTimer.current) clearTimeout(typingTimer.current);

        typingTimer.current = setTimeout(() => {
            const nextNode = tree[option.next];
            if (nextNode) {
                setCurrentNodeId(nextNode.id);
                addMessage(nextNode.message, 'bot', nextNode.component);
            }
            setIsTyping(false);
        }, 1000);
    }, [addMessage]);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsTyping(true);
        console.log("🟡 init start");
        typingTimer.current = setTimeout(() => {

            const startNode = tree["START"];

            if (startNode) {
                addMessage(startNode.message, 'bot', startNode.component);
            }
            setIsTyping(false);
        }, 600);

    }, [addMessage]);




    return {
        messages,
        currentNode: tree[currentNodeId],
        selectOption,
        isTyping,
        setIsTyping,
        addMessage
    };
};