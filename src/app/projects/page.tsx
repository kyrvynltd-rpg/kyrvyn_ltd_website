import { GlassCard } from "@/components/ui/GlassCard";

export default function Projects() {
  return (
    <div className="py-12">
      <h1 className="text-5xl font-bold mb-12">Our Projects</h1>
      
      {/* Bento Grid layout structure */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
        
        {/* Large Feature Card */}
        <GlassCard className="md:col-span-2 md:row-span-2 hover:border-accent-maroon dark:hover:border-accent-blood hover:shadow-[0_0_30px_-5px_var(--accent-blood)] transition-all duration-300" />
        
        {/* Standard Cards */}
        <GlassCard className="md:col-span-2 md:row-span-1 hover:border-accent-maroon dark:hover:border-accent-blood hover:shadow-[0_0_30px_-5px_var(--accent-blood)] transition-all duration-300" />
        <GlassCard className="md:col-span-1 md:row-span-1 hover:border-accent-maroon dark:hover:border-accent-blood hover:shadow-[0_0_30px_-5px_var(--accent-blood)] transition-all duration-300" />
        <GlassCard className="md:col-span-1 md:row-span-1 hover:border-accent-maroon dark:hover:border-accent-blood hover:shadow-[0_0_30px_-5px_var(--accent-blood)] transition-all duration-300" />
        
        {/* Wide Card */}
        <GlassCard className="md:col-span-4 md:row-span-1 hover:border-accent-maroon dark:hover:border-accent-blood hover:shadow-[0_0_30px_-5px_var(--accent-blood)] transition-all duration-300" />

      </div>
    </div>
  );
}
