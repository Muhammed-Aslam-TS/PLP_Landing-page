"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Globe, Layers, Rocket, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Interactive AI Tutors",
      description: "Learn with a dedicated AI that understands your pace and style.",
      icon: <Brain className="text-blue-600" size={32} />,
      size: "large",
      bg: "bg-blue-50",
    },
    {
      title: "Real-world Projects",
      description: "Build portfolio-ready projects mentored by industry experts.",
      icon: <Rocket className="text-orange-600" size={32} />,
      size: "small",
      bg: "bg-orange-50",
    },
    {
      title: "Adaptive Curriculum",
      description: "Our syllabus evolves with industry trends in real-time.",
      icon: <Layers className="text-purple-600" size={32} />,
      size: "small",
      bg: "bg-purple-50",
    },
    {
      title: "Global Certification",
      description: "Get recognized by top tech companies worldwide.",
      icon: <Globe className="text-green-600" size={32} />,
      size: "small",
      bg: "bg-green-50",
    },
    {
      title: "Advanced Analytics",
      description: "Track your progress with deep insights and skill mapping.",
      icon: <Cpu className="text-indigo-600" size={32} />,
      size: "large",
      bg: "bg-indigo-50",
    },
    {
      title: "Secure Learning",
      description: "Verified content and secure credential management.",
      icon: <Shield className="text-slate-600" size={32} />,
      size: "small",
      bg: "bg-slate-50",
    },
  ];

  return (
    <section id="features" className="py-32 bg-navy relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-4 block">Advanced Capabilities</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-white italic">
              REVOLUTIONIZING <br /><span className="text-primary not-italic">LEARNING</span>
            </h2>
            <p className="text-white/40 font-bold text-lg md:text-xl uppercase tracking-[0.2em] max-w-2xl mx-auto">
              Master the future of creation with our professional ecosystem
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/20 hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle Gradient Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-500">
                {feature.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 tracking-tight text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed font-bold text-sm uppercase tracking-wide opacity-80">
                  {feature.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="w-12 h-1 bg-white/10 mt-8 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}

