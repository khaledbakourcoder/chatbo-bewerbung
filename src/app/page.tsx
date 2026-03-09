"use client";

import { useState, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Loader } from "@/components/layout/Loader";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <main className="min-h-screen selection:bg-accent selection:text-black overflow-hidden bg-[#f8fbfd]">
      <div className="noise" />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row h-screen relative z-10"
          >
            {/* Mobile Header: Visible only on small screens */}
            <div className="md:hidden">
              <Header />
            </div>

            {/* Desktop Sidebar: Visible only on md screens and up */}
            <div className="hidden md:flex md:w-[40%]">
              <Sidebar />
            </div>

            <section className="flex-1 h-screen overflow-hidden flex flex-col relative">
              {/* Subtle Background Glow for Chat Area */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
              <ChatWindow />
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}