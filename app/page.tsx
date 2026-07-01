export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#EDEBE4] flex flex-col">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <span className="text-xs tracking-widest uppercase text-[#3A3A38] mb-6">
          Engineer · Builder · Figure-outer
        </span>
        <h1 className="text-6xl font-bold tracking-tight leading-tight max-w-3xl">
          David-Harold Koffi-Essiben
        </h1>
        <p className="mt-6 text-lg text-[#3A3A38] max-w-xl leading-relaxed">
          Software engineer and builder based in Kigali. I build systems, 
          document the process, and create at the intersection of technology 
          and Africa.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#work" className="px-6 py-3 bg-[#EDEBE4] text-[#0F0F0F] font-medium text-sm rounded-full hover:opacity-90 transition">
            See my work
          </a>
          <a href="#contact" className="px-6 py-3 border border-[#3A3A38] text-[#EDEBE4] font-medium text-sm rounded-full hover:border-[#EDEBE4] transition">
            Work with me
          </a>
        </div>
      </section>
      {/* Work Section */}
<section id="work" className="px-8 py-32 max-w-5xl mx-auto w-full">
  <span className="text-xs tracking-widest uppercase text-[#3A3A38]">
    Selected Work
  </span>
  <h2 className="mt-4 text-4xl font-bold text-[#EDEBE4] tracking-tight">
    Things I've built
  </h2>

  <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
    
    {/* Project Card 1 */}
    <div className="border border-[#1a1a1a] rounded-lg p-8 hover:border-[#3A3A38] transition">
      <span className="text-xs tracking-widest uppercase text-[#3A3A38]">
        Security · Python
      </span>
      <h3 className="mt-3 text-xl font-semibold text-[#EDEBE4]">
        Project Name
      </h3>
      <p className="mt-3 text-sm text-[#3A3A38] leading-relaxed">
        A short description of what this project does and why it matters. 
        What problem does it solve?
      </p>
      <a href="#" className="mt-6 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#3A3A38] transition">
        View project →
      </a>
    </div>

    {/* Project Card 2 */}
    <div className="border border-[#1a1a1a] rounded-lg p-8 hover:border-[#3A3A38] transition">
      <span className="text-xs tracking-widest uppercase text-[#3A3A38]">
        AI · Systems
      </span>
      <h3 className="mt-3 text-xl font-semibold text-[#EDEBE4]">
        Project Name
      </h3>
      <p className="mt-3 text-sm text-[#3A3A38] leading-relaxed">
        A short description of what this project does and why it matters. 
        What problem does it solve?
      </p>
      <a href="#" className="mt-6 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#3A3A38] transition">
        View project →
      </a>
    </div>

  </div>
</section>
{/* About Section */}
<section id="about" className="px-8 py-32 w-full border-t border-[#1a1a1a]">
  <div className="max-w-5xl mx-auto grid grid-cols-1 gap-16 sm:grid-cols-2">
    
    <div>
      <span className="text-xs tracking-widest uppercase text-[#3A3A38]">
        About
      </span>
      <h2 className="mt-4 text-4xl font-bold text-[#EDEBE4] tracking-tight">
        Not a straight line.
      </h2>
    </div>

    <div className="flex flex-col gap-6 text-[#3A3A38] text-sm leading-relaxed">
      <p>
        I started in Economics. Geopolitics. Finance. I thought that was the path — 
        understanding how the world moves money and power. Then I realized the real 
        leverage was in the systems underneath all of it.
      </p>
      <p>
        Now I'm at African Leadership University in Kigali, studying Software Engineering. 
        Building at the intersection of security, AI, and African digital infrastructure. 
        Documenting the process along the way.
      </p>
      <p>
        I'm Cameroonian. I operate under <span className="text-[#EDEBE4]">@builtbykoffi</span> — 
        a dark, minimal brand built around tech, media, and what it means to build 
        seriously from Africa.
      </p>
      <a href="#contact" className="mt-2 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#3A3A38] transition">
        Let's work together →
      </a>
    </div>

  </div>
</section>
{/* Contact Section */}
<section id="contact" className="px-8 py-32 w-full border-t border-[#1a1a1a]">
  <div className="max-w-5xl mx-auto">
    
    <span className="text-xs tracking-widest uppercase text-[#3A3A38]">
      Contact
    </span>
    <h2 className="mt-4 text-4xl font-bold text-[#EDEBE4] tracking-tight max-w-lg">
      Let's build something.
    </h2>
    <p className="mt-6 text-sm text-[#3A3A38] max-w-md leading-relaxed">
      Open to freelance projects, collaborations, and conversations. 
      If you have something worth building, reach out.
    </p>

    <div className="mt-12 flex flex-col gap-4">
      <a href="mailto:builtbykoffi@gmail.com" className="group flex items-center gap-4 text-[#3A3A38] hover:text-[#EDEBE4] transition">
        <span className="text-xs tracking-widest uppercase">Email</span>
        <span className="text-sm group-hover:text-[#EDEBE4] transition">builtbykoffi@gmail.com</span>
      </a>
      <a href="https://linkedin.com/in/builtbykoffi" target="_blank" className="group flex items-center gap-4 text-[#3A3A38] hover:text-[#EDEBE4] transition">
        <span className="text-xs tracking-widest uppercase">LinkedIn</span>
        <span className="text-sm group-hover:text-[#EDEBE4] transition">linkedin.com/in/builtbykoffi</span>
      </a>
    </div>

  </div>
</section>

{/* Footer */}
<footer className="px-8 py-8 border-t border-[#1a1a1a]">
  <div className="max-w-5xl mx-auto flex items-center justify-between">
    <span className="text-xs text-[#3A3A38]">© 2026 Koffi-Essiben Group LLC</span>
    <span className="text-xs text-[#3A3A38]">builtbykoffi</span>
  </div>
</footer>

    </main>
  );
}