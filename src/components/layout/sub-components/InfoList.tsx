"use client";

import { motion } from "framer-motion";
import { userInfos } from "@/data/user";

export const InfoList = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12"
        >
            {userInfos.map((info, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    style={{marginBottom:"20px"}}
                >
                    <p className="text-[10px] font-mono text-petrol-light uppercase tracking-[0.2em] font-bold mb-1">
                        {info.label}
                    </p>
                    <p className="text-lg lg:text-xl text-petrol-dark font-medium"
                        style={{
                            fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                        }}>
                        {info.value}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
};
