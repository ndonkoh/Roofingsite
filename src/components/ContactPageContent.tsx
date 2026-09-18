"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig, getWhatsappLink } from "@/lib/site-config";

export default function ContactPageContent() {
  const [state, handleSubmit] = useForm(siteConfig.formspreeFormId);

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto pb-14"
        >
          <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-red-600 dark:text-red-500">
            <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
            GET IN TOUCH
            <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
          </div>
          <h1 className="mt-4 font-black text-4xl sm:text-5xl tracking-tight">
            <span className="text-slate-900 dark:text-white">CONTACT </span>
            <span className="text-red-600 dark:text-red-500">US</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Tell us about your project and we&apos;ll get back to you with a
            free quote.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none p-6 sm:p-8"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <CheckCircle2 className="h-10 w-10 text-emerald-500 dark:text-emerald-400" />
                <h2 className="mt-4 font-bold text-slate-900 dark:text-white text-lg">
                  Message sent!
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-sm">
                  Thanks for reaching out — we&apos;ll get back to you shortly
                  with a free quote.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-wide text-slate-600 dark:text-slate-300 mb-2">
                    FULL NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    placeholder="Your name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1.5 text-xs text-red-500 dark:text-red-400" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-wide text-slate-600 dark:text-slate-300 mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    placeholder="you@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1.5 text-xs text-red-500 dark:text-red-400" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold tracking-wide text-slate-600 dark:text-slate-300 mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    placeholder="+233 ..."
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1.5 text-xs text-red-500 dark:text-red-400" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-wide text-slate-600 dark:text-slate-300 mb-2">
                    TELL US ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 transition-colors"
                    placeholder="Roof type, location, and what you need done..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1.5 text-xs text-red-500 dark:text-red-400" />
                </div>

                {/* Catches any error that isn't tied to a specific field —
                    e.g. the form not being verified yet, rate limits, etc. */}
                {state.errors && Array.from(state.errors.getFormErrors()).length > 0 && (
                  <div className="flex items-start gap-2 rounded-md bg-red-50 dark:bg-red-950/50 border border-red-300 dark:border-red-500/30 px-4 py-3">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-red-500 dark:text-red-400" />
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {Array.from(state.errors.getFormErrors())
                        .map((err) => err.message)
                        .join(" ")}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  aria-busy={state.submitting}
                  className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-red-500 hover:scale-105 transition-all disabled:opacity-60 disabled:hover:scale-100"
                >
                  <Send className="h-4 w-4" />
                  {state.submitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {state.submitting && (
                  <p role="status" className="text-sm text-slate-600 dark:text-slate-400">
                    Sending your message...
                  </p>
                )}

                <p className="text-xs text-slate-500">
                  Sent straight to {siteConfig.email}.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none p-5 hover:border-amber-400/60 hover:-translate-y-0.5 transition-all"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-red-600/10 dark:bg-red-600/15 text-red-600 dark:text-red-500">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">Call Us</div>
                {siteConfig.phones.map((p) => (
                  <div key={p} className="text-sm text-slate-600 dark:text-slate-400">
                    {p}
                  </div>
                ))}
              </div>
            </a>

            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none p-5 hover:border-emerald-400/60 hover:-translate-y-0.5 transition-all"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">WhatsApp</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Fastest way to reach us</div>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none p-5 hover:border-amber-400/60 hover:-translate-y-0.5 transition-all"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-amber-500/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-400">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">Email</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{siteConfig.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-amber-500/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-400">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">Location</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Tema, Greater Accra, Ghana — Nationwide Service
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">{siteConfig.hours}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">365 days a year</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
