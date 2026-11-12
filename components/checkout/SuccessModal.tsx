"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

export default function SuccessModal({ isOpen, onComplete }: SuccessModalProps) {
  const [orderId] = useState(() => `DRIP-${Math.floor(1000 + Math.random() * 9000)}`);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [isOpen, onComplete]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative w-full max-w-md rounded-3xl border border-amber-400/30 bg-[#141414] p-8 text-center shadow-[0_0_60px_rgba(251,191,36,0.15)] overflow-hidden"
          >
            {/* Subtle radial glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />

            {/* Animated Checkmark Circle */}
            <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-amber-400/20"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 18 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-black shadow-lg shadow-amber-400/30"
              >
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <Check className="h-9 w-9 stroke-[3]" />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Order #{orderId}
              </div>

              <h2 className="text-3xl font-bold text-white">
                Order Placed!
              </h2>

              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Thank you for ordering with <span className="text-amber-400 font-medium">The Drip</span>. We&apos;re freshly preparing your items now!
              </p>
            </motion.div>

            {/* Progress bar showing redirect countdown */}
            <div className="mt-6">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.8, ease: "linear" }}
                  className="h-full rounded-full bg-amber-400"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Redirecting back to menu...
              </p>
            </div>

            <button
              onClick={onComplete}
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Back to Menu Now
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
