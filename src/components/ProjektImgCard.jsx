import React, { useRef, useEffect } from "react";
import { motion, useMotionValue } from "motion/react";

export default function ProjektImgCard({ img, desc }) {
  const containerRef = useRef(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      const current = container.scrollTop;
      const newProgress = maxScroll > 0 ? current / maxScroll : 0;
      progress.set(newProgress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [progress]);

  return (
    <article className="w-full rounded-xl">
      <section
        ref={containerRef}
        className="relative w-full aspect-square overflow-y-auto rounded-xl shadow-[var(--shadow-drop)] scrollbar-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <img src={img} alt={desc} className="w-full h-auto object-cover rounded-xl block" />
      </section>
      <motion.div style={{ scaleX: progress, transformOrigin: "0 50%" }} className="h-2 bg-[var(--sandybrown)] m-2 rounded-full translate-y-3" />
    </article>
  );
}
