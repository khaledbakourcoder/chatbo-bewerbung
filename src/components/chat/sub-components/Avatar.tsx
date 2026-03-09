"use client";

import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
    type: "bot" | "user";
}

export const Avatar = ({ type }: AvatarProps) => {
    const isBot = type === "bot";
    const [hasError, setHasError] = useState(false);

    return (
        <div
            className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-[10px] md:rounded-[12px] flex items-center justify-center shrink-0 overflow-hidden relative border border-petrol-border shadow-sm bg-white"
        >
            {hasError ? (
                <span className="text-petrol-mid font-bold text-xs">
                    {isBot ? "AI" : "K"}
                </span>
            ) : isBot ? (
                <Image
                    src="/friendly-bot.png"
                    alt="Bot"
                    width={40}
                    height={40}
                    onError={() => setHasError(true)}
                    className="w-full h-full object-cover"
                />
            ) : (
                <Image
                    src="/epic-ai-avatar.svg"
                    alt="Khaled"
                    width={40}
                    height={40}
                    onError={() => setHasError(true)}
                    className="w-[70%] h-[70%] object-contain"
                />
            )}
        </div>
    );
};
