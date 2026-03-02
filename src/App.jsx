import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Terminal, 
  Cpu, 
  Users, 
  Mail, 
  Phone, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare,
  Globe,
  Lock,
  Menu,
  X,
  Award,
  Briefcase,
  Search,
  Zap,
  Star
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullTexts = ["Ethical Hacking", "Bug Bounty", "Pen Testing", "Cloud Security"];

  // Animation Refs
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Reveal animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => observer.observe(ref));

    // Typewriter effect
    let currentText = fullTexts[textIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypedText(currentText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % fullTexts.length);
        }, 2000);
      }
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(typingInterval);
      observer.disconnect();
    };
  }, [textIndex]);

  const stats = [
    { label: "Years in Cyber", value: "3+" },
    { label: "Expert Batches", value: "15+" },
    { label: "Successful Placements", value: "1,500+" },
    { label: "Global Certifications", value: "10+" }
  ];

  const services = [
    {
      title: "Trainings",
      desc: "Advanced curriculum covering Bug Bounty, Pen Testing, Web Security, and Cloud Architecture.",
      icon: <Terminal className="w-6 h-6" />,
      tag: "Skill Up",
      accent: "border-cyan-500/30"
    },
    {
      title: "Certifications",
      desc: "EC-Council Accredited Training Center (ATC) for CEH, ECSA, CISSP, and more.",
      icon: <Award className="w-6 h-6" />,
      tag: "EC-Council Partner",
      accent: "border-amber-500/30"
    },
    {
      title: "IT Services",
      desc: "Infrastructure security, threat modeling, and application security for your business.",
      icon: <Lock className="w-6 h-6" />,
      tag: "Protect Assets",
      accent: "border-emerald-500/30"
    },
    {
      title: "IT Staffing",
      desc: "Specialized cybersecurity talent sourcing, sub-contracts, and technical support.",
      icon: <Briefcase className="w-6 h-6" />,
      tag: "Hire Experts",
      accent: "border-blue-500/30"
    }
  ];

  const companies = [
    "KPMG", "IBM", "Honeywell", "Capgemini", "Infosys", "Deloitte", "HCL", "Bosch", "Cognizant", "Wipro", "Verizon", "Dell", "SOCIETE GENERALE", "MINDTREE", "TECH MAHINDRA"
  ];

  return (
    <div className="min-h-screen bg-[#000d1a] text-slate-200 font-sans selection:bg-[#ffb703]/30">
      {/* Top Header Contact Bar (Original Style) */}
      <div className="hidden lg:block bg-[#001a33] border-b border-white/5 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Mail className="w-3 h-3 text-[#00d4ff]" /> info@hackerbook.in</span>
            <span className="flex items-center gap-2"><Phone className="w-3 h-3 text-[#00d4ff]" /> 8549995000</span>
          </div>
          <div className="flex gap-4">
            <span className="text-[#ffb703]">Global ATC Partner</span>
            <span className="text-white/20">|</span>
            <span>Job Guaranteed Programs</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-0 bg-[#001a33]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#00d4ff]/10' : 'top-0 lg:top-10 bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00d4ff] blur-lg opacity-20 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-gradient-to-br from-[#00d4ff] to-[#0056b3] p-2 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">HACKER<span className="text-[#00d4ff]">BOOK</span></span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Services', 'Trainings', 'Certifications', 'Blogs'].map((item) => (
              <a key={item} href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#00d4ff] transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="bg-[#ffb703] text-[#001a33] px-7 py-2.5 rounded-full text-sm font-black uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-[0_4px_20px_rgba(255,183,3,0.3)]">
              Contact Us
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Animated Background Grids */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#00d4ff 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00d4ff]/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#ffb703]/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002147] border border-[#00d4ff]/30 mb-8">
              <Zap className="w-4 h-4 text-[#ffb703] animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00d4ff]">World's No.1 Certification Path</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight">
              Master <br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-white to-[#00d4ff] bg-[length:200%_auto] animate-gradient">
                  {typedText}
                </span>
                <span className="w-1 h-12 bg-[#ffb703] absolute -right-4 top-2 animate-pulse" />
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
              Join Bangalore's elite cybersecurity community. We bridge the gap between <span className="text-white border-b-2 border-[#ffb703]">Learning</span> and <span className="text-white border-b-2 border-[#00d4ff]">Earning</span>.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-5 bg-[#00d4ff] text-[#001a33] font-black rounded-2xl hover:bg-white hover:-translate-y-1 transition-all shadow-[0_10px_30px_rgba(0,212,255,0.3)] flex items-center gap-3 group uppercase tracking-wider text-sm">
                Enroll Now <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-wider text-sm flex items-center gap-3">
                <Terminal className="w-4 h-4 text-[#ffb703]" /> View Syllabus
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 border-l-2 border-[#ffb703] pl-8">
              <div>
                <div className="text-3xl font-black text-white">1,500+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Global Placements</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Practical Oriented</div>
              </div>
            </div>
          </div>

          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-1000 delay-300 relative">
            <div className="relative z-10 bg-[#001a33]/80 backdrop-blur-2xl border border-white/10 p-1 rounded-3xl overflow-hidden shadow-2xl group">
              {/* Fake UI Header */}
              <div className="bg-[#002147] px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] font-mono text-slate-500">ec-council-certified-lab.sh</div>
                <Lock className="w-3 h-3 text-emerald-500" />
              </div>
              {/* Content */}
              <div className="p-8 font-mono text-sm space-y-4">
                <div className="flex gap-3 text-cyan-400">
                  <span>&gt;</span>
                  <span className="text-white">scan --target=enterprise_network</span>
                </div>
                <div className="pl-6 text-slate-500 text-xs">Scanning ports... 80/tcp OPEN, 443/tcp OPEN</div>
                <div className="pl-6 text-amber-500 text-xs">Vulnerability Found: SQL Injection (CVE-2024-XXXX)</div>
                <div className="flex gap-3 text-cyan-400 mt-6">
                  <span>&gt;</span>
                  <span className="text-[#ffb703]">secure --patch=automatic</span>
                </div>
                <div className="pl-6 text-emerald-500 animate-pulse">Patching System Security [||||||||||] 100%</div>
                
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="bg-[#002b5b] p-5 rounded-2xl border border-[#00d4ff]/20 flex items-center justify-between group-hover:bg-[#003d7d] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-xl">
                        <Award className="w-6 h-6 text-[#00d4ff]" />
                      </div>
                      <div>
                        <div className="text-white font-black text-xs uppercase tracking-widest">Next Batch Starts</div>
                        <div className="text-[#ffb703] font-bold text-lg">Monday, 10:00 AM</div>
                      </div>
                    </div>
                    <button className="p-3 bg-white/5 rounded-full hover:bg-[#00d4ff] hover:text-[#001a33] transition-all">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual Flare */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#ffb703]/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Marquee - Placements */}
      <div className="py-20 bg-[#001a33]/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-black text-white">Industry Leaders <span className="text-[#ffb703]">Trust Us</span></h3>
            <p className="text-sm text-slate-500">Our students secure roles in Fortune 500 tech giants.</p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-widest text-[#00d4ff] flex items-center gap-2 hover:gap-3 transition-all">
            View Success Stories <ExternalLink className="w-3 h-3" />
          </button>
        </div>
        <div className="relative flex overflow-hidden group">
          <div className="animate-scroll flex whitespace-nowrap gap-16 py-4">
            {[...companies, ...companies].map((c, i) => (
              <div key={i} className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/5 rounded-2xl grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:border-[#00d4ff]/30 hover:bg-[#002b5b] transition-all cursor-default">
                <span className="text-lg font-black text-white tracking-tighter">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-1000 text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Our Core <span className="text-[#00d4ff]">Cyber Pillars</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#ffb703] mx-auto rounded-full mb-8" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Hackerbook isn't just a training center; it's a launchpad for modern technology needs and security staffing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} 
                 ref={addToRefs}
                 className={`opacity-0 translate-y-10 transition-all duration-700 delay-[${i * 150}ms] group relative p-10 rounded-[2.5rem] bg-[#001a33]/40 border ${s.accent} hover:bg-[#002147] hover:-translate-y-4 transition-all overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              
              <div className="w-14 h-14 bg-[#00d4ff]/10 rounded-2xl flex items-center justify-center text-[#00d4ff] mb-8 group-hover:bg-[#ffb703] group-hover:text-[#001a33] transition-all duration-500">
                {s.icon}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#ffb703] mb-3">{s.tag}</div>
              <h3 className="text-2xl font-black text-white mb-4">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                {s.desc}
              </p>
              <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white group-hover:text-[#00d4ff] transition-all">
                Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About / Founder Section */}
      <section className="py-32 bg-[#001a33]/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative" ref={addToRefs}>
             <div className="absolute -inset-4 bg-[#ffb703]/10 blur-3xl rounded-full" />
             <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 bg-[#002147]">
                <div className="aspect-[4/5] flex items-center justify-center text-white/5">
                  <Users size={200} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000d1a] via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="text-white font-black text-3xl mb-1">Hari Subbara</div>
                  <div className="text-[#00d4ff] font-bold text-sm uppercase tracking-widest mb-6">CEO & Lead Architect</div>
                  <div className="flex flex-wrap gap-2">
                    {['CEH', 'CISSP', 'ECSA', 'CISA', 'CCSP'].map(b => (
                      <span key={b} className="px-3 py-1 bg-white/10 text-[10px] font-bold rounded-lg text-white border border-white/5">{b}</span>
                    ))}
                  </div>
                </div>
             </div>
             {/* Stats overlap */}
             <div className="absolute -right-8 -bottom-8 bg-[#ffb703] p-8 rounded-3xl text-[#001a33] shadow-2xl animate-float">
                <div className="text-4xl font-black">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest">Yrs Experience</div>
             </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8" ref={addToRefs}>
            <div className="inline-block px-4 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-[10px] font-black uppercase tracking-widest rounded-lg">Our DNA</div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              A Community of <span className="text-[#00d4ff]">Advanced Penetration Testers</span> & Architects
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Hackerbook is built by experts who breathe IT security. With an average industry experience of 10 years, our team doesn't just teach—we defend.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                "Advanced Lab Infrastructure",
                "Job Guaranteed Curriculum",
                "Mock Interview Marathons",
                "Real-time Project Exposure"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-[#00d4ff]/50 transition-all cursor-default group">
                  <div className="w-10 h-10 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center text-[#00d4ff] group-hover:bg-[#00d4ff] group-hover:text-[#001a33] transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <button className="px-10 py-5 bg-[#00d4ff] text-[#001a33] font-black rounded-2xl hover:scale-105 transition-all flex items-center gap-3 group">
              READ OUR STORY <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Job Guaranteed Banner */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#00d4ff] to-[#0056b3] rounded-[3rem] p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-1000" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/20 rounded-full mb-6">
                <Star className="w-4 h-4 text-[#ffb703] fill-[#ffb703]" />
                <span className="text-[10px] font-black uppercase text-white tracking-widest">Enrollment Open</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                Most Demanding <br /> <span className="text-[#001a33]">Job Guaranteed</span> Programs
              </h3>
              <p className="text-white/80 font-medium text-lg mb-8">
                Specifically curated for freshers and professionals looking to pivot into Cyber Security with 100% placement support.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-[#001a33] text-white rounded-xl text-xs font-bold uppercase tracking-widest">Certified Ethical Hacker</div>
                <div className="px-6 py-3 bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-widest">Cloud Security Engineer</div>
              </div>
            </div>
            <div className="flex-shrink-0">
               <div className="bg-white p-10 rounded-[2.5rem] text-[#001a33] text-center shadow-2xl scale-110">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Starting From</div>
                  <div className="text-5xl font-black mb-1">₹ 24,999</div>
                  <div className="text-xs font-bold text-cyan-600 mb-8">*Limited Time Offer</div>
                  <button className="w-full py-4 bg-[#ffb703] text-[#001a33] font-black rounded-xl hover:bg-[#001a33] hover:text-white transition-all shadow-xl">
                    CLAIM SCHOLARSHIP
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Original Deep Navy) */}
      <footer className="bg-[#000d1a] border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#00d4ff] p-1.5 rounded-lg">
                  <Shield className="w-6 h-6 text-[#001a33]" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-white">HACKER<span className="text-[#00d4ff]">BOOK</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Empowering the next generation of cybersecurity warriors in the heart of Bangalore. Trusted by 1,500+ professionals.
              </p>
              <div className="flex gap-4">
                {[Globe, Users, Mail].map((Icon, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-4 border-[#ffb703] pl-4">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Career Pathways</a></li>
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Training Centers</a></li>
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Corporate Training</a></li>
                <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-4 border-[#ffb703] pl-4">Connect</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#00d4ff]" /> 8549995000</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#00d4ff]" /> info@hackerbook.in</li>
                <li className="flex items-start gap-3 mt-2">
                  <div className="mt-1"><Globe className="w-4 h-4 text-[#00d4ff]" /></div>
                  <span className="text-[11px] leading-relaxed">RJ Garden, #96, 3rd Floor, Chinnappanahalli, Marathahalli, Bengaluru</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-4 border-[#ffb703] pl-4">Updates</h4>
              <div className="bg-[#001a33] p-6 rounded-3xl border border-white/5">
                <p className="text-xs text-slate-500 mb-4 font-bold">Subscribe to our vulnerability reports and new batch updates.</p>
                <div className="space-y-3">
                  <input type="email" placeholder="Email Address" className="w-full bg-[#000d1a] border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#00d4ff]" />
                  <button className="w-full py-3 bg-[#00d4ff] text-[#001a33] rounded-xl font-black text-[10px] uppercase tracking-widest">Secure Updates</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <span>© 2026 Hackerbook. Powered by Experts.</span>
            <div className="flex gap-10">
              <a href="#" className="hover:text-[#ffb703]">Sitemap</a>
              <a href="#" className="hover:text-[#ffb703]">Terms</a>
              <a href="#" className="hover:text-[#ffb703]">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}} />
    </div>
  );
};

export default App;
