import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Link as LinkIcon,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  X,
  Tag,
  Filter,
  Download,
  ExternalLink,
} from "lucide-react";

/*
  Shreyash Ojha  LVMH-Ready Portfolio (Tokyo Cyberpunk)
  ------------------------------------------------------
  Single-file React site built to be production-ready and easy to export.
  Styling uses TailwindCSS; animation via Framer Motion; icons via lucide-react.

  Edit the DATA object below to update content. All images are optional.
  This aesthetic blends luxury minimalism with a restrained Tokyo-cyberpunk palette.

  NOTE (encoding safety):
  - All typographic characters in string literals are normalized or escaped.
  - Avoid raw em-dash or smart quotes in JS strings to prevent parser issues.
*/

const DATA = {
  name: "Shreyash Ojha",
  headline: "Luxury Brand Strategist \u2022 Tech-Driven Retail Innovator \u2022 MPS Parsons",
  location: "New York City, USA",
  email: "Shreyashojha93@gmail.com",
  phone: "+1 (917) 431-3542",
  links: {
    linkedin: "https://www.linkedin.com/in/shreyash-ojha",
    github: "https://github.com/",
    portfolio: "https://your-portfolio.example",
    cvPdf: "#",
  },
  summary:
    "Luxury-grade brand strategy with an engineer's rigor: I design narratives, experiences, and systems that make fashion smarter, more inclusive, and operationally precise  from autonomous shop-floor bots to city-scale experiential pop-ups.",

  skills: [
    {
      group: "Brand & Strategy",
      items: [
        "Luxury brand narrative",
        "Go-to-market (PESO)",
        "Clienteling & CX",
        "Activation & pop-ups",
        "Trend research",
      ],
    },
    {
      group: "Tech & Analytics",
      items: [
        "IoT & microcontrollers",
        "Power BI, Excel (VLOOKUP, pivots)",
        "Data pipelines",
        "Figma \u2192 HTML/React",
        "CLO 3D (garment tech)",
      ],
    },
    {
      group: "Creative Stack",
      items: [
        "Figma/Dev Mode",
        "Midjourney/Gen-AI",
        "Framer/React",
        "Storyboarding",
        "Copywriting",
      ],
    },
  ],

  education: [
    {
      school: "Parsons School of Design, New York",
      degree: "MPS Fashion Management",
      dates: "2024-2025",
      highlights: [
        "Selected 'Nava Collective' featured on Parsons Student Work site",
        "Presented at MPS Fashion Management Showcase",
      ],
    },
    {
      school: "NIFT Delhi",
      degree: "B.Tech Fashion Technology",
      dates: "2020-2024",
      highlights: [
        "Best Graduation Project, Most Innovative, Most Commercially Viable (Shahi Exports robot)",
        "Bharat Tex 2025 presentation (Ministry of Textiles, Govt. of India)",
      ],
    },
  ],

  experience: [
    {
      company: "Photography",
      role: "Freelance Contract",
      dates: "",
      bullets: [
        "On-assignment shoots across events, brand activations, and street editorials.",
        "End-to-end delivery: mood boards, shot lists, color grading, and exports for web/print.",
      ],
      skills: ["Photography", "Lightroom", "Color grading", "Art direction", "Street"],
    },
    {
      company: "Shahi Exports",
      role: "Operations & Automation Intern",
      dates: "",
      bullets: [
        "Built a working autonomous WIP-transport robot prototype; awarded Best Graduation Project + two special awards.",
        "Mapped factory-floor flows; quantified throughput, safety, and ROI scenarios for scaled deployment.",
      ],
      skills: ["IoT", "Embedded programming", "Process engineering"],
      links: [
        {
          label: "Bharat Tex video & R&D folder",
          href: "https://drive.google.com/drive/folders/1TRxLZumQccGQxK6sexCD7WimqTcs0h4c?usp=share_link",
        },
      ],
    },
    {
      company: "INZEX Textiles",
      role: "Data & IoT Intern",
      dates: "",
      bullets: [
        "Engineered an IoT needle-runtime tracker; integrated with Power BI dashboards for live ops visibility.",
        "Built complex Excel models (VLOOKUP, pivots, charts) to measure campaign performance; enabled faster decisions.",
      ],
      skills: ["Power BI", "Excel", "IoT"],
      links: [
        {
          label: "INZEX dashboards & backend folder",
          href: "https://drive.google.com/drive/folders/14yD0pMlJ77dYkhsZ07w9XuadtudVK-Xl?usp=share_link",
        },
      ],
    },
    {
      company: "Welspun India",
      role: "Manufacturing Intern",
      dates: "",
      bullets: [
        "Identified hard-waste drivers in terry-towel weaving; proposed reduction levers with cost impact.",
      ],
      skills: ["Lean ops", "Root-cause analysis"],
    },
    {
      company: "AS;IB (Freelance)",
      role: "Front-End & Brand Experience",
      dates: "",
      bullets: [
        "Designed an emotionally resonant 'Gateway' profile-creation screen prioritizing safety and UX clarity.",
        "Prototyped in Replit/Next.js; integrated measurement tutorials and address inputs with minimal friction.",
      ],
      skills: ["Figma", "React", "UX writing"],
    },
    {
      company: "Italy on Madison",
      role: "Styling Assistant",
      dates: "",
      bullets: [
        "Supported client styling sessions and look building across contemporary and luxury brands.",
        "Prepped pulls, coordinated fittings, and maintained sample tracking to ensure on-time returns.",
      ],
      skills: ["Styling", "Clienteling", "Merchandising"],
    },
    {
      company: "Genesis 2.2",
      role: "Marketing Director and Event Ops",
      dates: "",
      bullets: [
        "Led marketing and end-to-end event operations for the Genesis 2.2 showcase; coordinated vendors, schedules, and on-site production.",
        "Planned campaign calendar and cross-channel promotion; aligned creative assets with brand tone and runway timing.",
        "Developed and maintained complex Excel spreadsheets with VLOOKUP, pivot tables, and charts to track and analyze marketing campaign performance, resulting in a measurable increase in efficiency.",
      ],
      skills: [
        "Event operations",
        "Marketing strategy",
        "Run of show",
        "Vendor management",
        "Excel (VLOOKUP, pivots)",
        "Content calendar",
        "Clienteling",
      ],
    },
  ],

  awards: [
    "Best Graduation Project  Shahi Exports (Autonomous WIP robot)",
    "Most Innovative Project  Shahi Exports",
    "Most Commercially Viable Product  Shahi Exports",
    "Bharat Tex Presenter  Ministry of Textiles, Govt. of India (2025)",
    "'Nava Collective' featured  Parsons Student Work",
    "Converge (18 campuses) cross-campus competition mention",
  ],

  projects: [
    {
      id: "nava",
      title: "Nava Collective  Streetwear Micro-Marketplace",
      role: "Founder / Lead Researcher",
      year: "2025",
      city: "NYC",
      tags: ["Marketplace", "Community", "Data", "UX"],
      blurb:
        "Community-driven platform for NYC street-fashion vendors; pooled procurement, dynamic pricing, and vendor-centric analytics.",
      impact:
        "Adoption-Intent Index analysis prioritized monthly thrifters; designed discovery + sizing fixes aligned with WTP bands.",
      actions: [{ label: "Case Study", href: "#nava" }],
      media: null,
      details: [
        "Quant + qual mixed-methods; ANOVA on adoption-intent across thrifting regularity groups.",
        "UX responses to barriers: discovery (73%), shipping (61%), sizing (38%).",
        "Feature interest mapped via Likert; staged rollout toward frequent thrifters.",
      ],
      category: "Strategy",
    },
    {
      id: "milan-gall",
      title: "Milan GaLL  Sustainable Fortress Manifesto",
      role: "Author / Strategist",
      year: "2025",
      city: "Milan (speculative)",
      tags: ["Sustainability", "Policy", "Luxury"],
      blurb:
        "Speculative leadership blueprint repositioning Milan as a global sustainability hub influencing other fashion capitals.",
      impact:
        "Frameworks connect municipal levers, circular pilots, and luxury incentives to shift brand behavior at scale.",
      actions: [{ label: "Read Manifesto", href: "#milan-gall" }],
      media: null,
      details: [
        "Policy-aware design responses; 'Made Again in Milan' city signal system.",
        "Luxury-grade storytelling to align economic prestige with circular mandates.",
      ],
      category: "Thought Leadership",
    },
    {
      id: "trend-spike",
      title: "Trend Spike Radar  Free City-Trend Analyzer",
      role: "Product Designer / Dev",
      year: "2025",
      city: "NYC, London, Paris, Milan, Tokyo, Mumbai",
      tags: ["Product", "Data", "Visualization"],
      blurb:
        "Zero-cost tool to visualize micro-spikes and emerging silhouettes across cities using social data and free sources.",
      impact:
        "Location filters + in-depth analytics to guide editorial calendars and micro-drop timing.",
      actions: [{ label: "Live Demo (soon)", href: "#trend-spike" }],
      media: null,
      details: [
        "Scrapers plan for TikTok/Instagram/Reddit signals; interpretability dashboards for spikes/drops.",
      ],
      category: "Tech",
    },
    {
      id: "cartier-rogue",
      title: "Cartier Rogue  Gen-Z Sub-Brand World",
      role: "Brand Strategist",
      year: "2025",
      city: "NYC",
      tags: ["Luxury", "Activation", "Narrative"],
      blurb:
        "Repositioning Cartier via 'Atlas Compass' & 'Meridian Ring'; Maybach-truck activations with NFC treasure hunts.",
      impact:
        "High-emotion pop-ups and livestream loops; scarcity + belonging triggers tuned for modern luxury.",
      actions: [{ label: "Storyboard", href: "#cartier-rogue" }],
      media: [
        { thumb: "https://img.youtube.com/vi/6uw1hpW63Cg/hqdefault.jpg", href: "https://youtu.be/6uw1hpW63Cg" },
        { thumb: "https://img.youtube.com/vi/IQGZCsvl9MM/hqdefault.jpg", href: "https://youtu.be/IQGZCsvl9MM" },
      ],
      details: [
        "Mobile gallery concept (now Maybach); dual-tone fleet; 'Praise the Lord' ad storyboard prompt system.",
      ],
      category: "Luxury",
    },
    {
      id: "offwhite-human",
      title: "Off-White 'HUMAN'  Social Narrative Campaign",
      role: "Creative Director (spec)",
      year: "2025",
      city: "NYC",
      tags: ["Campaign", "Activism", "Installation"],
      blurb:
        "Seat / Shelter / Access / Representation / Ascent  a five-pillar campaign with 48-hour open-source runway.",
      impact:
        "Influencer-led streams (Wisdom Kaye, Aleali May, Bloody Osiris); giant red zip-tie installations.",
      actions: [{ label: "See Concepts", href: "#offwhite-human" }],
      media: null,
      details: [
        "White tee drop; subway-rights metaphor; high-impact benches and AR moments.",
      ],
      category: "Campaign",
    },
    {
      id: "asib-gateway",
      title: "AS;IB  Safety-First Gateway UI",
      role: "UX / Front-End",
      year: "2025",
      city: "Tokyo (brand)",
      tags: ["UX", "Web", "Inclusivity"],
      blurb:
        "Profile creation flow that balances measurement inputs with emotional reassurance and visual clarity.",
      impact:
        "Reduced cognitive load; measurement tutorial placement; elegant address capture.",
      actions: [{ label: "Prototype", href: "#asib-gateway" }],
      media: null,
      details: ["Replit/Next.js prototype; guided steps and micro-copy."],
      category: "UX",
    },
    {
      id: "shahi-robot",
      title: "Autonomous WIP Robot  Shop-Floor Logistics",
      role: "Lead Engineer",
      year: "",
      city: "Delhi",
      tags: ["IoT", "Robotics", "Ops"],
      blurb:
        "Award-winning autonomous robot prototype moving work-in-process safely across sewing lines.",
      impact:
        "Throughput modeling + ROI; safety and reliability baselines for pilot.",
      actions: [{ label: "Tech Notes", href: "#shahi-robot" }],
      media: null,
      details: ["Sensors, microcontrollers, safety logic; floor map routing."],
      category: "Tech",
    },
  ],
};

