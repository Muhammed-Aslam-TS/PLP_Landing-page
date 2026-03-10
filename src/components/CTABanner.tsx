"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-navy rounded-[3rem] px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
        >
          {/* Decorative Gradient Background Elements */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Master the skills of the new world.
            </h2>
            <p className="text-blue-100/60 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
              Turn your knowledge into dynamic, structured courses instantly. No delays. No limitations. Just powerful AI-driven learning.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-6">
            <button className="bg-secondary text-navy px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wide hover:scale-110 transition-transform shadow-xl shadow-secondary/20 active:scale-95">
              Explore Courses
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wide hover:bg-white/20 transition-all flex items-center gap-2 active:scale-95">
              <Sparkles size={18} />
              Generate Course
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
