import { SkillChart } from "@/components/ui/SkillChart";
import { ProjectCards } from "@/components/ui/ProjectCards";
import { ContactCard } from "@/components/ui/ContactCard";

export const MessageComponentRegistry: Record<string, React.ComponentType> = {
    SkillChart: SkillChart,
    ProjectCards: ProjectCards,
    ContactCard: ContactCard,
};

export type MessageComponentName = keyof typeof MessageComponentRegistry;
