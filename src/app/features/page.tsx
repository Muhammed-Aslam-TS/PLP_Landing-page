"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Globe, Layers, Rocket, Shield, Zap, Target, Users } from "lucide-react";

export default function FeaturesPage() {
  const details = [
    {
      title: "Real-time AI Feedback",
      description: "Get instant corrections and suggestions as you code, design, or write. Our AI understands context better than any other platform.",
      icon: <Zap className="text-yellow-600" size={40} />,
      bg: "bg-yellow-50",
    },
    {
      title: "Personalized Roadmap",
      description: "No two learners are the same. Our algorithms create a unique path for you based on your goals and existing knowledge.",
      icon: <Target className="text-red-600" size={40} />,
      bg: "bg-red-50",
    },
    {
      title: "Collaborative Labs",
      description: "Work with other students on real-world projects in our state-of-the-art virtual labs. Build together, grow together.",
      icon: <Users className="text-blue-600" size={40} />,
      bg: "bg-blue-50",
    },
  ];

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            THE FUTURE OF <span className="text-primary italic">LEARNING</span>
          </motion.h1>
          <p className="text-xl text-muted font-medium leading-relaxed">
            We've combined neuroscience with cutting-edge artificial intelligence to create 
            the world's most effective education platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`w-24 h-24 ${detail.bg} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner`}>
                {detail.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{detail.title}</h3>
              <p className="text-muted font-medium leading-relaxed">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Section */}
        <div className="bg-black text-white rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[150px] -z-0" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8">AI THAT ACTUALLY UNDERSTANDS YOU</h2>
              <p className="text-lg text-gray-400 font-medium leading-relaxed mb-10">
                Our proprietary AI model, PLP-Nano, has been trained on over 10 million hours 
                of educational content across 100+ disciplines. It doesn't just give answers—it 
                teaches you the logic behind them.
              </p>
              <button className="btn-primary">
                Learn About PLP-Nano
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[Brain, Cpu, Globe, Rocket].map((Icon, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <Icon className="text-primary mb-4" size={32} />
                  <div className="text-2xl font-black">99.9%</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Accuracy Rate</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
