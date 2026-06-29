import { useState, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, ExternalLink } from "lucide-react";

function MilaText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => {
        const parts: React.ReactNode[] = [];
        const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
        let last = 0;
        let m: RegExpExecArray | null;
        let key = 0;
        while ((m = re.exec(line)) !== null) {
          if (m.index > last) parts.push(<Fragment key={key++}>{line.slice(last, m.index)}</Fragment>);
          if (m[1] !== undefined) {
            parts.push(<strong key={key++}>{m[1]}</strong>);
          } else {
            parts.push(
              <a key={key++} href={m[3]} className="underline text-primary hover:text-primary/80" target="_self" rel="noopener noreferrer">
                {m[2]}
              </a>
            );
          }
          last = m.index + m[0].length;
        }
        if (last < line.length) parts.push(<Fragment key={key++}>{line.slice(last)}</Fragment>);
        return (
          <Fragment key={li}>
            {parts.length > 0 ? parts : line}
            {li < lines.length - 1 && "\n"}
          </Fragment>
        );
      })}
    </>
  );
}

const WHATSAPP_NUMBER = "254720176247";

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

interface Message {
  id: number;
  from: "user" | "mila";
  text: string;
  chips?: string[];
  whatsapp?: string;
}

// ─── Knowledge base ───────────────────────────────────────────────────────────

