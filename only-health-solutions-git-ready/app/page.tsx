"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, HeartHandshake, Users, Stethoscope, BedDouble, Brain, CalendarHeart, MessageCircle } from "lucide-react";
import AIChatAssistant from './components/AIChatAssistant';
import FloatingContactButtons from './components/FloatingContactButtons';
import LuxuryLoader from './components/LuxuryLoader';

const site = {
  phone: "770-439-7666",
  email: "info@onlyhealthsolutions.com",
  website: "www.onlyhealthsolutions.com",
  serviceArea: "Smyrna, Atlanta, and surrounding communities",
  tagline: "Your Home. Your Health. Our Commitment.",
};

const services = [
  { slug: "personal-care", title: "Personal Care Assistance", icon: HeartHandshake, intro: "Respectful one-on-one support with daily activities.", overview: "Hands-on support with everyday routines while remaining in the comfort of home." },
  { slug: "companion-care", title: "Companion Care", icon: Users, intro: "Warm companionship that supports emotional wellness.", overview: "Meaningful companionship, engagement, and routine support." },
  { slug: "post-hospital-care", title: "Post-Hospital Support", icon: Stethoscope, intro: "Smooth transitions home after surgery or hospitalization.", overview: "Recovery support that helps clients settle in safely at home." },
  { slug: "respite-care", title: "Respite Care", icon: CalendarHeart, intro: "Flexible short-term relief for family caregivers.", overview: "Trusted coverage so caregivers can rest and recharge." },
  { slug: "nursing-care", title: "Skilled Nursing Care", icon: Stethoscope, intro: "Professional nursing support delivered at home.", overview: "Clinical oversight, monitoring, and medical assistance in the comfort of home." },
  { slug: "dementia-care", title: "Alzheimer’s & Dementia Care", icon: Brain, intro: "Compassionate memory care focused on routine and safety.", overview: "Calm, structured support for clients living with memory loss." },
  { slug: "live-in-care", title: "Live-In & Extended Care", icon: BedDouble, intro: "Higher-touch support with day-to-night continuity.", overview: "Longer coverage and a dependable rhythm of support." }
];

const testimonials = [
  { name: "Family Member", quote: "Only Health Solutions brought calm, professionalism, and genuine compassion into our home when we needed it most." },
  { name: "Client Family", quote: "Their caregivers were dependable, kind, and attentive. We felt supported every step of the way." },
  { name: "Private Client", quote: "The care felt personal, respectful, and beautifully tailored to our family’s needs." },
];

const navItems = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "careers", label: "Careers" },
  { key: "faq", label: "FAQ" },
  { key: "contact", label: "Contact" },
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Logo() {
  return (
    <button onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "home" }))} aria-label="Only Health Solutions home">
      <picture>
        <source media="(max-width: 767px)" srcSet="/logo-icon.png" />
        <img src="/logo-primary.png" alt="Only Health Solutions" className="h-11 w-auto object-contain md:h-14" />
      </picture>
    </button>
  );
}

function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-gradient-to-r from-[#22D3EE] to-[#A855F7] text-slate-200 lg:block">
      <Container className="flex items-center justify-between py-3 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2"><Phone size={15} /> {site.phone}</div>
          <div className="flex items-center gap-2"><Mail size={15} /> {site.email}</div>
        </div>
        <div className="flex items-center gap-2 text-slate-300"><MapPin size={15} /> {site.serviceArea}</div>
      </Container>
    </div>
  );
}

