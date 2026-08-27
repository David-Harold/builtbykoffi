"use client";

import { motion } from "framer-motion";
import FadeIn from "./components/FadeIn";
import Typewriter from "./components/Typewriter";

export default function Home() {
  return (
    <main className="min-h-screen text-[#EDEBE4] flex flex-col">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-widest uppercase text-[#EDEBE4]/60 mb-6"
        >
          <Typewriter />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl font-bold tracking-tight leading-tight max-w-3xl"
        >
          David-Harold E. Koffi-Essiben
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg text-[#EDEBE4]/60 max-w-xl leading-relaxed"
        >
          Software engineer and builder based in Kigali. Working at the intersection 
          of code, financial systems, and African digital infrastructure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <a href="#work" className="px-6 py-3 bg-[#EDEBE4] text-[#0F0F0F] font-medium text-sm rounded-full hover:opacity-90 transition">
            See my work
          </a>
          <a href="#contact" className="px-6 py-3 border border-[#EDEBE4]/40 text-[#EDEBE4] font-medium text-sm rounded-full hover:border-[#EDEBE4] transition">
            Work with me
          </a>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-8 py-32 max-w-5xl mx-auto w-full scroll-mt-24">
        <FadeIn>
          <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
            Selected Work
          </span>
          <h2 className="mt-4 text-4xl font-bold text-[#EDEBE4] tracking-tight">
            Things I've built
          </h2>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <FadeIn delay={0.1}>
            <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 hover:border-[#EDEBE4]/30 transition h-full">
              <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                Python · MySQL · Finance · Lead Contributor
              </span>
              <h3 className="mt-3 text-xl font-semibold text-[#EDEBE4]">
                Central Bank Liquidity System
              </h3>
              <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                Originated the concept and led a 6-person team to build a Python/MySQL simulation of a central bank's weekly refinancing operation — modeling eligibility rules, collateral haircuts, and a 7-day settlement cycle with automated interest calculation.
              </p>
              <a href="https://github.com/David-Harold/Central-Bank-Liquidity-System---Weekly-refinancing-system-" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#EDEBE4]/60 transition">
                View project →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 hover:border-[#EDEBE4]/30 transition h-full">
              <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                TypeScript · AI · Google AI Pro
              </span>
              <h3 className="mt-3 text-xl font-semibold text-[#EDEBE4]">
                Metamorph
              </h3>
              <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                AI-powered idea visualization tool. Input any concept for a product or service and Metamorph makes it tangible — turning abstract thinking into structured, actionable form.
              </p>
              <a href="https://github.com/David-Harold/Metamorph.-" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#EDEBE4]/60 transition">
                View project →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 hover:border-[#EDEBE4]/30 transition h-full">
              <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                TypeScript · AI · HR & Wellness
              </span>
              <h3 className="mt-3 text-xl font-semibold text-[#EDEBE4]">
                Eureka
              </h3>
              <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                Mental health assessment tool for institutions. Equips HR and Wellness departments with what they need to track the overall atmosphere and wellbeing of students and employees.
              </p>
              <a href="https://github.com/David-Harold/Eureka-" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#EDEBE4]/60 transition">
                View project →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 hover:border-[#EDEBE4]/30 transition h-full">
              <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                TypeScript · AI · LLM · Google AI Pro
              </span>
              <h3 className="mt-3 text-xl font-semibold text-[#EDEBE4]">
                Eagle Eye
              </h3>
              <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                A native LLM built from scratch — an experiment in understanding how large language models work under the hood. Built for learning, built for curiosity.
              </p>
              <a href="https://github.com/David-Harold/Eagle-Eye-Project-" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#EDEBE4]/60 transition">
                View project →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 hover:border-[#EDEBE4]/30 transition h-full">
              <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                Next.js · TypeScript · Personal Brand
              </span>
              <h3 className="mt-3 text-xl font-semibold text-[#EDEBE4]">
                builtbykoffi.com
              </h3>
              <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                This website. Designed and built from scratch using Next.js, Tailwind CSS, and TypeScript. Deployed on Vercel. Open source.
              </p>
              <a href="https://github.com/David-Harold/builtbykoffi" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#EDEBE4]/60 transition">
                View project →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 hover:border-[#EDEBE4]/30 transition h-full">
              <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                Bash · Shell · Linux · ALU Summative
              </span>
              <h3 className="mt-3 text-xl font-semibold text-[#EDEBE4]">
                Deploy Agent
              </h3>
              <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                Bash automation script for project workspace setup with interrupt recovery — if execution is cut short, it archives in-progress work to a .tar.gz before exiting cleanly.
              </p>
              <a href="https://github.com/David-Harold/deploy_agent_David-Harold" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#EDEBE4]/60 transition">
                View project →
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Finance & Infrastructure Section */}
      <section id="finance" className="px-8 py-32 w-full border-t border-[#EDEBE4]/10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
              Finance & Infrastructure
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#EDEBE4] tracking-tight">
              Code is the easy part.
            </h2>
            <p className="mt-6 text-sm text-[#EDEBE4]/60 max-w-2xl leading-relaxed">
              Before I wrote software, I studied how economies work — how money moves through institutions, 
              how risk is priced, how policy shapes the financial fabric of a continent. 
              That foundation doesn't disappear when I open a code editor. It sharpens it.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">

            <FadeIn delay={0.1}>
              <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 h-full">
                <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                  Financial Systems
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#EDEBE4]">
                  Research & Quantitative Analysis
                </h3>
                <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                  Research Intern at the Bank of Central African States (BEAC), Directorate of Financial Stability. Authored <span className="text-[#EDEBE4]/80 italic">"Sovereign Risk vs. Décote: Effects on Banking Risk"</span> — analyzing how sovereign risk perception drives collateral haircuts across CEMAC's six member states. Built a quantitative model computing Basel III CET1 ratios, risk-weighted assets, and probability of default under varying haircut scenarios. Presented findings to the Director of Financial Stability and Director of Financial Inclusion & Innovation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 h-full">
                <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                  African Digitalization
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#EDEBE4]">
                  Infrastructure & Digital Systems
                </h3>
                <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                  Long-term focus on the digital infrastructure that connects and formalizes African economies. Interested in the systems — financial, institutional, technical — that create real leverage for the next generation of builders and policymakers on the continent. Building toward that intersection, one project at a time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-8 h-full">
                <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                  Systems Thinking
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#EDEBE4]">
                  Where Code Meets Context
                </h3>
                <p className="mt-3 text-sm text-[#EDEBE4]/60 leading-relaxed">
                  Engineering training on top of an economics and financial-analysis foundation. Build software with an understanding of the institutional context it operates in — not just what a system does, but why it exists, who it serves, and what breaks when it fails.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Skills & Credentials Section */}
      <section id="skills" className="px-8 py-32 w-full border-t border-[#EDEBE4]/10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
              Skills & Credentials
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#EDEBE4] tracking-tight">
              What I work with.
            </h2>
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2">

            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-[#EDEBE4]/50 mb-8">
                  Technical Skills
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { name: "Bash / Shell Scripting", status: "proficient" },
                    { name: "Linux", status: "proficient" },
                    { name: "Git & GitHub", status: "proficient" },
                    { name: "Next.js", status: "proficient" },
                    { name: "TypeScript", status: "proficient" },
                    { name: "Financial Modeling & Simulation", status: "proficient" },
                    { name: "Python", status: "learning" },
                    { name: "MySQL", status: "learning" },
                    { name: "JavaScript", status: "learning" },
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between border-b border-[#EDEBE4]/10 pb-4">
                      <span className="text-sm text-[#EDEBE4]">{skill.name}</span>
                      {skill.status === "learning" ? (
                        <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/40">
                          In progress
                        </span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#EDEBE4]"></span>
                      )}
                    </div>
                  ))}
                </div>
                <a href="https://github.com/David-Harold" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 text-[#EDEBE4]/50 hover:text-[#EDEBE4] transition">
                  <span className="text-xs tracking-widest uppercase">GitHub</span>
                  <span className="text-sm">@David-Harold</span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-[#EDEBE4]/50 mb-8">
                  Certifications & Education
                </h3>

                {/* ALU */}
                <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                    African Leadership University · 2026–2028
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-[#EDEBE4]">
                    BSc Software Engineering
                  </h4>
                  <p className="mt-2 text-sm text-[#EDEBE4]/60">
                    TGPA 4.70 / 5.0
                  </p>
                </div>

                {/* Google AI */}
                <div className="border border-[#EDEBE4]/10 bg-[#0F0F0F]/60 backdrop-blur-sm rounded-lg p-6">
                  <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                    Google · 2026
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-[#EDEBE4]">
                    Google AI Professional
                  </h4>
                  <div className="mt-4 flex flex-col gap-2">
                    {[
                      "AI Fundamentals",
                      "AI for App Building",
                      "AI for Data Analysis",
                      "AI for Content Creation",
                      "AI for Writing & Communicating",
                      "AI for Research & Insights",
                      "AI for Brainstorming & Planning",
                    ].map((course) => (
                      <div key={course} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#EDEBE4]/40"></span>
                        <span className="text-xs text-[#EDEBE4]/50">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-32 w-full border-t border-[#EDEBE4]/10 scroll-mt-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-16 sm:grid-cols-2">
          <FadeIn>
            <div>
              <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
                About
              </span>
              <h2 className="mt-4 text-4xl font-bold text-[#EDEBE4] tracking-tight">
                Not a straight line.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6 text-[#EDEBE4]/60 text-sm leading-relaxed">
              <p>
                I started in Economics. Geopolitics. Finance. IB Diploma, then a degree in Economics and Management at PKFOKAM Institute — GPA 4.11. I thought that was the path. Then I realized the real leverage was in the systems underneath all of it.
              </p>
              <p>
                I transferred to African Leadership University in Kigali to study Software Engineering. TGPA 4.70/5.0. Before that I spent a summer at the Bank of Central African States, building quantitative risk models and writing research that ended up on the Director of Financial Stability's desk.
              </p>
              <p>
                Now I build software. Led the Central Bank Liquidity System. Built AI-powered tools during my Google AI Professional certification. Run the @builtbykoffi brand — dark, minimal, serious.
              </p>
              <p>
                I'm Cameroonian. I operate under <span className="text-[#EDEBE4]">@builtbykoffi</span> — a brand built around tech, media, and what it means to build seriously from Africa.
              </p>
              <a href="#contact" className="mt-2 inline-block text-xs tracking-widest uppercase text-[#EDEBE4] hover:text-[#EDEBE4]/60 transition">
                Let's work together →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-32 w-full border-t border-[#EDEBE4]/10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-[#EDEBE4]/50">
              Contact
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#EDEBE4] tracking-tight max-w-lg">
              Let's build something.
            </h2>
            <p className="mt-6 text-sm text-[#EDEBE4]/60 max-w-md leading-relaxed">
              Open to freelance projects, collaborations, and conversations. 
              If you have something worth building, reach out.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-col gap-4">
              <a href="mailto:builtbykoffi@gmail.com" className="group flex items-center gap-4 text-[#EDEBE4]/50 hover:text-[#EDEBE4] transition">
                <span className="text-xs tracking-widest uppercase">Email</span>
                <span className="text-sm">builtbykoffi@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/builtbykoffi" target="_blank" className="group flex items-center gap-4 text-[#EDEBE4]/50 hover:text-[#EDEBE4] transition">
                <span className="text-xs tracking-widest uppercase">LinkedIn</span>
                <span className="text-sm">linkedin.com/in/builtbykoffi</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-[#EDEBE4]/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xs text-[#EDEBE4]/40">© 2026 Koffi-Essiben Group LLC</span>
          <span className="text-xs text-[#EDEBE4]/40">builtbykoffi</span>
        </div>
      </footer>

    </main>
  );
}