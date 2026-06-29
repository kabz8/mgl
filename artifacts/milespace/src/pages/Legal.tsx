import { useState, useEffect } from "react";
import { useSearch } from "wouter";
import { Shield, FileText, RefreshCw, GitMerge } from "lucide-react";

const tabs = [
  { id: "privacy", label: "Privacy Policy", icon: Shield },
  { id: "terms", label: "Terms & Conditions", icon: FileText },
  { id: "refund", label: "Refund Policy", icon: RefreshCw },
  { id: "changes", label: "Change Policy", icon: GitMerge },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border">{title}</h3>
      <div className="text-muted-foreground text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div>
      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
        Last updated: April 2025. Milespace Group ("we", "us", "our") is committed to protecting your personal information. This policy explains what data we collect, why we collect it, and how we use it.
      </p>

      <Section title="1. Information We Collect">
        <p>We collect information you voluntarily provide when you contact us, submit a quote request, or engage with our services. This includes your name, email address, phone number, and details about your project or business needs.</p>
        <p>We may also collect non-personal browsing data such as pages visited, time on site, and device type through standard analytics tools.</p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use your information solely to: respond to your inquiries and provide requested services; send project updates, invoices, and communication relevant to your engagement; improve our services based on usage patterns; and comply with legal obligations.</p>
        <p>We do not sell, rent, or trade your personal data to third parties under any circumstances.</p>
      </Section>

      <Section title="3. Cookies">
        <p>Our website uses cookies to understand how visitors interact with our content, remember your preferences, and improve site functionality. You may decline cookies through the banner on our site. Note that some site features may not function correctly without cookies.</p>
      </Section>

      <Section title="4. Data Retention">
        <p>We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law. Client project records are kept for a minimum of 3 years.</p>
      </Section>

      <Section title="5. Your Rights">
        <p>You have the right to access, correct, or request deletion of your personal data held by us. To exercise these rights, contact us at <a href="mailto:hello@milespace.co.ke" className="text-primary hover:underline">hello@milespace.co.ke</a>.</p>
      </Section>

      <Section title="6. Third-Party Services">
        <p>We may use third-party tools (e.g. WhatsApp Business, Google Analytics) to deliver and improve our services. These tools operate under their own privacy policies, and we encourage you to review them.</p>
      </Section>

      <Section title="7. Contact">
        <p>Questions about this policy? Reach us at <a href="mailto:hello@milespace.co.ke" className="text-primary hover:underline">hello@milespace.co.ke</a> or via WhatsApp at +254 720 176 247.</p>
      </Section>
    </div>
  );
}

