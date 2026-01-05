import ProjektImgCard from "../components/ProjektImgCard.jsx";

export default function Slide() {
  return (
    <main className="grid gap-y-[1rem] gap-x-[2.5vw] xs:gap-[2.5vw] grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-center">
      <ProjektImgCard client:load img="/media/night-club-site.png" desc="NightClub" text="Tredje semester eksamen i Frontend valgfaget. Projektet gav praktisk hands-on erfaring med Tailwind, Framer Motion og formularhåndtering i React." />
      <ProjektImgCard client:load img="/media/kampagnesite-full.png" desc="Kampagnesite" text="Designforslag til en onepager med fokus på frivillighed for Pårørende&shy;netværket. Sitet formidler kundens formål og efterspørgselse, samt gør det nemt at skrive sig op." />
      <ProjektImgCard client:load img="/media/rkos-full.png" desc="RKOS" text="Anden semester eksamen med en karateklub som klient. Gentænkning af eksisterende design, samt kundens behov og efterspørgelser: kalender og tilmelding." />
      <ProjektImgCard client:load img="/media/simpel-shop-full.png" desc="Simpel Shop" text="Opgave fokuseret på webshop-funktioner og API integration. Projektet arbejder med state og lagring af brugerens handlinger som favoritter og indkøbskurv." />
      <ProjektImgCard client:load img="/media/bareen-collab-site.png" desc="Bareen x Roskilde" text="Udvikling af et nyt samarbejdskoncept som kundeopgave for Bareen. Projektet gav yderligere erfaring og indsigt i planlægning af SoMe strategi og content." />
      <ProjektImgCard client:load img="/media/design-implement.png" desc="UI implementering" text="Opgave med fokus på at omsætte Figma komponenter til dynamiske løsninger. Projektet fik testet min forståelse af animationer og komponentstruktur." />
    </main>
  );
}
