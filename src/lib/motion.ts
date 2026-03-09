import { Transition } from "framer-motion";

export const fadeInUp = {
    initial: { opacity: 0, y: 15, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    } as Transition
}

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 } as Transition
}

export const scaleIn = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    } as Transition
}
