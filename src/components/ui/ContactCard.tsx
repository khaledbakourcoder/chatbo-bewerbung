"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

export const ContactCard = () => {
    const contacts = [
        {
            icon: <Mail size={15} />,
            label: "Email",
            value: "khaledbakour239@gmail.com",
            href: "mailto:khaledbakour239@gmail.com",
        },

    ];

    return (
        <div style={{ marginTop: "2px" }} className="flex flex-col gap-2 ">
            {contacts.map((contact, index) => (
                <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...fadeInUp}
                    transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 3 }}
                    style={{
                        padding: "10px"
                    }}
                    className="flex items-center gap-3.5 p-3.5 bg-petrol-dark text-white border border-petrol-border rounded-xl transition-all duration-300 relative overflow-hidden hover:border-petrol-border-hover hover:shadow-lg hover:bg-petrol-hover"
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(26,95,122,0.1)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                >
                    {/* Icon */}
                    <div className="w-[34px] h-[34px] rounded-lg bg-petrol-light/50 flex items-center justify-center text-white shrink-0">
                        {contact.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-mono text-white uppercase tracking-widest mb-0.5 opacity-80">
                            {contact.label}
                        </p>
                        <p className="text-[13px] font-bold text-white truncate"
                            style={{
                                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                            }}>
                            {contact.value}
                        </p>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight size={15} className="text-petrol-light opacity-50 shrink-0" />
                </motion.a>
            ))}
        </div>
    );
};