import ProjektImgCard from "../components/ProjektImgCard.jsx";

export default function Slide() {
  return (
    <main className="flex gap-3">
      <ProjektImgCard client:load img="/media/kampagnesite-full.png" desc="Kampagnesite" />
      <ProjektImgCard client:load img="/media/rkos-full.png" desc="RKOS" />
      <ProjektImgCard client:load img="/media/simpel-shop-full.png" desc="Simpel Shop" />
    </main>
  );
}
