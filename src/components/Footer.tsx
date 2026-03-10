import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <GraduationCap size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Cogniversity</span>
            </Link>
            <p className="text-white/60 font-medium leading-relaxed mb-8">
              Empowering learners worldwide with AI-driven education. Build your future with the most advanced platform on the planet.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-white/40">Platform</h4>
            <ul className="space-y-4 font-semibold text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">AI Course Generator</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Course Library</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Learning Path</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Certifications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-white/40">Company</h4>
            <ul className="space-y-4 font-semibold text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-white/40">Newsletter</h4>
            <p className="text-white/60 mb-6 font-medium">Get the latest news and learning tips.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button className="bg-secondary text-navy px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/10">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm font-medium">
            © 2026 Cogniversity AI Learning. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