const KB: Array<{
  patterns: RegExp[];
  answer: string;
  chips?: string[];
  whatsapp?: string;
}> = [
  // ── Greetings ──
  {
    patterns: [/^(hi|hello|hey|hie|howdy|sup|good\s*(morning|afternoon|evening))/i],
    answer:
      "Hey there! 👋 I'm MILA, Milespace's assistant. I can answer questions about our services, pricing, projects, and more. What can I help you with?",
    chips: ["Services & pricing", "Web development", "AI & automation", "Contact us"],
  },

  // ── What is Milespace ──
  {
    patterns: [/milespace|who are you|what do you do|about milespace|what is milespace/i],
    answer:
      "Milespace is a premium Kenyan digital agency based in Nairobi. We specialize in:\n\n• **Web & app development**\n• **Custom software & POS systems**\n• **SEO & AI optimization**\n• **AI integration & automation**\n• **UI/UX design**\n• **Cybersecurity**\n\nWe've delivered 100+ projects for 50+ clients across Kenya and East Africa. 🚀",
    chips: ["See our services", "View pricing", "Talk to the team"],
  },

  // ── Services overview ──
  {
    patterns: [/services|what do you offer|what can you build|offerings/i],
    answer:
      "We offer 7 core services:\n\n1. 🌐 **Web Development** — WordPress, React, custom sites\n2. 📱 **App Development** — Android, iOS, cross-platform\n3. 🛠️ **Custom Software** — POS, ERPs, management systems\n4. 📈 **Digital Marketing** — Social media, paid ads\n5. 🎨 **UI/UX Design** — Figma prototypes to final designs\n6. 🔍 **SEO & AI Optimization** — Rank higher, get found\n7. 🤖 **AI Integration & Automation** — WhatsApp bots, workflow automation\n\nWhich one interests you?",
    chips: ["Web development", "App development", "SEO pricing", "AI automation"],
  },

  // ── Web development ──
  {
    patterns: [/web(site| dev| design)?|wordpress|react|next\.?js|landing page|woocommerce/i],
    answer:
      "Our **Web Development** packages start at **KES 45,000** (10% off right now):\n\n• **Starter WordPress** — KES 45,000 — 5 pages, hosting, basic SEO\n• **Business WordPress** — KES 58,500 — 10 pages, WooCommerce, social integration\n• **Premium WordPress** — KES 67,500 — 15 pages, custom theme, e-commerce\n• **Custom Coded Starter** — KES 72,000 — HTML/CSS/JS, 5 pages\n• **Custom React/Next.js** — KES 108,000 — Unlimited pages, CMS, APIs\n• **Enterprise Web App** — KES 180,000 — Full custom, backend, auth\n\nAll include mobile-responsive design. 📱",
    chips: ["Get a quote", "App development", "UI/UX design", "Talk to us"],
  },

  // ── App development ──
  {
    patterns: [/app(lication)?( dev)?|android|ios|mobile|flutter|react native/i],
    answer:
      "Our **App Development** packages:\n\n• **Android Basic** — KES 80,000 — 5 screens, local storage, Play Store submission\n• **Cross-Platform Basic** — KES 120,000 — Android + iOS, 8 screens, push notifications\n• **Cross-Platform Pro** — KES 200,000 — 15+ screens, custom UI, admin dashboard, 6 months support\n• **Enterprise App** — KES 350,000 — Full custom, real-time features, analytics, 12 months support\n\nAll apps are submitted to the App Store / Play Store. 🚀",
    chips: ["Get a quote", "Web development", "Custom software"],
  },

  // ── Custom software ──
  {
    patterns: [/custom software|pos|point.of.sale|erp|management system|sacco|inventory|crm/i],
    answer:
      "Our **Custom Software** packages:\n\n• **Basic System** — KES 150,000 — Web-based, user management, basic reports, 3 months support\n• **Business System** — KES 300,000 — Multi-module, advanced reporting, role-based access, integrations\n• **Enterprise System** — KES 500,000 — Full enterprise, custom modules, data analytics, 12 months support + SLA\n\nWe've built POS systems, SACCO apps, healthcare platforms, and more.",
    chips: ["Talk to us about my project", "View portfolio", "App development"],
  },

  // ── Digital marketing ──
  {
    patterns: [/digital marketing|social media|meta ads|google ads|content|facebook|instagram|tiktok/i],
    answer:
      "Our **Digital Marketing** retainer packages:\n\n• **Starter** — KES 15,000/mo — 3 platforms, 12 posts/month, basic analytics\n• **Growth** — KES 30,000/mo — 5 platforms, 20 posts, paid ads management (KES 10k ad budget included), monthly report\n• **Pro** — KES 50,000/mo — Full management, 30 posts, Google + Meta Ads, SEO, weekly reports\n\nAll packages include content creation. 📲",
    chips: ["SEO pricing", "Get started", "Talk to us"],
  },

  // ── UI/UX design ──
  {
    patterns: [/ui|ux|design|figma|prototype|wireframe|mockup/i],
    answer:
      "Our **UI/UX Design** packages:\n\n• **Landing Page Design** — KES 25,000 — Single page, mobile mockup, Figma file\n• **Website Design** — KES 50,000 — Full website UI, up to 10 pages, responsive, component library\n• **App Design** — KES 80,000 — Complete app UI/UX, user flow diagrams, interactive prototype, handoff files\n\nAll designs are delivered in Figma with developer-ready handoff specs. 🎨",
    chips: ["Web development", "App development", "Get a quote"],
  },

  // ── SEO pricing ──
  {
    patterns: [/seo( pricing| packages| cost| price)?|search engine|rank|google ranking|keywords|organic/i],
    answer:
      "Our **SEO & AI Optimization** packages (monthly retainer):\n\n• **SEO Starter** — KES 13,500/mo — 15 keywords, technical audit, Google Business Profile, monthly report\n• **SEO Growth** — KES 26,250/mo — 50 keywords, 2 AI articles/month, link building, competitor analysis\n• **SEO Agency** — KES 48,750/mo — Unlimited keywords, 5 articles/month, dedicated Slack channel, weekly reports\n\nAll plans include AI search (Google SGE / Gemini) optimization. 🔍",
    chips: ["AI automation pricing", "Digital marketing", "Talk to us"],
  },

  // ── AI automation pricing ──
  {
    patterns: [/ai( pricing| packages| cost| automation| bot| chatbot| integration)?|automation|whatsapp bot|n8n|zapier|make\.com|workflow/i],
    answer:
      "Our **AI Integration & Automation** packages:\n\n• **AI Starter** — KES 45,000 — Single-channel chatbot (WhatsApp or web), 50 FAQ responses, 1 tool integration, 30 days support\n• **AI Business** — KES 108,000 — Multi-channel agent (WhatsApp + web + email), custom knowledge base, M-Pesa integration, workflow automation, 60 days support\n• **AI Enterprise** — KES 252,000 — Full automation audit, unlimited integrations, AI analytics dashboard, 6 months support\n\nPerfect for automating customer support, lead follow-up, and reporting. 🤖",
    chips: ["SEO pricing", "Get a quote", "Talk to us"],
  },

  // ── Cybersecurity ──
  {
    patterns: [/cyber(security)?|security|hack|ssl|malware|vulnerability|firewall|dmarc|spf|dkim/i],
    answer:
      "Our **Cybersecurity** services cover:\n\n• Website & web app vulnerability audits\n• WordPress hardening & malware removal\n• Email security (SPF, DKIM, DMARC setup)\n• SSL/TLS configuration\n• Hosting security hardening\n• Business continuity planning\n\nVisit our [Cybersecurity page](/cybersecurity) for full details, or chat with us directly. 🔒",
    chips: ["Talk to us", "Web development", "Custom software"],
    whatsapp: "Hi Milespace, I'd like to enquire about your Cybersecurity services.",
  },

  // ── M-Pesa integration ──
  {
    patterns: [/m.?pesa|mpesa|payment|daraja|pesapal|dpo|flutterwave/i],
    answer:
      "Yes — we integrate M-Pesa natively into all our e-commerce and custom software projects! We use:\n\n• **Safaricom Daraja API** (STK Push, Paybill, Till)\n• **Pesapal** and **DPO Group** for multi-method checkout\n• M-Pesa payment reconciliation dashboards\n\nAll our WooCommerce sites support M-Pesa by default. 💚",
    chips: ["Web development pricing", "Custom software", "Talk to us"],
  },

  // ── Pricing general ──
  {
    patterns: [/price|pricing|cost|how much|budget|rate|fee|charge|quote/i],
    answer:
      "Here's a quick overview of our starting prices:\n\n• 🌐 Website — from **KES 45,000**\n• 📱 Mobile App — from **KES 80,000**\n• 🛠️ Custom Software — from **KES 150,000**\n• 📈 Digital Marketing — from **KES 15,000/mo**\n• 🎨 UI/UX Design — from **KES 25,000**\n• 🔍 SEO — from **KES 13,500/mo**\n• 🤖 AI Automation — from **KES 45,000**\n\nWant a precise quote for your project?",
    chips: ["Web pricing", "SEO pricing", "AI pricing", "Get a quote"],
    whatsapp: "Hi Milespace, I'd like to get a quote for my project.",
  },

  // ── Portfolio / past work ──
  {
    patterns: [/portfolio|past work|projects|clients|examples|case stud|previous work|what have you built/i],
    answer:
      "Some of our featured projects:\n\n• **Ornyx POS** — Custom point-of-sale system for a premium perfume outlet\n• **Nextcare Dental Studio** — Healthcare booking & services site\n• **Moods Fragrances** — Luxury fragrance e-commerce brand\n• **Afyacode** — AI-powered diabetes & nutrition mobile app\n• **Milespace SACCO App** — Full SACCO management mobile app\n• **Hu-Jambo** — Community lifestyle platform\n\nView the full portfolio on our [Portfolio page](/portfolio). 💼",
    chips: ["Web development", "App development", "Talk to us"],
  },

  // ── Timeline / how long ──
  {
    patterns: [/how long|timeline|turnaround|delivery|when|duration|deadline/i],
    answer:
      "Typical delivery timelines:\n\n• **Landing page / brochure site** — 1–2 weeks\n• **WordPress business site** — 2–4 weeks\n• **Custom web app** — 4–12 weeks\n• **Mobile app** — 6–16 weeks\n• **Custom software** — 8–20 weeks\n\nTimelines depend on scope, complexity, and how quickly feedback is given. We'll give you a specific timeline in your proposal. 📅",
    chips: ["Get a quote", "Web development", "Talk to us"],
  },

  // ── Location ──
  {
    patterns: [/where are you|location|office|nairobi|kenya|address|based/i],
    answer:
      "We're based in **Nairobi, Kenya** 🇰🇪\n\nWe work with clients across Kenya and East Africa — both in-person and remotely. Most of our communication happens over WhatsApp and Zoom, so distance is never a barrier.",
    chips: ["Contact us", "Get a quote", "Talk to us"],
  },

  // ── Contact ──
  {
    patterns: [/contact|reach|talk|phone|call|email|whatsapp|get in touch/i],
    answer:
      "You can reach the Milespace team through:\n\n• 💬 **WhatsApp**: +254 720 176 247 (fastest response)\n• 📧 **Email**: hello@milespace.co.ke\n• 🌐 **Contact form**: [milespace.co.ke/contact](/contact)\n\nWe typically respond within 2 hours during business hours (Mon–Sat, 8am–7pm EAT).",
    chips: ["Chat on WhatsApp", "Get a quote"],
    whatsapp: "Hi Milespace, I'd like to get in touch about a project.",
  },

  // ── Support / maintenance ──
  {
    patterns: [/support|maintenance|after launch|warranty|bug|fix|update/i],
    answer:
      "All our projects include post-launch support:\n\n• **Websites** — 1–6 months depending on package\n• **Apps** — 3–12 months depending on package\n• **Custom Software** — 3–12 months + optional SLA\n\nAfter the included period, we offer affordable monthly retainer maintenance packages. We're also available on WhatsApp for quick fixes. 🛠️",
    chips: ["Web development pricing", "Talk to us"],
  },

  // ── Blog / insights ──
  {
    patterns: [/blog|article|insight|read|learn|tip|guide/i],
    answer:
      "We publish practical articles on our [Blog](/blog) covering:\n\n• SEO strategies for Kenyan businesses\n• AI & automation case studies\n• Web design trends in East Africa\n• M-Pesa integration guides\n• Cybersecurity basics\n• Personal branding playbooks\n\nAll written for the Kenyan business context. 📰",
    chips: ["Read the blog", "SEO information", "AI automation"],
  },

  // ── Discount / offer ──
  {
    patterns: [/discount|offer|deal|promo|promotion|sale|cheaper/i],
    answer:
      "We currently have a **10% discount** running on all Website Development packages! 🎉\n\nFor other services, we sometimes offer bundled rates when you take on multiple services together (e.g. web + SEO, or app + marketing). Mention you saw this in the chat when you reach out and we'll see what we can do. 😊",
    chips: ["Web pricing", "Get a quote", "Talk to us"],
    whatsapp: "Hi Milespace, I'm interested in a bundle discount on your services.",
  },
];