function Header({ page, setPage }: { page: string; setPage: (page: string) => void }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const go = (key: string) => {
    setPage(key);
    setOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const closeMenus = () => setServicesOpen(false);
    window.addEventListener("click", closeMenus);
    return () => window.removeEventListener("click", closeMenus);
  }, []);
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
        <Container className="flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
            <Logo />
            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => item.key === "services" ? (
                <div key={item.key} className="relative">
                  <button onClick={(e) => { e.stopPropagation(); setServicesOpen((v) => !v); }} className={`flex items-center gap-1 text-sm transition ${page === item.key ? "font-semibold text-slate-950" : "text-slate-600 hover:text-slate-950"}`}>
                    {item.label}
                    <ChevronRight size={14} className={`transition ${servicesOpen ? "rotate-180" : "rotate-90"}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full z-30 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl" onClick={(e) => e.stopPropagation()}>
                      <button onClick={() => go("services")} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50">All Services</button>
                      <div className="my-1 border-t border-slate-100" />
                      {services.map((service) => (
                        <button key={service.slug} onClick={() => go(service.slug)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-950">{service.title}</button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button key={item.key} onClick={() => go(item.key)} className={`text-sm transition ${page === item.key ? "font-semibold text-slate-950" : "text-slate-600 hover:text-slate-950"}`}>{item.label}</button>
              ))}
            </nav>
          </div>
          <div className="hidden md:block">
            <button onClick={() => go("contact")} className="rounded-full bg-gradient-to-r from-[#22D3EE] to-[#A855F7] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:opacity-90 hover:shadow-lg">Request Care</button>
          </div>
          <button className="shrink-0 md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </Container>
        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <Container className="flex flex-col py-3">
              {navItems.map((item) => item.key === "services" ? (
                <div key={item.key} className="py-2">
                  <button onClick={() => go("services")} className="py-3 text-left font-medium text-slate-700">{item.label}</button>
                  <div className="ml-3 flex flex-col border-l border-slate-200 pl-4">
                    {services.map((service) => (
                      <button key={service.slug} onClick={() => go(service.slug)} className="py-2 text-left text-sm text-slate-600 hover:text-slate-950">{service.title}</button>
                    ))}
                  </div>
                </div>
              ) : (
                <button key={item.key} onClick={() => go(item.key)} className="py-3 text-left text-slate-700">{item.label}</button>
              ))}
            </Container>
          </div>
        )}
      </header>
    </>
  );
}

function HomePage({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="relative overflow-hidden">
        <motion.div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "radial-gradient(circle at top left, rgba(255,255,255,0.10), transparent 30%), linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.92))" }} animate={{ backgroundPosition: ["0% 50%","100% 50%","0% 50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_42%,rgba(0,0,0,0.38)_100%)]" />
        <Container className="relative grid min-h-[88vh] items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-white/90">Private Home Care Services</div>
            <h1 className="max-w-4xl bg-gradient-to-r from-white via-[#dbeafe] to-[#a5f3fc] bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">Premium in-home care for families who value dignity, warmth, and trust.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Only Health Solutions delivers compassionate private home care with a refined, reassuring experience for clients and families seeking dependable support at home.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setPage("services")} className="rounded-full border border-white/30 bg-white/12 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/18">Explore Services</button>
              <button onClick={() => setPage("contact")} className="rounded-full border border-white/30 bg-white/8 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/14">Speak With Our Team</button>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <motion.div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_72%_35%,rgba(168,85,247,0.20),transparent_42%)] blur-3xl" animate={{ scale: [1,1.08,1], opacity: [0.45,0.72,0.45] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
              <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-black/55 via-black/20 to-transparent" />
                <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/logo-social.png">
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-5 left-5 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white backdrop-blur-md">Caregiver story reel</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="relative -mt-16 z-10">
        <div className="grid gap-6 rounded-[2rem] bg-white p-8 shadow-2xl md:grid-cols-4">
          {["Private in-home care tailored to each client", "Dependable, compassionate caregivers", "Flexible schedules and personalized care plans", "Family-centered communication and support"].map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-5">
              <div className="mb-3 h-2.5 w-14 rounded-full bg-gradient-to-r from-[#22D3EE] via-[#67E8F9] to-[#A855F7] shadow-sm" />
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Featured Services</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">Care services built for real families and real daily needs.</h2>
            </div>
            <button onClick={() => setPage("services")} className="rounded-full border border-[#22D3EE]/35 bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A855F7]/50 hover:shadow-lg">View all services</button>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => {
              const Icon = service.icon;
              return (
                <button key={service.slug} onClick={() => setPage(service.slug)} className="group rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-b hover:from-white hover:to-slate-50 hover:shadow-2xl">
                  <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#22D3EE] to-[#A855F7] p-4 text-white shadow-lg shadow-cyan-500/20 transition-transform duration-200 group-hover:scale-105"><Icon size={22} /></div>
                  <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{service.intro}</p>
                </button>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

function SimplePage({ title, text }: { title: string; text: string }) {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{title}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{text}</p>
        </div>
      </Container>
    </div>
  );
}

function ServicesPage({ setPage }: { setPage: (page: string) => void }) {
  return (
    <div className="bg-slate-50 py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Our Services</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">Comprehensive in-home support tailored to each client.</h1>
        </div>
        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button key={service.slug} onClick={() => setPage(service.slug)} className="group rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-b hover:from-white hover:to-slate-50 hover:shadow-2xl">
                <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#22D3EE] to-[#A855F7] p-4 text-white shadow-lg shadow-cyan-500/20 transition-transform duration-200 group-hover:scale-105"><Icon size={22} /></div>
                <h2 className="text-2xl font-semibold text-slate-950">{service.title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{service.intro}</p>
              </button>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

function ServiceDetailPage({ service, setPage }: { service: (typeof services)[number]; setPage: (page: string) => void }) {
  return (
    <div className="bg-slate-50 py-20">
      <Container>
        <button onClick={() => setPage("services")} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950"><ChevronRight size={16} className="rotate-180" /> Back to Services</button>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{service.overview}</p>
            <button onClick={() => setPage("contact")} className="mt-8 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#A855F7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">Request This Service</button>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Service Overview</p>
            <p className="mt-4 leading-8 text-slate-600">{service.intro}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact Us</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">We’re here to help you explore care options.</h1>
            <div className="mt-8 space-y-5 text-lg text-slate-600">
              <p className="flex items-center gap-3"><Phone size={18} className="text-slate-950" /> {site.phone}</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-slate-950" /> {site.email}</p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-slate-950" /> {site.serviceArea}</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Send an Inquiry</h2>
            <input className="mt-6 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Email address" />
            <textarea className="mt-5 min-h-[160px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900" placeholder="Tell us about your care needs" />
            <button className="mt-5 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#A855F7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02] hover:opacity-90 hover:shadow-xl">Send Inquiry</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Footer({ setPage }: { setPage: (page: string) => void }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div><Logo /><p className="mt-4 text-sm leading-7 text-slate-500">Private home care services delivered with compassion, professionalism, and dignity.</p></div>
          <div><h3 className="font-semibold text-slate-950">Quick Links</h3><div className="mt-4 space-y-3 text-sm text-slate-600">{navItems.map((item) => (<button key={item.key} onClick={() => setPage(item.key)} className="block text-left hover:text-slate-950">{item.label}</button>))}</div></div>
          <div><h3 className="font-semibold text-slate-950">Contact</h3><div className="mt-4 space-y-3 text-sm text-slate-600"><p>{site.phone}</p><p>{site.email}</p><p>{site.website}</p><p>{site.serviceArea}</p></div></div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"><p>© 2026 Only Health Solutions. All rights reserved.</p><p>{site.tagline}</p></div>
      </Container>
    </footer>
  );
}

export default function Page() {
  const [page, setPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<string>;
      setPage(custom.detail || "home");
    };
    window.addEventListener("navigate", handler as EventListener);
    return () => window.removeEventListener("navigate", handler as EventListener);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const activeService = services.find((service) => service.slug === page);
  const currentPage = activeService ? <ServiceDetailPage service={activeService} setPage={setPage} /> :
    page === "about" ? <SimplePage title="About" text="A private home care experience centered on dignity, trust, and personalized support." /> :
    page === "services" ? <ServicesPage setPage={setPage} /> :
    page === "careers" ? <SimplePage title="Careers" text="Build a meaningful career in compassionate home care." /> :
    page === "faq" ? <SimplePage title="FAQ" text="Answers to common questions from families." /> :
    page === "contact" ? <ContactPage /> :
    <HomePage setPage={setPage} />;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <AIChatAssistant />
      <FloatingContactButtons />
      <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-gradient-to-r from-[#22D3EE] via-[#67E8F9] to-[#A855F7] opacity-90" />
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <AnimatePresence>{isLoading && <LuxuryLoader />}</AnimatePresence>
      <Header page={page} setPage={setPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 22, scale: 0.995, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, scale: 0.995, filter: "blur(4px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentPage}
        </motion.div>
      </AnimatePresence>

      {page === "home" && (
        <section className="bg-slate-50 py-20">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">What Families Are Saying</p>
            <div className="mt-10 overflow-hidden">
              <motion.div className="flex gap-6" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
                {[...testimonials, ...testimonials].map((item, idx) => (
                  <div key={`${item.name}-${idx}`} className="min-w-[320px] max-w-[360px] rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                    <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
                    <p className="mt-5 font-semibold text-slate-950">{item.name}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>
      )}

      <Footer setPage={setPage} />
    </div>
  );
}