function TermsAndConditions() {
  return (
    <div>
      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
        Last updated: April 2025. By engaging Milespace Group for any service, you agree to be bound by the following terms. Please read them carefully before proceeding.
      </p>

      <Section title="1. Engagement & Agreement">
        <p>All work begins upon receipt of a signed proposal or written confirmation (including WhatsApp or email confirmation) and payment of the required deposit. No work commences without a deposit.</p>
        <p>The scope of work is as described in the agreed proposal. Any requests outside this scope will be treated as a change request (see Change Policy).</p>
      </Section>

      <Section title="2. Payment Terms">
        <p><strong>Deposits:</strong> A non-refundable deposit of 50% of the total project cost is required before work begins. The remaining 50% is due upon project completion, before handover or launch.</p>
        <p><strong>Monthly Retainers:</strong> For ongoing services, payment is due on or before the 5th of each month. Late payments beyond 7 days may result in service suspension.</p>
        <p><strong>Currency:</strong> All prices are quoted in Kenyan Shillings (KES) by default. USD pricing uses the prevailing exchange rate at the time of invoicing.</p>
      </Section>

      <Section title="3. Client Responsibilities">
        <p>The client is responsible for providing all required content (text, images, logos, brand assets) in a timely manner. Delays in content delivery may affect project timelines without entitling the client to a penalty against Milespace.</p>
        <p>The client warrants that they own or have the right to use all content and materials provided to Milespace for the project.</p>
      </Section>

      <Section title="4. Intellectual Property">
        <p>Upon receipt of full payment, the client owns all deliverables created specifically for their project. Milespace retains the right to display the completed work in our portfolio and marketing materials unless the client requests otherwise in writing.</p>
        <p>Any third-party assets, themes, plugins, or frameworks used remain subject to their respective licences. Milespace is not liable for third-party licence violations caused by the client's use after handover.</p>
      </Section>

      <Section title="5. Hosting & Domain">
        <p>Milespace may assist in setting up hosting and domain registration. The client is ultimately responsible for renewing hosting and domain subscriptions. Milespace is not liable for website downtime caused by expired hosting or domain names.</p>
      </Section>

      <Section title="6. Confidentiality">
        <p>Both parties agree to keep confidential all proprietary information shared during the engagement. Milespace will not disclose client business data, unpublished designs, or strategies to third parties.</p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>Milespace's total liability for any claim arising from a project shall not exceed the total amount paid by the client for that specific project. We are not liable for indirect losses, lost profits, or third-party claims.</p>
      </Section>

      <Section title="8. Governing Law">
        <p>These terms are governed by the laws of Kenya. Any disputes shall first be resolved through good-faith negotiation, and if unresolved, through the appropriate Kenyan courts.</p>
      </Section>
    </div>
  );
}

function RefundPolicy() {
  return (
    <div>
      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
        Last updated: April 2025. We invest significant time, skill, and resources into every project. Please read this policy carefully before making a payment.
      </p>

      <Section title="1. Deposits Are Non-Refundable">
        <p>The 50% deposit paid to initiate a project is strictly non-refundable. This deposit covers initial planning, research, strategy sessions, and the reservation of our team's time and capacity for your project.</p>
        <p>By paying the deposit, the client acknowledges and accepts this condition.</p>
      </Section>

      <Section title="2. Refunds After Work Has Begun">
        <p>Once active work has commenced on a project, no refund will be issued for work already delivered or in progress. The client will be invoiced for the percentage of work completed at the time of cancellation.</p>
      </Section>

      <Section title="3. Project Abandonment by Client">
        <p>If a project stalls due to the client failing to provide required content, feedback, or approvals for 30 consecutive days, Milespace reserves the right to close the project. In this case, no refund is issued for amounts already paid.</p>
        <p>The client may request a project reactivation at a restart fee to be quoted at that time.</p>
      </Section>

      <Section title="4. Cancellation Before Work Begins">
        <p>If a client cancels after paying a deposit but before any work has begun, a partial refund of up to 30% of the deposit may be considered at Milespace's discretion, subject to administrative costs incurred.</p>
      </Section>

      <Section title="5. Defects & Revisions">
        <p>We do not issue refunds for completed work that has been approved by the client. If the delivered product does not match the agreed-upon scope, we will fix the defect at no additional charge. Refunds are not issued for dissatisfaction with design style, as subjective preferences should be communicated during the revision process.</p>
        <p>Each project includes a specified number of revision rounds as outlined in the proposal. Additional revisions beyond this are billed separately.</p>
      </Section>

      <Section title="6. How to Request a Refund">
        <p>To initiate a refund request (where eligible), contact us within 7 days of the payment date at <a href="mailto:hello@milespace.co.ke" className="text-primary hover:underline">hello@milespace.co.ke</a> with your invoice number and reason. All requests are reviewed within 5 business days.</p>
      </Section>
    </div>
  );
}

