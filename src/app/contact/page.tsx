import { Github, Twitter, Linkedin, Send } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Contact() {
  return (
    <div className="py-12 max-w-2xl mx-auto">
      <GlassCard className="p-8 mb-12 shadow-xl text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">Contact Operations</h1>
        <p className="text-slate-900 dark:text-slate-400">
          For corporate inquiries and infrastructure partnerships, please submit a secure request.
        </p>
      </GlassCard>

      {/* Minimal Contact Form */}
      <GlassCard className="p-8 group shadow-2xl">
        <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">Representative Name</label>
          <input 
            type="text" 
            id="name" 
            required
            minLength={2}
            aria-label="Representative Name"
            className="w-full bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-maroon dark:focus:border-accent-blood transition-colors invalid:[&:not(:placeholder-shown)]:border-red-500 valid:[&:not(:placeholder-shown)]:border-green-500 peer"
            placeholder="Corporate Representative"
          />
          <span className="text-xs text-red-500 hidden peer-invalid:[&:not(:placeholder-shown)]:block">Please enter a valid representative name.</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">Corporate Email</label>
          <input 
            type="email" 
            id="email" 
            required
            aria-label="Corporate Email"
            className="w-full bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-maroon dark:focus:border-accent-blood transition-colors invalid:[&:not(:placeholder-shown)]:border-red-500 valid:[&:not(:placeholder-shown)]:border-green-500 peer"
            placeholder="decimaminus@gmail.com"
          />
          <span className="text-xs text-red-500 hidden peer-invalid:[&:not(:placeholder-shown)]:block">Please provide a valid corporate email address.</span>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">Inquiry Details</label>
          <textarea 
            id="message" 
            rows={5}
            required
            minLength={10}
            aria-label="Inquiry Details"
            className="w-full bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-maroon dark:focus:border-accent-blood transition-colors resize-none invalid:[&:not(:placeholder-shown)]:border-red-500 valid:[&:not(:placeholder-shown)]:border-green-500 peer"
            placeholder="Detail your institutional requirements or integration needs."
          />
          <span className="text-xs text-red-500 hidden peer-invalid:[&:not(:placeholder-shown)]:block">Your inquiry must be at least 10 characters long.</span>
        </div>

        {/* GDPR Opt-In */}
        <div className="flex items-start gap-3 mt-2">
          <input 
            type="checkbox" 
            id="gdpr-consent" 
            required 
            className="mt-1 w-4 h-4 cursor-pointer accent-accent-maroon dark:accent-accent-blood peer" 
          />
          <label htmlFor="gdpr-consent" className="text-sm text-cool-grey dark:text-gray-400 select-none">
            I explicitly consent to the processing of my corporate data in accordance with the UK GDPR framework and Decima Minus Ltd's <a href="/privacy-policy" className="text-accent-maroon dark:text-accent-blood hover:underline font-semibold">Data Privacy Policy</a>. I authorize the retention of these records for infrastructural communications.
          </label>
        </div>

        <button 
          type="submit" 
          className="bg-accent-maroon dark:bg-accent-blood text-white rounded-xl px-6 py-4 font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2 group-invalid:opacity-50 group-invalid:pointer-events-none"
        >
          Submit Inquiry <Send size={18} />
        </button>
        </form>
      </GlassCard>

      {/* Social Links */}
      <div className="mt-16 flex items-center justify-center gap-8">
        <a href="#" className="text-cool-grey hover:text-accent-maroon dark:hover:text-accent-blood transition-colors">
          <Twitter size={24} />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="#" className="text-cool-grey hover:text-accent-maroon dark:hover:text-accent-blood transition-colors">
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="#" className="text-cool-grey hover:text-accent-maroon dark:hover:text-accent-blood transition-colors">
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
