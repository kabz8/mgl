import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitLeadViaWhatsAppAndEmail } from "@/lib/leadSubmission";

interface DemoBookingSectionProps {
  context: "saas" | "chamadesk" | "pos" | "uk" | "usa";
  title?: string;
  description?: string;
  defaultProduct?: "ChamaDesk" | "POS";
  mode?: "product" | "project";
  submitLabel?: string;
  primarySelectLabel?: string;
  primarySelectPlaceholder?: string;
  primarySelectOptions?: string[];
  secondarySelectLabel?: string;
  secondarySelectPlaceholder?: string;
  secondarySelectOptions?: string[];
  organizationLabel?: string;
  organizationPlaceholder?: string;
  teamLabel?: string;
  teamPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
}

export function DemoBookingSection({
  context,
  title = "Book a Product Demo",
  description = "Tell us what you need and we will coordinate a guided product walkthrough.",
  defaultProduct,
  mode = "product",
  submitLabel = "Submit Demo Request",
  primarySelectLabel,
  primarySelectPlaceholder,
  primarySelectOptions,
  secondarySelectLabel,
  secondarySelectPlaceholder,
  secondarySelectOptions,
  organizationLabel,
  organizationPlaceholder,
  teamLabel,
  teamPlaceholder,
  messageLabel,
  messagePlaceholder,
}: DemoBookingSectionProps) {
  const { toast } = useToast();
  const resolvedPrimarySelectLabel = primarySelectLabel ?? (mode === "product" ? "Product of Interest *" : "Service Needed *");
  const resolvedPrimarySelectPlaceholder = primarySelectPlaceholder ?? (mode === "product" ? "Choose a product" : "Choose a service");
  const resolvedPrimarySelectOptions =
    primarySelectOptions ??
    (mode === "product"
      ? ["ChamaDesk", "POS"]
      : ["Custom Software Development", "Web App Development", "Website Development", "Shopify Development", "Business System Automation", "Other"]);

  const resolvedSecondarySelectLabel = secondarySelectLabel ?? (mode === "product" ? "Business / Group Type *" : "Current Stage *");
  const resolvedSecondarySelectPlaceholder = secondarySelectPlaceholder ?? (mode === "product" ? "Select type" : "Select stage");
  const resolvedSecondarySelectOptions =
    secondarySelectOptions ??
    (mode === "product"
      ? ["Chama / Savings Group", "SACCO-like Group", "Family Group", "Retail Shop", "Cafe / Pastry Shop", "Other Business"]
      : ["New Product Build", "Redesign / Rebuild", "Ongoing Product Support", "Legacy System Modernization", "Needs Discovery"]);

  const resolvedOrganizationLabel = organizationLabel ?? (mode === "product" ? "Business / Group Name *" : "Company Name *");
  const resolvedOrganizationPlaceholder = organizationPlaceholder ?? (mode === "product" ? "Your company or group name" : "Your company");
  const resolvedTeamLabel = teamLabel ?? (mode === "product" ? "Team Size or Member Count *" : "Team Size / Stakeholders *");
  const resolvedTeamPlaceholder = teamPlaceholder ?? (mode === "product" ? "e.g. 8 staff / 25 members" : "e.g. Product lead + 4 engineers");
  const resolvedMessageLabel = messageLabel ?? "Message / What You Need *";
  const resolvedMessagePlaceholder =
    messagePlaceholder ?? (mode === "product" ? "Tell us your current setup, pain points, and what you want to improve." : "Share your goals, constraints, and the outcomes you need.");

  const [formData, setFormData] = useState({
    fullName: "",
    businessOrGroupName: "",
    email: "",
    phone: "",
    productOfInterest: defaultProduct ?? "",
    businessOrGroupType: "",
    teamOrMemberCount: "",
    message: "",
    preferredDemoDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: "productOfInterest" | "businessOrGroupType", value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with backend/CRM integration when available.
    submitLeadViaWhatsAppAndEmail({
      subject: `New SaaS Demo Request - ${formData.productOfInterest || "Milespace SaaS"}`,
      lines: [
        `New demo request from ${context.toUpperCase()} page`,
        "",
        `Full Name: ${formData.fullName}`,
        `Business / Group Name: ${formData.businessOrGroupName}`,
        `Email: ${formData.email}`,
        `Phone / WhatsApp: ${formData.phone}`,
        `Product of Interest: ${formData.productOfInterest}`,
        `Business / Group Type: ${formData.businessOrGroupType}`,
        `Team Size or Member Count: ${formData.teamOrMemberCount}`,
        `Preferred Demo Date: ${formData.preferredDemoDate || "Not specified"}`,
        "",
        "Message:",
        formData.message,
      ],
    });

    toast({
      title: "Demo request submitted",
      description: "WhatsApp and email were opened with your demo details.",
    });
  };

  return (
    <section id={`${context}-demo-form`} className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground mb-8">{description}</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor={`${context}-fullName`}>Full Name *</Label>
                <Input id={`${context}-fullName`} name="fullName" required value={formData.fullName} onChange={handleChange} className="h-12 bg-background" placeholder="Jane Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${context}-businessOrGroupName`}>{resolvedOrganizationLabel}</Label>
                <Input
                  id={`${context}-businessOrGroupName`}
                  name="businessOrGroupName"
                  required
                  value={formData.businessOrGroupName}
                  onChange={handleChange}
                  className="h-12 bg-background"
                  placeholder={resolvedOrganizationPlaceholder}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor={`${context}-email`}>Email *</Label>
                <Input id={`${context}-email`} name="email" type="email" required value={formData.email} onChange={handleChange} className="h-12 bg-background" placeholder="you@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${context}-phone`}>Phone / WhatsApp *</Label>
                <Input id={`${context}-phone`} name="phone" required value={formData.phone} onChange={handleChange} className="h-12 bg-background" placeholder="+254 / +44 / +1" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>{resolvedPrimarySelectLabel}</Label>
                <Select value={formData.productOfInterest} onValueChange={(value) => handleSelectChange("productOfInterest", value)}>
                  <SelectTrigger className="h-12 bg-background">
                    <SelectValue placeholder={resolvedPrimarySelectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {resolvedPrimarySelectOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{resolvedSecondarySelectLabel}</Label>
                <Select value={formData.businessOrGroupType} onValueChange={(value) => handleSelectChange("businessOrGroupType", value)}>
                  <SelectTrigger className="h-12 bg-background">
                    <SelectValue placeholder={resolvedSecondarySelectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {resolvedSecondarySelectOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor={`${context}-teamOrMemberCount`}>{resolvedTeamLabel}</Label>
                <Input
                  id={`${context}-teamOrMemberCount`}
                  name="teamOrMemberCount"
                  required
                  value={formData.teamOrMemberCount}
                  onChange={handleChange}
                  className="h-12 bg-background"
                  placeholder={resolvedTeamPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${context}-preferredDemoDate`}>Preferred Demo Date (Optional)</Label>
                <Input
                  id={`${context}-preferredDemoDate`}
                  name="preferredDemoDate"
                  type="date"
                  value={formData.preferredDemoDate}
                  onChange={handleChange}
                  className="h-12 bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${context}-message`}>{resolvedMessageLabel}</Label>
              <Textarea
                id={`${context}-message`}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="min-h-[140px] bg-background resize-none"
                placeholder={resolvedMessagePlaceholder}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90"
              id={`${context}-demo-submit`}
              data-cta="form-submit"
              data-product={formData.productOfInterest || "unknown"}
            >
              {submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