function ChangePolicy() {
  return (
    <div>
      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
        Last updated: April 2025. This policy governs how change requests, feature additions, and scope modifications are handled during and after project delivery.
      </p>

      <Section title="1. What Counts as a Change Request">
        <p>A change request (CR) is any request that falls outside the originally agreed project scope. This includes, but is not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Adding new pages, features, or sections not in the original brief</li>
          <li>Changing the core purpose or functionality of the product</li>
          <li>Redesigning elements that were previously approved</li>
          <li>Integrating new third-party services or APIs not originally planned</li>
          <li>Changing the technology stack or platform mid-project</li>
        </ul>
      </Section>

      <Section title="2. How Changes Are Handled">
        <p>All change requests must be submitted in writing (email or WhatsApp). Upon receipt, Milespace will assess the scope of the change and provide a written quote within 3 business days.</p>
        <p>No change work begins until the client has approved the quote in writing and, where applicable, paid a deposit for the additional work.</p>
      </Section>

      <Section title="3. Impact on Project Timeline">
        <p>Approved change requests may extend the project delivery timeline. Milespace will provide a revised delivery estimate alongside each change quote. Clients should plan for potential delays when requesting significant changes.</p>
      </Section>

      <Section title="4. Minor Revisions vs. Major Changes">
        <p><strong>Minor revisions</strong> (e.g. text edits, colour tweaks, small layout adjustments) are covered by the included revision rounds in your project proposal.</p>
        <p><strong>Major changes</strong> (structural redesigns, new functionality, platform changes) are always treated as separate billable change requests.</p>
        <p>Where the line between minor and major is disputed, Milespace's assessment is final and will be communicated transparently.</p>
      </Section>

      <Section title="5. Post-Launch Changes">
        <p>After a project has been launched and handed over to the client, any subsequent modifications are treated as a new engagement or a maintenance/support retainer, depending on the nature of the work.</p>
        <p>Emergency bug fixes for issues directly caused by Milespace's own code are covered at no charge for 30 days post-launch. Bugs caused by third-party updates, client modifications, or hosting issues are billed at our standard hourly rate.</p>
      </Section>

      <Section title="6. Client-Introduced Changes">
        <p>If the client (or their representative) makes changes to the codebase, design files, or server configuration after handover, Milespace is relieved of any warranty obligation for those areas. Further support may be billed at standard rates.</p>
      </Section>

      <Section title="7. Pricing">
        <p>Change requests are billed at a rate agreed upon in the project proposal or at Milespace's current standard rates where no prior rate was established. Rush changes (required within 48 hours) attract an additional 30% urgency fee.</p>
      </Section>
    </div>
  );
}

const contentMap: Record<string, React.ReactNode> = {
  privacy: <PrivacyPolicy />,
  terms: <TermsAndConditions />,
  refund: <RefundPolicy />,
  changes: <ChangePolicy />,
};

export default function Legal() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialTab = params.get("tab") || "privacy";
  const [activeTab, setActiveTab] = useState(
    tabs.find(t => t.id === initialTab) ? initialTab : "privacy"
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab && tabs.find(t => t.id === tab)) setActiveTab(tab);
  }, [search]);

  const activeTabData = tabs.find(t => t.id === activeTab)!;
  const Icon = activeTabData.icon;

  return (
    <div className="flex flex-col w-full pb-24 bg-background min-h-screen">
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Legal & <span className="text-secondary">Policies</span>
          </h1>
          <p className="text-primary-foreground/70 font-light">
            Transparency is at the core of how we work. These documents govern our relationship with every client.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-10 max-w-4xl">
        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4">
          {tabs.map(tab => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <TabIcon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active content */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/5 p-3 rounded-xl">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{activeTabData.label}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Milespace Group — milespace.co.ke</p>
            </div>
          </div>

          {contentMap[activeTab]}

          <div className="mt-10 pt-6 border-t border-border bg-muted/30 rounded-xl p-5">
            <p className="text-xs text-muted-foreground text-center">
              Questions about any of these policies? Contact us at{" "}
              <a href="mailto:hello@milespace.co.ke" className="text-primary hover:underline">hello@milespace.co.ke</a>
              {" "}or WhatsApp <a href="https://wa.me/254720176247" className="text-primary hover:underline">+254 720 176 247</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
