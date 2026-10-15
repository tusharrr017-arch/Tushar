import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic } from './fx';
import { Monogram } from './Poster';

/**
 * The signature moment:
 * black → studio card → TUSHAR → THE SERIES → monogram → role → ▶ PLAY
 */
const TIMELINE = [
  { at: 300, beat: 1 }, // studio card
  { at: 1900, beat: 2 }, // name
  { at: 2700, beat: 3 }, // THE SERIES
  { at: 3400, beat: 4 }, // monogram
  { at: 4300, beat: 5 }, // role
  { at: 5000, beat: 6 }, // play button
];

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 6 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = TIMELINE.map(({ at, beat }) => window.setTimeout(() => setBeat(beat), at));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-black"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: EASE }}
      role="dialog"
      aria-label="Opening titles"
    >
      {/* letterbox bars */}
      <motion.div className="absolute inset-x-0 top-0 z-30 h-[7vh] bg-black" initial={{ y: 0 }} animate={{ y: beat >= 6 ? '-100%' : 0 }} transition={{ duration: 1.2, ease: EASE }} />
      <motion.div className="absolute inset-x-0 bottom-0 z-30 h-[7vh] bg-black" initial={{ y: 0 }} animate={{ y: beat >= 6 ? '100%' : 0 }} transition={{ duration: 1.2, ease: EASE }} />

      {/* projector flicker light */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 50% at 50% 55%, rgba(229,19,43,0.22), transparent 70%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 2 ? [0, 0.9, 0.5, 1] : 0 }}
        transition={{ duration: 1.4 }}
      />

      {/* studio card */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-sans text-xs font-semibold text-mist sm:text-sm"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.6em', opacity: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 h-full overflow-y-auto px-6">
      <div className="flex min-h-full flex-col items-center justify-center gap-3 py-8 text-center">
        <motion.h1
          className="font-display leading-[0.85] text-bone"
          style={{ fontSize: 'clamp(3.4rem, 9vw, 7rem)' }}
          initial={{ opacity: 0, scale: 1.15, filter: 'blur(16px)' }}
          animate={beat >= 2 ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.1, ease: EASE }}
        >
          {profile.firstName}
        </motion.h1>
        <motion.p
          className="font-sans text-sm font-bold tracking-[0.42em] text-crimson-2 sm:text-base"
          initial={{ opacity: 0 }}
          animate={beat >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {profile.seriesTag}
        </motion.p>
        <motion.div
          className="relative h-24 w-24 shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={beat >= 4 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Monogram label={profile.monogram} size="sm" />
        </motion.div>
        <motion.ul
          className="flex max-w-3xl flex-wrap justify-center gap-2"
          aria-label="Tech stack"
          initial={{ opacity: 0, y: 12 }}
          animate={beat >= 5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {profile.stack.map((name) => (
            <li key={name} className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-bone sm:text-xs">
              {name}
            </li>
          ))}
        </motion.ul>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={beat >= 6 ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, ease: EASE }}>
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onDone}
              tabIndex={beat >= 6 ? 0 : -1}
              className="group flex items-center gap-3 rounded-full bg-bone px-9 py-4 font-sans text-base font-bold tracking-wide text-ink shadow-[0_0_60px_rgba(229,19,43,0.45)] transition hover:bg-white"
            >
              <span className="text-lg transition-transform group-hover:scale-125">▶</span> PLAY
            </button>
          </Magnetic>
        </motion.div>
      </div>
      </div>

      <button
        type="button"
        onClick={onDone}
        className="absolute right-4 top-[calc(7vh+12px)] z-40 rounded-full border border-white/20 px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.2em] text-mist transition hover:border-white/60 hover:text-bone"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
}