const ACCENTS = {
  bg: "bg-[#08080a]",
  text: "text-zinc-100",
  subtext: "text-zinc-400",
  card: "bg-white/5 border border-white/10 backdrop-blur",
  glowCyan: "shadow-[0_0_40px_0_rgba(0,229,255,0.25)]",
  glowMagenta: "shadow-[0_0_40px_0_rgba(255,0,229,0.2)]",
  cyan: "#00E5FF",
  magenta: "#FF00E5",
};

// Live animated wallpaper (neon particles)
function LiveWallpaper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; h: number }[] = [];
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const COUNT = reduceMotion ? 16 : 36;
    const SPEED = reduceMotion ? 0.18 : 0.36;

    const resetSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // reset transform so scaling doesn't stack
      // @ts-ignore
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      // @ts-ignore
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: Math.random() * 2 + 0.8,
        h: Math.random() * 360,
      }));
    };

    const step = () => {
      ctx.fillStyle = 'rgba(8,8,10,0.14)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      (ctx as any).globalCompositeOperation = 'lighter';
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.h += 0.35; p.vx += 0.003 * Math.sin(p.h * 0.07); p.vy += 0.003 * Math.cos(p.h * 0.07);
        if (p.x < -50) p.x = window.innerWidth + 50;
        if (p.x > window.innerWidth + 50) p.x = -50;
        if (p.y < -50) p.y = window.innerHeight + 50;
        if (p.y > window.innerHeight + 50) p.y = -50;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 10);
        g.addColorStop(0, `hsla(${p.h}, 100%, 60%, 0.22)`);
        g.addColorStop(1, `hsla(${(p.h + 200) % 360}, 100%, 50%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      (ctx as any).globalCompositeOperation = 'source-over';
      if (!reduceMotion) raf = requestAnimationFrame(step);
    };

    const onResize = () => { resetSize(); init(); };

    resetSize();
    init();
    step();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas aria-hidden className="fixed inset-0 -z-10 pointer-events-none opacity-[0.14]" ref={canvasRef} />;
}

// Reusable 3D tilt wrapper for cards (mouse tilt)
function Tilt3D({ children, intensity = 6, className }: { children: React.ReactNode; intensity?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const mvZ = useMotionValue(0);
  const rotateX = useSpring(mvY, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(mvX, { stiffness: 180, damping: 18 });
  const z = useSpring(mvZ, { stiffness: 180, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mvY.set((py - 0.5) * intensity);
    mvX.set((0.5 - px) * intensity);
    mvZ.set(20);
  };
  const onLeave = () => { mvX.set(0); mvY.set(0); mvZ.set(0); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ perspective: 1000, transformStyle: 'preserve-3d' }} className={className}>
      <motion.div style={{ rotateX, rotateY, z }}>
        {children}
      </motion.div>
    </div>
  );
}

// Scroll-reactive discovery overlay (very subtle color shift/parallax)
function DiscoveryOverlay() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800, 1600, 2400], [0.01, 0.03, 0.035, 0.04]);
  const y = useTransform(scrollY, [0, 2000], [0, -120]);
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        y,
        opacity,
        background:
          "radial-gradient(700px 350px at 15% 120%, rgba(0,229,255,0.05), transparent 60%)," +
          "radial-gradient(900px 450px at 110% 0%, rgba(255,0,229,0.04), transparent 60%)",
      }}
    />
  );
}

// Vertical neon scroll progress bar (discovery cue)
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 20, mass: 0.4 });
  return (
    <div className="fixed right-4 top-24 h-[60vh] w-1 rounded-full bg-white/5 overflow-hidden z-30 pointer-events-none">
      <motion.div className="w-full h-full origin-top bg-gradient-to-b from-[#00E5FF] via-[#B388FF] to-[#FF00E5]" style={{ scaleY, opacity: 0.55 }} />
    </div>
  );
}

function NeonWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative">
      <span
        className="bg-gradient-to-r from-[#00E5FF] via-[#B388FF] to-[#FF00E5] bg-clip-text text-transparent"
        style={{ textShadow: "0 0 30px rgba(0,229,255,0.25)" }}
      >
        {children}
      </span>
    </span>
  );
}

function SectionTitle({ icon: Icon, title, kicker }: { icon: any; title: string; kicker?: string }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-zinc-300" />
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {kicker ? <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">{kicker}</span> : null}
    </div>
  );
}

function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-black/20 bg-white text-black">
      <Tag className="w-3 h-3" /> {label}
    </span>
  );
}

function useCategories(projects: typeof DATA.projects) {
  return useMemo(() => {
    const cats = new Set<string>(["All"]);
    projects.forEach((p) => cats.add(p.category));
    return Array.from(cats);
  }, []);
}

// Lightweight runtime smoke tests to catch regressions in UI requirements
function runSmokeTests() {
  try {
    if (typeof window === "undefined") return;

    const nameEl = document.querySelector('[data-testid="hero-name"]') as HTMLElement | null;
    const taglineEl = document.querySelector('[data-testid="hero-tagline"]') as HTMLElement | null;
    console.assert(!!nameEl && !!taglineEl, "Hero name and tagline should render");
    if (nameEl) {
      const display = window.getComputedStyle(nameEl).display;
      console.assert(display === "block", "Hero name should be on its own line (display:block)");
    }

    const dataText = JSON.stringify(DATA);
    // Ensure no curly quotes or raw em-dash exist in content strings
    console.assert(!(/[\u2018\u2019\u201C\u201D\u2014]/.test(dataText)), "No curly quotes or em-dashes in DATA strings");

    // Check black-on-white tag pills exist
    const anyTagPill = document.querySelector('span.text-black');
    if (anyTagPill) {
      const color = window.getComputedStyle(anyTagPill).color;
      console.assert(color === "rgb(0, 0, 0)", "Bubble tag text should be black for contrast");
    }

    // Check phone value sanity
    console.assert(DATA.phone.includes("917") && DATA.phone.includes("431-3542"), "Phone number should be updated");

    // Projects media count for cartier-rogue
    const crogue = DATA.projects.find((p: any) => p.id === 'cartier-rogue');
    if (crogue && Array.isArray(crogue.media)) {
      console.assert(crogue.media.length === 2, "Cartier Rogue should have two media thumbnails");
    }

    // Quick Clicks removed
    const qcSection = document.querySelector('#quick-clicks') as HTMLElement | null;
    console.assert(!qcSection, 'Quick Clicks section should be removed');

    // Ensure Photography experience tab exists
    const workText = (document.querySelector('#work')?.textContent || '');
    console.assert(workText.includes('Photography'), 'Photography experience should be present');
    console.assert(workText.includes('Freelance Contract'), 'Photography role should be "Freelance Contract"');

    // Education assertions
    const eduText = (document.querySelector('#about')?.textContent || '');
    console.assert(eduText.includes('Parsons School of Design, New York'), 'Parsons line should be updated');
    console.assert(eduText.includes('2024-2025'), 'Parsons dates should be 2024-2025');
    console.assert(eduText.includes('NIFT Delhi') && eduText.includes('2020-2024'), 'NIFT dates should be 2020-2024');

    // Footer copy
    const contactText = (document.querySelector('#contact')?.textContent || '');
    console.assert(contactText.includes('Available for opportunities'), 'Footer should say Available for opportunities');

    // Awards section rendered
    const awards = document.querySelector('#awards');
    console.assert(!!awards, 'Awards section should render');
  } catch (err) {
    console.warn("Smoke tests encountered an issue:", err);
  }
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const categories = useCategories(DATA.projects);
  const filtered = useMemo(
    () => (active === "All" ? DATA.projects : DATA.projects.filter((p) => p.category === active)),
    [active]
  );
  const [modal, setModal] = useState<null | typeof DATA.projects[number]>(null);

  // Scroll-driven 3D motion for hero
  const { scrollY } = useScroll();
  const heroY  = useTransform(scrollY, [0, 600], [0, -35]);
  const heroRX = useTransform(scrollY, [0, 600], [0, 5]);

  useEffect(() => {
    runSmokeTests();
  }, []);

  return (
    <div className={`${ACCENTS.bg} ${ACCENTS.text} min-h-screen relative overflow-x-clip`}>
      {/* Background grid & glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <LiveWallpaper />
        <DiscoveryOverlay />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage:
            "radial-gradient(600px 300px at 10% 10%, rgba(0,229,255,0.08), transparent 60%)," +
            "radial-gradient(800px 400px at 90% 10%, rgba(255,0,229,0.06), transparent 60%)," +
            "radial-gradient(1000px 600px at 50% 120%, rgba(179,136,255,0.06), transparent 60%)",
        }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `linear-gradient(transparent 23px, rgba(255,255,255,0.07) 24px), linear-gradient(90deg, transparent 23px, rgba(255,255,255,0.07) 24px)`,
          backgroundSize: "24px 24px",
        }} />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            <NeonWord>SO</NeonWord>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#awards" className="hover:text-white">Awards</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            {DATA.links.linkedin && (
              <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {DATA.links.github && (
              <a href={DATA.links.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            )}
            {DATA.links.cvPdf && DATA.links.cvPdf !== "#" && (
              <a href={DATA.links.cvPdf} className="p-2 rounded-lg hover:bg-white/10" aria-label="Download CV" target="_blank" rel="noreferrer">
                <Download className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Discovery scroll progress bar */}
      <ScrollProgressBar />

      {/* Hero */}
      <section id="top" className="max-w-6xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-16">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ y: heroY, rotateX: heroRX }}
              className="text-3xl md:text-5xl font-semibold leading-tight hero-title"
            >
              <span className="block text-zinc-300" data-testid="hero-name">Shreyash Ojha</span>
              <span data-testid="hero-tagline"><NeonWord>Luxury Strategy x Tech</NeonWord></span>
            </motion.h1>
            <p className="mt-4 text-zinc-400 max-w-2xl">{DATA.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 ${ACCENTS.card} ${ACCENTS.glowCyan}`}
              >
                <Sparkles className="w-4 h-4" /> Explore Work
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 ${ACCENTS.card} hover:shadow-[0_0_40px_0_rgba(255,0,229,0.25)]`}
              >
                <Mail className="w-4 h-4" /> Contact
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2 mr-4"><MapPin className="w-3 h-3" /> {DATA.location}</span>
              <span className="inline-flex items-center gap-2 mr-4"><Phone className="w-3 h-3" /> {DATA.phone}</span>
              <span className="inline-flex items-center gap-2"><LinkIcon className="w-3 h-3" /> Portfolio: <a className="underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer" href={DATA.links.portfolio}>link</a></span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className={`relative rounded-2xl p-6 md:p-8 ${ACCENTS.card} ${ACCENTS.glowMagenta}`}>
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-400">Signature Stack</div>
              <ul className="mt-3 text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Luxury narrative + city-scale activation</li>
                <li>Data-informed retail and product bets</li>
                <li>Shop-floor automation & dashboards</li>
                <li>Elegant UX with safety & inclusion</li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-2 text-xs text-zinc-400">
                {DATA.skills.map((g) => (
                  <div key={g.group} className="rounded-lg px-3 py-2 border border-white/10 bg-white/5">
                    <div className="font-medium text-zinc-300 mb-1">{g.group}</div>
                    <div className="flex flex-wrap gap-1">
                      {g.items.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded-full bg-black/30 border border-white/10">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <SectionTitle icon={Briefcase} title="Experience" kicker={"OPS \u2022 DATA \u2022 LUXURY"} />
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.experience.map((job) => (
            <Tilt3D key={job.company} className="">
              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                className={`rounded-2xl p-6 ${ACCENTS.card}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold text-white">{job.company}</div>
                    <div className="text-sm text-zinc-300">{job.role}</div>
                  </div>
                  <div className="text-xs text-zinc-400">{job.dates}</div>
                </div>
                <ul className="mt-3 space-y-2 text-zinc-300">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400" /> <span>{b}</span></li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.map((s) => <TagPill key={s} label={s} />)}
                </div>
                {job.links?.length ? (
                  <div className="mt-4">
                    {job.links.map((L) => (
                      <a key={L.href} href={L.href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-black/20 bg-white text-black`}>
                        <ExternalLink className="w-4 h-4" /> <span className="font-medium">{L.label}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            </Tilt3D>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <SectionTitle icon={Sparkles} title="Selected Projects" kicker={"TOKYO CYBERPUNK \u00D7 LUXURY MINIMALISM"} />
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-zinc-400">{filtered.length} shown</div>
          <div className="flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4 text-zinc-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setActive(c)} className={`px-3 py-1.5 rounded-full border transition ${ACCENTS.card} ${active === c ? "bg-white/10" : "hover:bg-white/10"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry columns to fill gaps nicely */}
        <div className="columns-1 md:columns-2 gap-6 [column-fill:_balance]">
          {filtered.map((p) => (
            <Tilt3D key={p.id} className="mb-6 break-inside-avoid">
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-2xl p-6 ${ACCENTS.card} hover:shadow-[0_0_60px_0_rgba(0,229,255,0.25)]`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  <span className="text-xs text-zinc-400">{p.city}{" \u2022 "}{p.year}</span>
                </div>
                <p className="mt-2 text-zinc-300">{p.blurb}</p>
                <p className="mt-1 text-sm text-zinc-400">{p.impact}</p>
                {(Array.isArray(p.media) ? p.media : (p.media ? [p.media] : [])).map((m, idx) => (
                  <a key={idx} href={m.href} target="_blank" rel="noreferrer" className="mt-3 block rounded-xl overflow-hidden border border-black/20 bg-white">
                    <img loading="lazy" src={m.thumb} alt={p.title + ' video thumbnail'} className="w-full h-40 object-cover" />
                  </a>
                ))}
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <TagPill key={t} label={t} />)}</div>
                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => setModal(p)} className="inline-flex items-center gap-1 text-sm underline decoration-dotted underline-offset-4">
                    Case details <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  {p.actions?.map((a) => (
                    <a key={a.label} href={a.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-zinc-300/80 hover:text-white">
                      {a.label} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
                <div aria-hidden className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(closest-side, ${ACCENTS.cyan}, transparent)` }} />
              </motion.article>
            </Tilt3D>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <SectionTitle icon={Award} title="Awards & Distinctions" kicker="RECOGNITION" />
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.awards.map((a, i) => (
            <div key={i} className={`rounded-2xl p-6 ${ACCENTS.card}`}>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-zinc-300" />
                <div className="text-zinc-300">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <SectionTitle icon={GraduationCap} title="Education" kicker={"PARSONS \u00D7 NIFT"} />
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.education.map((e) => (
            <div key={e.school} className={`rounded-2xl p-6 ${ACCENTS.card}`}>
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">{e.school}</div>
                <div className="text-xs text-zinc-400">{e.dates}</div>
              </div>
              <div className="text-zinc-300">{e.degree}</div>
              <ul className="mt-3 space-y-2 text-zinc-300">
                {e.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400" /> <span>{h}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-12 gap-6 items-start">
          <div className={`md:col-span-7 rounded-2xl p-6 md:p-8 ${ACCENTS.card}`}>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-zinc-300 leading-relaxed">
              I combine luxury storytelling with technical depth to deliver experiences that feel inevitable: clear,
              data-literate, and emotionally resonant. My work toggles between brand worlds (Cartier Rogue, Off-White
              HUMAN), city-scale frameworks (Milan GaLL), and operational systems (Trend Spike Radar, WIP robot)  all
              with the same goal: make fashion smarter and kinder.
            </p>
          </div>
          <div className={`md:col-span-5 rounded-2xl p-6 md:p-8 ${ACCENTS.card}`}>
            <h3 className="text-lg font-semibold mb-2">Capabilities Snapshot</h3>
            <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
              <li>Concept {" \u2192 "} Case Study: research, narrative, visual system, deck</li>
              <li>Retail ops instrumentation: dashboards, SOPs, pilot metrics</li>
              <li>Experiential pop-ups: end-to-end creative & logistics blueprint</li>
              <li>UX prototypes: Figma, React/Next, inclusive micro-copy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className={`rounded-2xl p-6 md:p-8 text-center ${ACCENTS.card} ${ACCENTS.glowCyan}`}>
          <div className="text-xs uppercase tracking-[0.25em] text-zinc-400">Let's craft something inevitable</div>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold"><NeonWord>Available for opportunities</NeonWord></h3>
          <p className="mt-3 text-zinc-300 max-w-3xl mx-auto">
            I'm especially excited about brand houses that pair heritage with technological courage  biomaterials,
            circular retail, AI-assisted craftsmanship, and quietly radical CX.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href={`mailto:${DATA.email}`} className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/20 bg-white text-black`}>
              <Mail className="w-4 h-4" /> {DATA.email}
            </a>
            <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/20 bg-white text-black`}>
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
        <footer className="max-w-6xl mx-auto px-4 py-8 text-xs text-zinc-500 text-center">
          \u00A9 {new Date().getFullYear()} {DATA.name}. Built with <span className="text-zinc-300">React</span>{" \u00D7 "}<span className="text-zinc-300">Tailwind</span>{" \u00D7 "}<span className="text-zinc-300">Framer Motion</span>.
        </footer>
      </section>

      {/* Modal: Project details */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              className={`relative max-w-2xl w-full rounded-2xl p-6 ${ACCENTS.card}`}
            >
              <button onClick={() => setModal(null)} className="absolute right-3 top-3 p-2 rounded-lg hover:bg-white/10" aria-label="Close">
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">{modal.city}{" \u2022 "}{modal.year}</div>
                  <h3 className="text-xl font-semibold mt-1">{modal.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">{modal.tags.map((t) => <TagPill key={t} label={t} />)}</div>
              </div>
              <p className="mt-3 text-zinc-300">{modal.blurb}</p>
              <ul className="mt-4 text-zinc-300 space-y-2 list-disc list-inside">
                {modal.details?.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              {modal.actions?.length ? (
                <div className="mt-5 flex gap-3">
                  {modal.actions.map((a) => (
                    <a key={a.label} href={a.href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/15 ${ACCENTS.card}`}>
                      {a.label} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
