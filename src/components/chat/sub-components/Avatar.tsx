"use client";

interface AvatarProps {
    type: "bot" | "user";
}

export const Avatar = ({ type }: AvatarProps) => {
    const isBot = type === "bot";

    return (
        <div
            className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-[10px] md:rounded-[12px] flex items-center justify-center shrink-0 overflow-hidden relative border border-petrol-border shadow-sm bg-white"
        >
            {isBot ? (
                <img
                    src="/friendly-bot.png"
                    alt="Bot"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerText = 'AI';
                    }}
                    className="w-full h-full object-cover"
                />
            ) : (
                <img
                    src="/epic-ai-avatar.svg"
                    alt="Khaled"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerText = 'K';
                    }}
                    className="w-[70%] h-[70%] object-contain"
                />
            )}
        </div>
    );
};
