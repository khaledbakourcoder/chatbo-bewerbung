export interface Node {
  id: string;
  message: string;
  component?: 'SkillChart' | 'ProjectCards' | 'ContactCard';
  options: Option[];
  easterEgg?: boolean;
}

export interface Option {
  label: string;
  next: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: number;
  component?: 'SkillChart' | 'ProjectCards' | 'ContactCard';
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Project {
  title: string;
  company: string;
  tech: string;
  role: string;
  link?: string;
  status?: string;
}
