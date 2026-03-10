"use client";

import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const mainPlans = [
    {
      name: "Starter",
      price: "$19",
      addon: "1x Boost, 40 Credits",
      btnText: "Get Started",
      features: [
        "10hrs Tokens/mo",
        "Access All Courses",
        "10 PDF Exports",
        "Share up to 5 courses",
        "Earn Points per purchase",
        "AI Learning Paths"
      ],
      highlight: false
    },
    {
      name: "Premium",
      price: "$49",
      addon: "1x Boost, 100 Credits",
      btnText: "Get Premium",
      features: [
        "20hrs Advanced Course Creation",
        "Access All Courses",
        "20 PDF Exports",
        "Share up to 10 courses",
        "Earn 50% per purchase",
        "AI Learning Paths"
      ],
      highlight: true
    },
    {
      name: "Team",
      price: "Custom",
      addon: "1 Seat, 1000 Credits",
      btnText: "Get Team",
      features: [
        "Institutional Solution",
        "Custom Enterprise Features",
        "Scalable Access",
        "Dedicated Support",
        "Single Sign-On (SSO)"
      ],
      highlight: false,
      isTeam: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Transparent Pricing</h2>
          <p className="text-muted/70 max-w-2xl mx-auto font-medium">
            Choose the plan that fits your learning goals. Scale as you grow.
          </p>
        </div>

        {/* Main Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-[2.5rem] p-10 shadow-xl border ${
                plan.highlight ? "border-blue-600 ring-1 ring-blue-600 shadow-blue-600/10" : "border-gray-100"
              }`}
            >
              <div className="mb-10 text-center">
                <div className="flex items-baseline justify-center gap-1 mb-8">
                  <span className="text-6xl font-bold text-navy">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted/60 font-semibold">/month</span>}
                </div>

                {/* Dropdown mockups like Figma */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between mb-8 group cursor-pointer hover:bg-blue-50 transition-colors">
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider">{plan.isTeam ? "Team Size" : "Add-ons"}</span>
                    <span className="text-sm font-bold text-navy">{plan.addon}</span>
                  </div>
                  <ChevronDown size={16} className="text-blue-600 transition-transform group-hover:rotate-180" />
                </div>

                <button className={`w-full py-5 rounded-2xl font-bold transition-all transform active:scale-95 ${
                  plan.highlight 
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700" 
                    : "bg-navy text-white hover:bg-navy/90"
                }`}>
                  {plan.btnText}
                </button>
                <p className="text-[10px] text-muted font-bold uppercase tracking-widest mt-4">
                  *Billed $588 yearly
                </p>
              </div>

              <div className="space-y-4">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={16} className="text-navy" />
                    <span className="text-sm font-semibold text-muted/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Free Plan Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gray-50/50 border border-gray-100 rounded-[2.5rem] p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-md">
              <h3 className="text-6xl font-bold text-navy mb-4">Free</h3>
              <div className="text-4xl font-bold text-navy mb-8">$0</div>
              <p className="text-muted/70 text-lg leading-relaxed font-medium">
                The Free plan allows users to experience core learning features, create basic training content. It's ideal for testing the platform before moving to a paid plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {["1hr Advanced Token/mo", "Access to All Courses", "5 PDF Exports"].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <Check size={18} className="text-green-500" />
                    <span className="text-lg font-semibold text-navy/80">{f}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-5 h-5 flex items-center justify-center font-bold text-red-500">×</div>
                   <span className="text-lg font-semibold text-navy/40">No Library Sharing</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center font-bold text-red-500">×</div>
                    <span className="text-lg font-semibold text-navy/40">Standard Support</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

