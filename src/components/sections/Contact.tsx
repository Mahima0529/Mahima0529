import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, FileText, Download } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto generation for seamless email client opening
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-400">
            Actively available for <strong className="text-white">Frontend, Backend, Full-Stack, and SDE roles</strong>, architecture design, and high-impact engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Details & Resume Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 bg-slate-900/80 border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-sky-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700/60 group-hover:border-sky-500/40 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                    <span className="font-semibold text-white group-hover:text-sky-400">{portfolioData.personal.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700/60 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone / Mobile</span>
                    <span className="font-semibold text-white">{portfolioData.personal.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700/60 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Current Location</span>
                    <span className="font-semibold text-white">{portfolioData.personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Resume Card Box */}
              <div className="pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-sky-500/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-5 h-5 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Full Curriculum Vitae</div>
                      <div className="text-[11px] text-slate-400 font-mono">PDF • Verified Resume</div>
                    </div>
                  </div>
                  <Button
                    href={portfolioData.personal.resumeUrl}
                    download="Mahima_Patel_Resume.pdf"
                    variant="primary"
                    size="sm"
                    icon={<Download className="w-3.5 h-3.5" />}
                  >
                    Get PDF
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex-1 py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 text-xs text-center font-medium text-slate-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex-1 py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 text-xs text-center font-medium text-slate-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-slate-900/80 border-slate-800">
              <h3 className="text-lg font-bold text-white tracking-tight mb-4">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                  <p className="text-xs text-slate-300">
                    Your message draft has been prepared for <strong className="text-white">{portfolioData.personal.email}</strong>.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Aditi Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="aditi@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="SDE Opportunity / Technical Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mahima, I came across your distributed systems projects and would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
