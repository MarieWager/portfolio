import ProjektImgCard from "../components/ProjektImgCard.jsx";

export default function Projekter() {
  return (
    <section>
      <main className="grid gap-[1rem] sm:gap-[2.5vw] grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-center">
        <h1 className="row-start-1 col-start-1 col-span-1 xs:col-span-2 md:col-span-3">Projekter</h1>

        <ProjektImgCard client:load img="/media/night-club-site.png" desc="NightClub" text="Tredje semester eksamen i Frontend valgfaget. Projektet gav praktisk hands-on erfaring med Tailwind, Framer Motion og formularhåndtering i React." link="https://nc-site.vercel.app/" />
        <ProjektImgCard client:load img="/media/kampagnesite-full.png" desc="Kampagnesite" text="Designforslag til en onepager med fokus på frivillighed for Pårørende&shy;netværket. Sitet formidler kundens formål og efterspørgselse, samt gør det nemt at skrive sig op." link="https://kampagnesitegruppe7.netlify.app/" />
        <ProjektImgCard client:load img="/media/rkos-full.png" desc="RKOS" text="Anden semester eksamen med en karateklub som klient. Gentænkning af eksisterende design, samt kundens behov og efterspørgelser: kalender og tilmelding." link="https://rkos-hjemmeside.netlify.app/" />
        <ProjektImgCard client:load img="/media/simpel-shop-full.png" desc="Simpel Shop" text="Opgave fokuseret på webshop-funktioner og API integration. Projektet arbejder med state og lagring af brugerens handlinger som favoritter og indkøbskurv." link="https://simpel-shop-opgaver-1.vercel.app/" />
        <ProjektImgCard client:load img="/media/bareen-collab-site.png" desc="Bareen x Roskilde" text="Udvikling af nyt samarbejds&shy;koncept som kunde&shy;opgave for Bareen. Projektet gav yderligere erfaring og indsigt i plan&shy;lægning af SoMe strategi og content." link="https://www.figma.com/proto/RXYoAfUKvB7N2Ltmid8X6u/Collab-site-Bareen?page-id=323%3A2850&node-id=475-4364&p=f&viewport=-900%2C-1503%2C0.19&t=1IG9VJLrA027pKVw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=475%3A4364&show-proto-sidebar=1" />
        <ProjektImgCard client:load img="/media/design-implement.png" desc="UI implementering" text="Opgave med fokus på at omsætte Figma komponenter til dynamiske løsninger. Projektet fik testet min forståelse af animationer og komponentstruktur." link="https://frontend-design-implementering.netlify.app/" />
      </main>
    </section>
  );
}

