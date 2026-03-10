"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star, Users, CheckCircle2 } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Main Video/Image Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-[-100px] z-10 shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
            alt="Students Learning"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group"
            >
              <Play className="text-primary fill-primary ml-1 group-hover:scale-110 transition-transform" size={32} />
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <div className="bg-navy rounded-[2.5rem] pt-32 pb-12 px-12 text-white overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 leading-tight">
                Trusted by 15,000+ learners, educators, and teams worldwide.
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-purple-700 transition-colors">
                  Apply to your portal
                </button>
                <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors">
                  Visit Library
                </button>
              </div>
            </div>

            {/* Middle Stats */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold">9.8/10</div>
                <div>
                  <div className="font-bold text-lg">Course Approval Score</div>
                  <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">
                    Achieving a complete course approval score reflects our commitment.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Stats & Testimonial */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold">13k</div>
                <div>
                  <div className="font-bold text-lg">Satisfied Learners Worldwide</div>
                  <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">
                    Satisfied learners across the globe share one common outcome.
                  </p>
                </div>
              </div>

              {/* Testimonial Pip */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                   <Image src="https://i.pravatar.cc/100?u=1" alt="Avatar" width={40} height={40} />
                </div>
                <p className="text-navy text-xs font-medium leading-tight italic">
                  "All courses are incredibly help people to achieve their goals"
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