// ─── Chip → question map ──────────────────────────────────────────────────────

const CHIP_MAP: Record<string, string> = {
  "Services & pricing": "What services do you offer?",
  "Web development": "Tell me about web development",
  "App development": "Tell me about app development",
  "AI & automation": "Tell me about AI automation",
  "AI automation": "Tell me about AI automation",
  "AI automation pricing": "What are the AI automation prices?",
  "AI pricing": "What are the AI automation prices?",
  "Custom software": "Tell me about custom software",
  "SEO pricing": "What are the SEO prices?",
  "SEO information": "Tell me about SEO",
  "Digital marketing": "Tell me about digital marketing",
  "UI/UX design": "Tell me about UI/UX design",
  "View pricing": "What are your prices?",
  "See our services": "What services do you offer?",
  "View portfolio": "Show me your portfolio",
  "Get a quote": "__LEAD__",
  "Get started": "__LEAD__",
  "Talk to us about my project": "__LEAD__",
  "Talk to us": "How can I contact you?",
  "Talk to the team": "How can I contact you?",
  "Contact us": "How can I contact you?",
  "Chat on WhatsApp": "__WA__",
  "Read the blog": "__BLOG__",
  "Web pricing": "Tell me about web development pricing",
  "Web development pricing": "Tell me about web development pricing",
};

