import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare } from "lucide-react";
import { WHATSAPP_DIRECT_LINK } from "@/lib/whatsapp";
import { submitLeadViaWhatsAppAndEmail } from "@/lib/leadSubmission";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLeadViaWhatsAppAndEmail({
      subject: `New Project Enquiry - ${formData.name}`,
      lines: [
        "New website enquiry",
        "",
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Service Interested In: ${formData.service}`,
        `Budget: ${formData.budget}`,
        "",
        "Project Description:",
        formData.description,
      ],
    });

    toast({
      title: "Enquiry sent",
      description: "WhatsApp and email have been opened with your enquiry details.",
    });
  };

  return (
    <div className="flex flex-col w-full pb-24 bg-background">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 font-light">
            Ready to start your digital transformation? Reach out today and let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-xl shrink-0 text-lg">📞</div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Phone / WhatsApp</p>
                    <a href="tel:+254720176247" className="text-lg font-bold hover:text-primary transition-colors">+254 720 176 247</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-xl shrink-0 text-lg">✉️</div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                    <a href="mailto:hello@milespace.co.ke" className="text-lg font-bold hover:text-primary transition-colors">hello@milespace.co.ke</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded-xl shrink-0 text-lg">📍</div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                    <p className="text-lg font-bold">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="font-bold mb-4">Fastest way to reach us?</h4>
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                  <a href={WHATSAPP_DIRECT_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you promptly via WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="h-12 bg-background" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="h-12 bg-background" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (with country code) *</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="h-12 bg-background" placeholder="+254 700 000 000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select onValueChange={(val) => handleSelectChange("service", val)} required>
                      <SelectTrigger className="h-12 bg-background">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Website Development">Website Development</SelectItem>
                        <SelectItem value="App Development">App Development</SelectItem>
                        <SelectItem value="Custom Software">Custom Software</SelectItem>
                        <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select onValueChange={(val) => handleSelectChange("budget", val)}>
                    <SelectTrigger className="h-12 bg-background">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under KES 50,000">Under KES 50,000</SelectItem>
                      <SelectItem value="KES 50,000 - KES 100,000">KES 50,000 - KES 100,000</SelectItem>
                      <SelectItem value="KES 100,000 - KES 250,000">KES 100,000 - KES 250,000</SelectItem>
                      <SelectItem value="KES 250,000 - KES 500,000">KES 250,000 - KES 500,000</SelectItem>
                      <SelectItem value="Over KES 500,000">Over KES 500,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Details *</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    required 
                    className="min-h-[150px] bg-background resize-none" 
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90">
                  Send Inquiry via WhatsApp
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
