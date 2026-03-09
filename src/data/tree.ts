import { Node } from "@/types";

export const tree: Record<string, Node> = {
    START: {
        id: "START",
        message: "Hey! Ich bin Khaleds Bewerbung. Etwas anders als ihr es gewohnt seid. Schau dich einfach um.",
        options: [
            { label: "Wer ist Khaled?", next: "NODE_1" },
            { label: "Was kann er?", next: "NODE_2" },
            { label: "Wie nutzt er KI?", next: "NODE_3" },
            { label: "Was hat er gebaut?", next: "NODE_4" },
            { label: "Warum Epic AI?", next: "NODE_5" },
        ],
    },
    NODE_1: {
        id: "NODE_1",
        message: "Khaled studiert Angewandte Informatik im 5. Semester an der Hochschule Flensburg und bringt eine abgeschlossene Ausbildung zum Kaufmännischen Assistenten (Fachrichtung Informatik) mit. Er entwickelt seit über 3 Jahren aktiv Webprojekte mit modernem Stack und hat solide Backend-Erfahrung mit PHP und Express.js sowie relationalen und dokumentenbasierten Datenbanken.",
        options: [
            { label: "Klingt gut. Zeig mir den kompletten Stack.", next: "NODE_2" },
            { label: "Wo hat er das in der Praxis angewendet?", next: "NODE_7" },
            { label: "Aber warum keine normale PDF-Bewerbung?", next: "NODE_1_1" },
        ],
    },
    NODE_1_1: {
        id: "NODE_1_1",
        message: "Weil ein PDF bei einem KI-Startup irgendwie nicht passt. Was ihr gerade nutzt, ist ein strukturierter Entscheidungsbaum, gebaut mit Next.js, komplett ohne Backend. Kein Zufall, sondern Absicht.",
        options: [
            { label: "Gutes Mindset. Wie nutzt er KI im Alltag?", next: "NODE_3" },
            { label: "Okay, lass Taten sprechen. Was hat er gebaut?", next: "NODE_4" },
        ],
    },
    NODE_2: {
        id: "NODE_2",
        message: "Sein Stack, gewachsen durch echte Projektarbeit, nicht durch Tutorials.",
        component: "SkillChart",
        options: [
            { label: "Gibt es dazu auch echte Projekte?", next: "NODE_4" },
            { label: "Und wie sieht es mit KI-Skills aus?", next: "NODE_3" },
            { label: "Warum passt dieses Profil zu Epic AI?", next: "NODE_5" },
        ],
    },
    NODE_3: {
        id: "NODE_3",
        message: "KI ist für Khaled kein Buzzword, sondern tägliches Werkzeug. Er nutzt sie gezielt für Prompting, Workflow-Automatisierung und die sinnvolle Integration in Entwicklungsprozesse. Diese Bewerbung ist ein konkretes Beispiel dafür.",
        options: [
            { label: "Was genau würde er damit bei uns machen?", next: "NODE_6" },
            { label: "Zeig mir mal die Projekte dazu.", next: "NODE_4" },
        ],
    },
 NODE_4: {
        id: "NODE_4",
        message: "Unter anderem diese drei Projekte, von Fullstack-Unternehmensanwendung bis zu Live-Kundenprojekten.",
        component: "ProjectCards",
        options: [
            { label: "Beeindruckend. Wo hat er bisher gearbeitet?", next: "NODE_7" },
            { label: "Warum will er genau zu uns?", next: "NODE_5" },
            { label: "Das reicht mir schon. Lass uns sprechen.", next: "KONTAKT" },
        ],
    },
    NODE_5: {
        id: "NODE_5",
        message: "Drei Gründe: Erstens studiert er in Flensburg, lebt hier und kennt das lokale Umfeld. Zweitens verbindet ihn die Hochschule Flensburg direkt mit dem Netzwerk von Epic AI. Drittens versteht er nicht nur, wie KI-Produkte funktionieren, er will aktiv daran mitbauen.",
        options: [
            { label: "Welche Aufgaben könnte er übernehmen?", next: "NODE_6" },
            { label: "Lass mich erst noch seine Projekte sehen.", next: "NODE_4" },
            { label: "Passt. Wie erreiche ich ihn?", next: "KONTAKT" },
        ],
    },
    NODE_6: {
        id: "NODE_6",
        message: "Konkret: Frontend-Entwicklung, Kundenprojekte umsetzen, KI-Workflows integrieren. Er bringt Erfahrung mit relationalen und dokumentenbasierten Datenbanken sowie handfeste Backend-Kenntnisse in PHP und Express.js mit. Verfügbar für 10 bis 15 Stunden pro Woche, vor Ort, remote oder hybrid. In den Semesterferien auch mehr.",
        options: [
            { label: "Das klingt nach einem Match. Kontakt?", next: "KONTAKT" },
            { label: "Wie sieht der nächste Schritt aus?", next: "NEXT_STEPS" },
        ],
    },
    NODE_7: {
        id: "NODE_7",
        message: "Bei Flens IT OHG hat Khaled als Entwickler an AIP mitgearbeitet, einer Fullstack-Anwendung für ambulante Pflegedienste, gebaut mit React, Redux, PHP und MySQL. Er hat das Unternehmen im März 2026 verlassen und richtet sich jetzt gezielt in Richtung KI-nahe Produktentwicklung neu aus.",
        options: [
            { label: "Ah, deshalb der Wechsel zu Epic AI?", next: "NODE_5" },
            { label: "Welche eigenen Projekte hat er noch?", next: "NODE_4" },
            { label: "Alles klar, ich habe genug gesehen. Kontakt.", next: "KONTAKT" },
        ],
    },
   KONTAKT: {
        id: "KONTAKT",
        message: "Am direktesten hier. Schreibt mir einfach eine kurze Mail und wir machen einen Termin aus.",
        component: "ContactCard", // Zeigt jetzt nur deine E-Mail (am besten als klickbarer mailto-Link)
        options: [
            { label: "Wie geht's nach der Kontaktaufnahme weiter?", next: "NEXT_STEPS" },
            { label: "Zeig mir vorher nochmal seine Projekte.", next: "NODE_4" },
            { label: "Zurück zur Übersicht.", next: "START" },
        ],
    },
    NEXT_STEPS: {
        id: "NEXT_STEPS",
        message: "Ganz entspannt: Wir trinken einen Kaffee (gerne auch virtuell), schauen, ob die Chemie stimmt und sprechen über eure aktuellen Herausforderungen. Kein starres Bewerbungsverfahren, einfach ein ehrlicher Austausch auf Augenhöhe.",
        options: [
            { label: "Klingt gut. Lass uns zur Entscheidung kommen.", next: "EASTER_EGG" },
            { label: "Ich schau mir vorher noch die Projekte an.", next: "NODE_4" },
        ],
    },
    EASTER_EGG: {
        id: "EASTER_EGG",
        message: "Genug gelesen. Zeit für eine Entscheidung – wie lautet das Urteil?",
        easterEgg: true,
        options: [
            { label: "Eingestellt ✅", next: "EINGESTELLT" },
            { label: "Wann kannst du anfangen?", next: "ANFANGEN" },
            { label: "Absage ❌", next: "ABSAGE" },
        ],
    },
  EINGESTELLT: {
        id: "EINGESTELLT",
        message: "Sehr gut. Wann fange ich an? Schickt mir direkt die Details rüber:",
        component: "ContactCard", 
        options: [
            { label: "Zurück zum Anfang", next: "START" },
        ],
    },
   ANFANGEN: {
        id: "ANFANGEN",
        message: "Sofort. Meldet euch einfach direkt hier mit Datum und Uhrzeit:",
        component: "ContactCard", 
        options: [
            { label: "Zurück zum Anfang", next: "START" },
        ],
    },
  ABSAGE: {
        id: "ABSAGE",
        message: "Schade. Aber ehrliches Feedback ist Gold wert. Lasst mir gerne eine kurze Mail da, woran es gescheitert ist – vielleicht baut ihr ja bald Features, für die ihr mich doch braucht.",
        component: "ContactCard", 
        options: [
            { label: "Oder ich schau mir doch nochmal die Projekte an.", next: "NODE_4" },
            { label: "Zurück zum Anfang.", next: "START" },
        ],
    },
};