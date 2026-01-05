import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "motion/react";

export default function ProjektImgCard({ img, desc, text }) {
  const containerRef = useRef(null);
  const progress = useMotionValue(0);
  const [isOpen, setIsOpen] = useState(false);

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
    <article className="w-full max-w-[360px] relative">
      <motion.section //
        className="mb-4 shadow-[var(--shadow-drop)] rounded-xl cursor-pointer "
        whileHover={{ scale: 0.99, boxShadow: "var(--shadow-hover)", marginBottom: "none" }}
        transition={{
          scale: { type: "spring", stiffness: 120, damping: 20, mass: 1.2 },
          boxShadow: { type: "tween", duration: 0.3, ease: "easeInOut" },
        }}
      >
        <section
          ref={containerRef}
          className={`relative aspect-[7/8] xs:aspect-[9/11] rounded-xl cursor-pointer scrollbar-hidden ${isOpen ? "overflow-y-hidden" : "overflow-y-auto"}`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onClick={() => setIsOpen(true)}
        >
          <img src={img} alt={desc} className="w-full h-auto object-cover rounded-xl block" />
        </section>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "1%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "1%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              //
              className="absolute top-0 left-0 w-full h-fit aspect-[7/8] xs:aspect-[9/11] bg-[var(--darknight)] p-5 pb-0 grid grid-cols-1 grid-rows-[auto_1fr] gap-[2.5vw] justify-items-start rounded-xl z-20 font-(family-name:--Sparten) cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <h6 className="text-left text-(length:--h3) leading-snug font-bold text-[var(--snow)]">{desc}</h6> {/*flex flex-col justify-evenly gap-[2.5vw]*/}
              <span className="leading-[1.6] xs:leading-snug sm:leading-[1.6] font-light text-(length:--text) text-[var(--snow)]">{text}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <motion.div style={{ scaleX: progress, transformOrigin: "0 50%" }} className="h-2 bg-[var(--sandybrown)] mt-2 mx-2 rounded-full" />
    </article>
  );
}