const FALLBACK: Message = {
  id: 0,
  from: "mila",
  text: "I don't have a specific answer for that, but our team does! 😊 Click the button below to chat with us directly on WhatsApp — we typically reply within 2 hours.",
  whatsapp: "Hi Milespace, I have a question I couldn't find an answer to on your website.",
};

function isQuoteIntent(text: string) {
  return /quote|get started|start.*(project|build|website|app)|i.*(want|need|looking).*(website|app|system|software|help|seo|design|develop)|build.*(me|us|my|our)|hire|work.*(with|together)/i.test(text);
}

function respond(input: string): Message {
  if (isQuoteIntent(input)) return { id: Date.now(), from: "mila", text: "__LEAD__" };
  for (const entry of KB) {
    for (const pattern of entry.patterns) {
      if (pattern.test(input.trim())) {
        return { id: Date.now(), from: "mila", text: entry.answer, chips: entry.chips, whatsapp: entry.whatsapp };
      }
    }
  }
  return { ...FALLBACK, id: Date.now() };
}

// ─── Lead capture steps ───────────────────────────────────────────────────────

type LeadStep = null | "name" | "email" | "project" | "done";

interface LeadData { name: string; email: string; project: string }

const LEAD_MSGS = {
  start: {
    id: Date.now(),
    from: "mila" as const,
    text: "Great — I'll help you get a quote! 🎉 It only takes 3 quick questions.\n\n**What's your name?**",
  },
  email: (name: string) => ({
    id: Date.now() + 1,
    from: "mila" as const,
    text: `Nice to meet you, **${name}**! 👋\n\n**What's your email address?** *(so we can follow up with a proposal)*`,
  }),
  project: (name: string) => ({
    id: Date.now() + 2,
    from: "mila" as const,
    text: `Perfect. Last question, **${name}** —\n\n**Briefly describe your project.** What do you want to build, and what's your approximate budget?`,
  }),
  done: (lead: LeadData) => ({
    id: Date.now() + 3,
    from: "mila" as const,
    text: `All set, **${lead.name}**! ✅ Your details are ready.\n\nClick the button below to send them straight to the Milespace team on WhatsApp — we'll get back to you with a tailored proposal within a few hours. 🚀`,
    whatsapp: `Hi Milespace! I'd like a quote.\n\n👤 Name: ${lead.name}\n📧 Email: ${lead.email}\n📋 Project: ${lead.project}`,
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

const WELCOME: Message = {
  id: 1,
  from: "mila",
  text: "Hi! 👋 I'm **MILA** — Milespace's Intelligent Live Assistant.\n\nAsk me anything about our services, pricing, past projects, or timelines. For anything else, I'll connect you straight to the team on WhatsApp.",
  chips: ["Services & pricing", "Web development", "AI & automation", "Get a quote"],
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadStep>(null);
  const [leadData, setLeadData] = useState<LeadData>({ name: "", email: "", project: "" });
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  function startLead() {
    setLeadStep("name");
    setLeadData({ name: "", email: "", project: "" });
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { ...LEAD_MSGS.start, id: Date.now() }]);
    }, 500);
  }

  function handleLeadInput(text: string) {
    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      if (leadStep === "name") {
        const name = text.trim();
        setLeadData((d) => ({ ...d, name }));
        setLeadStep("email");
        setMessages((m) => [...m, LEAD_MSGS.email(name)]);
      } else if (leadStep === "email") {
        setLeadData((d) => ({ ...d, email: text.trim() }));
        setLeadStep("project");
        setMessages((m) => [...m, LEAD_MSGS.project(leadData.name)]);
      } else if (leadStep === "project") {
        const updated = { ...leadData, project: text.trim() };
        setLeadData(updated);
        setLeadStep("done");
        setMessages((m) => [...m, LEAD_MSGS.done(updated)]);
      }
    }, 600);
  }

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (leadStep && leadStep !== "done") {
      handleLeadInput(trimmed);
      return;
    }

    const userMsg: Message = { id: Date.now(), from: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    if (isQuoteIntent(trimmed)) {
      startLead();
      return;
    }

    setTyping(true);
    setTimeout(() => {
      const reply = respond(trimmed);
      setTyping(false);
      if (reply.text === "__LEAD__") { startLead(); return; }
      setMessages((m) => [...m, reply]);
    }, 650);
  }

  function handleChip(chip: string) {
    const action = CHIP_MAP[chip];
    if (action === "__WA__") {
      window.open(waLink("Hi Milespace, I'd like to chat about a project."), "_blank");
      return;
    }
    if (action === "__BLOG__") { window.location.href = "/blog"; return; }
    if (chip === "View portfolio") { window.location.href = "/portfolio"; return; }
    if (action === "__LEAD__") {
      const userMsg: Message = { id: Date.now(), from: "user", text: chip };
      setMessages((m) => [...m, userMsg]);
      startLead();
      return;
    }
    send(action ?? chip);
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-[100] flex items-center gap-2.5 rounded-full bg-primary text-white shadow-2xl px-5 py-3.5 hover:bg-primary/90 transition-colors"
            aria-label="Open MILA chat"
          >
            <MessageCircle size={20} />
            <span className="font-semibold text-sm">Ask MILA</span>
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="fixed bottom-6 right-6 z-[100] flex flex-col w-[350px] max-w-[calc(100vw-24px)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            style={{ height: "520px" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-primary text-white shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center font-bold text-primary text-sm">
                  M
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm leading-none">MILA</p>
                <p className="text-xs text-white/70 mt-0.5">Milespace AI Assistant · Online</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.from === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.from === "user" ? msg.text : <MilaText text={msg.text} />}
                  </div>

                  {/* WhatsApp button */}
                  {msg.whatsapp && (
                    <a
                      href={waLink(msg.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-green-600 border border-green-200 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-full transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat with us on WhatsApp
                      <ExternalLink size={10} />
                    </a>
                  )}

                  {/* Chips */}
                  {msg.chips && msg.from === "mila" && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[88%]">
                      {msg.chips.map((chip) => (
                        <button
                          key={chip}
                          onClick={() => handleChip(chip)}
                          className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors font-medium"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex items-start">
                  <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* WhatsApp handoff strip */}
            <div className="shrink-0 px-4 py-2 border-t border-border bg-muted/30">
              <a
                href={waLink("Hi Milespace, I have a question about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full text-xs text-green-700 font-medium hover:text-green-900 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Prefer to talk? Chat directly on WhatsApp →
              </a>
            </div>

            {/* Input */}
            <div className="shrink-0 flex gap-2 px-3 py-3 border-t border-border bg-background">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Type your question…"
                className="flex-1 bg-muted rounded-xl px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
