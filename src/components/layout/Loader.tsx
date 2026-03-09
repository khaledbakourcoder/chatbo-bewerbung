"use client";

import { delay, motion } from "framer-motion";
import { useEffect } from "react";
import { fadeInUp, fadeIn, scaleIn } from "@/lib/motion";

interface LoaderProps {
    onComplete: () => void;
}

const textArr=["Khaled",".","Bewerbung"]
const circles=[{opacity:0.15,scale:2.5,delay:0.2},{opacity:0.1,scale:2,delay:0.5}]

export const Loader = ({ onComplete }: LoaderProps) => {
   
    useEffect(() => {
      
      const timer = setTimeout(() => {
            onComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
        { circles.map(({opacity,scale,delay},index)=>
                 <motion.div
                 key={index}
                initial={{ scale: 0, opacity: opacity }}
                animate={{ scale: scale, opacity: 0 }}
                transition={{ duration: 1.8, delay: delay, ease: "easeOut" }}
                className="absolute w-[300px] h-[300px] rounded-full border border-petrol-mid"
            />
    
    )}
  
         

            <div className="flex flex-col items-center gap-10">
                {/* Buchstaben einzeln animiert */}
                <div className="flex items-center gap-3">
                 {textArr.map((text,index)=>
                    <div key={index} className="flex text-[35px] md:text-[42px]">
                            {text.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    {...fadeInUp}
                                    transition={{
                                        ...fadeInUp.transition,
                                        delay: i * 0.06,
                                    } as any}
                                    style={{
                                        fontWeight: 800,
                                        letterSpacing: "-1px",
                                        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                                        background: `${text !== "." ? "linear-gradient(180deg, var(--color-petrol-light) 0%, var(--color-petrol-mid) 50%, var(--color-petrol-dark) 100%)" : "black"}`,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        display: "inline-block",
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                )}

                    
                </div>

                {/* Scan Line mit Glow */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-[280px] h-[2px] bg-black/5 rounded-sm overflow-hidden relative"
                >
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 0.9, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(90deg, transparent, var(--color-petrol-mid) 50%, transparent)",
                            boxShadow: "0 0 20px rgba(26,95,122,0.5)",
                        }}
                    />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="text-text-dark uppercase mt-[-24px]"
                    style={{
                        fontSize: "11px",
                        letterSpacing: "0.25em",
                        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                    }}
                >
                    @ Epic AI · Flensburg
                </motion.p>
            </div>
        </motion.div>
    );
};










