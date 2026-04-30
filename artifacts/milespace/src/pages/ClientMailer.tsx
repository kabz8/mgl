import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { BadgeCheck, Copy, FileText, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { type ClientMailerPayload } from "@/lib/mailerClient";

type SenderKey = ClientMailerPayload["sender"];
type DocumentType = ClientMailerPayload["docType"];

function senderLabel(sender: SenderKey) {
  if (sender === "billing") return "billing@milespace.com";
  if (sender === "biz") return "biz@milespace.com";
  return "info@milespace.com";
}

function defaultSubject(docType: DocumentType) {
  if (docType === "Invoice") return "Invoice from Milespace Group";
  if (docType === "Quotation") return "Quotation from Milespace Group";
  if (docType === "Proposal") return "Proposal from Milespace Group";
  return "Message from Milespace Group";
}

function defaultIntro(docType: DocumentType) {
  if (docType === "Invoice") return "Please find your invoice details below.";
  if (docType === "Quotation") return "Here is your quotation summary and next steps.";
  if (docType === "Proposal") return "Sharing our proposal summary for your review.";
  return "Sharing an update from our team.";
}

function defaultBody(docType: DocumentType) {
  if (docType === "Invoice") {
    return [
      "Thanks for working with Milespace Group.",
      "",
      "If you have any questions about the invoice, reply to this email and we will assist promptly.",
    ].join("\n");
  }
  if (docType === "Quotation") {
    return [
      "Thank you for considering Milespace Group.",
      "",
      "If you’d like us to proceed, reply to this email and we will confirm timelines and onboarding steps.",
    ].join("\n");
  }
  if (docType === "Proposal") {
    return [
      "Thank you for the opportunity to support your project.",
      "",
      "Reply to this email with any questions or adjustments you’d like us to make.",
    ].join("\n");
  }
  return [
    "Hello,",
    "",
    "Sharing an update from Milespace Group. Please reply to this email if you need clarification or next steps.",
  ].join("\n");
}

function EmailPreview({ payload }: { payload: ClientMailerPayload }) {
  const metaEntries = Object.entries(payload.meta ?? {}).filter(([, v]) => String(v ?? "").trim().length > 0);
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5 text-white shadow-[0_0_40px_rgba(6,182,212,0.10)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-sm font-extrabold tracking-tight">Milespace Group</p>
          <p className="text-xs text-white/60">Preview • {payload.docType}</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-200">
          <ShieldCheck className="h-3.5 w-3.5" /> Branded Email
        </div>
      </div>
      <div className="pt-4 space-y-3">
        <div className="space-y-1">
          <p className="text-xs text-white/60">From</p>
          <p className="text-sm font-semibold">{senderLabel(payload.sender)}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-white/60">To</p>
          <p className="text-sm font-semibold">{payload.to || "client@example.com"}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-white/60">Subject</p>
          <p className="text-base font-bold">{payload.subject || defaultSubject(payload.docType)}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm text-white/80">Hi {payload.clientName || "there"} — {payload.intro || defaultIntro(payload.docType)}</p>
          <div className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-white/90">
            {payload.body || defaultBody(payload.docType)}
          </div>
        </div>
        {metaEntries.length > 0 ? (
          <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <div className="px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/60 border-b border-white/10">
              Details
            </div>
            <div className="divide-y divide-white/10">
              {metaEntries.map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-3 px-4 py-3 text-sm">
                  <div className="text-white/60">{k}</div>
                  <div className="font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <p className="text-xs text-white/50">
          Replies go to <span className="text-white/70 font-semibold">kabaikunjane@gmail.com</span> and <span className="text-white/70 font-semibold">info@milespace.com</span>.
        </p>
      </div>
    </div>
  );
}

export default function ClientMailer() {
  usePageMetadata({
    title: "Client Mailer | Milespace Group",
    description: "Send branded Milespace emails (quotations, invoices, proposals) from the correct sender address with structured formatting.",
    path: "/kabz",
  });

  const { toast } = useToast();
  const [docType, setDocType] = useState<DocumentType>("Quotation");
  const [sender, setSender] = useState<SenderKey>("biz");

  const [form, setForm] = useState({
    to: "",
    cc: "",
    clientName: "",
    subject: defaultSubject("Quotation"),
    intro: defaultIntro("Quotation"),
    body: defaultBody("Quotation"),
    ref: "",
    amount: "",
    dueDate: "",
    notes: "",
  });

  const payload: ClientMailerPayload = useMemo(
    () => ({
      to: form.to,
      cc: form.cc || undefined,
      subject: form.subject || defaultSubject(docType),
      docType,
      sender,
      clientName: form.clientName || undefined,
      intro: form.intro || undefined,
      body: form.body || defaultBody(docType),
      meta: {
        "Document Reference": form.ref,
        Amount: form.amount,
        "Due Date": form.dueDate,
        Notes: form.notes,
      },
    }),
    [docType, form, sender],
  );

  const canExport = Boolean(payload.subject && payload.body);

  const applyPreset = (type: DocumentType) => {
    setDocType(type);
    setForm((prev) => ({
      ...prev,
      subject: prev.subject?.trim().length ? prev.subject : defaultSubject(type),
      intro: defaultIntro(type),
      body: defaultBody(type),
    }));
  };

  const onCopyPayload = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      toast({ title: "Copied", description: "Email payload copied to clipboard." });
    } catch {
      toast({ title: "Copy failed", description: "Unable to copy payload.", variant: "destructive" });
    }
  };

  return (
    <div className="flex w-full flex-col bg-[#07111C] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,39,61,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(16,39,61,0.42)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(6,182,212,0.16),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.22),transparent_40%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-200">
                <BadgeCheck className="h-3.5 w-3.5" /> Internal Tool
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Milespace Client Mailer</h1>
              <p className="mt-4 max-w-2xl text-white/75">
                Send well-structured invoices, quotations, proposals, and branded client emails from the correct Milespace address. Replies are routed to both your inboxes.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="h-12 bg-cyan-400 px-6 font-semibold text-slate-900 hover:bg-cyan-300"
                  onClick={onCopyPayload}
                  disabled={!canExport}
                  id="client-mailer-copy-payload"
                  data-cta="copy-client-email-payload"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Payload
                </Button>
                <Button asChild variant="outline" className="h-12 border-white/30 bg-transparent px-6 font-semibold text-white hover:bg-white/10 hover:text-white">
                  <Link href="/contact">Back to Website</Link>
                </Button>
              </div>
              <p className="mt-4 text-xs text-white/55">
                Sending is disabled for now. This page is a branded preview + payload builder. We’ll wire Resend sending after configuration.
              </p>
            </div>
            <Card className="border-white/10 bg-white/[0.04] text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-cyan-300" /> Quick presets
                </CardTitle>
                <CardDescription className="text-white/60">Choose a document type to load a clean default structure.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {(["Quotation", "Invoice", "Proposal", "Email"] as DocumentType[]).map((t) => (
                  <Button key={t} variant="outline" className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white" onClick={() => applyPreset(t)}>
                    {t === "Email" ? <Mail className="mr-2 h-4 w-4" /> : <FileText className="mr-2 h-4 w-4" />}
                    {t}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <Card className="border-white/10 bg-white/[0.03] text-white">
                <CardHeader>
                  <CardTitle>Compose</CardTitle>
                  <CardDescription className="text-white/60">Write once, send consistently with Milespace branding.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Document Type</Label>
                      <Select value={docType} onValueChange={(v) => applyPreset(v as DocumentType)}>
                        <SelectTrigger className="h-11 border-white/10 bg-slate-950/40 text-white">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {(["Quotation", "Invoice", "Proposal", "Email"] as DocumentType[]).map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Sender Address</Label>
                      <Select value={sender} onValueChange={(v) => setSender(v as SenderKey)}>
                        <SelectTrigger className="h-11 border-white/10 bg-slate-950/40 text-white">
                          <SelectValue placeholder="Select sender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">info@milespace.com</SelectItem>
                          <SelectItem value="billing">billing@milespace.com</SelectItem>
                          <SelectItem value="biz">biz@milespace.com</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-white/55">From: <span className="font-semibold text-white/80">{senderLabel(sender)}</span></p>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="mailer-to">Client Email (To)</Label>
                      <Input id="mailer-to" value={form.to} onChange={(e) => setForm((p) => ({ ...p, to: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" placeholder="client@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mailer-cc">CC (Optional)</Label>
                      <Input id="mailer-cc" value={form.cc} onChange={(e) => setForm((p) => ({ ...p, cc: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" placeholder="accounts@company.com" />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="mailer-client">Client Name (Optional)</Label>
                      <Input id="mailer-client" value={form.clientName} onChange={(e) => setForm((p) => ({ ...p, clientName: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" placeholder="Jane / Acme Ltd" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mailer-subject">Subject</Label>
                      <Input id="mailer-subject" value={form.subject} onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mailer-intro">Intro line (Optional)</Label>
                    <Input id="mailer-intro" value={form.intro} onChange={(e) => setForm((p) => ({ ...p, intro: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mailer-body">Message</Label>
                    <Textarea id="mailer-body" value={form.body} onChange={(e) => setForm((p) => ({ ...p, body: e.target.value }))} className="min-h-[180px] border-white/10 bg-slate-950/40 text-white" />
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="mailer-ref">Document Ref (Optional)</Label>
                      <Input id="mailer-ref" value={form.ref} onChange={(e) => setForm((p) => ({ ...p, ref: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" placeholder="INV-2026-001" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mailer-amount">Amount (Optional)</Label>
                      <Input id="mailer-amount" value={form.amount} onChange={(e) => setForm((p) => ({ ...p, amount: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" placeholder="KES 250,000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mailer-due">Due Date (Optional)</Label>
                      <Input id="mailer-due" value={form.dueDate} onChange={(e) => setForm((p) => ({ ...p, dueDate: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" placeholder="2026-05-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mailer-notes">Notes (Optional)</Label>
                    <Input id="mailer-notes" value={form.notes} onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))} className="h-11 border-white/10 bg-slate-950/40 text-white" placeholder="Payment terms / validity / next steps" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }}>
              <Card className="border-white/10 bg-white/[0.03] text-white">
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription className="text-white/60">This is a preview. Actual email is rendered server-side with Milespace branding.</CardDescription>
                </CardHeader>
                <CardContent>
                  <EmailPreview payload={payload} />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

