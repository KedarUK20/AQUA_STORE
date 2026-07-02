"use client";

import { useState } from "react"

import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    CheckCircle,
    ArrowUpRight,
    MessageCircle



} from "lucide-react";
import Link from "next/link";


const faqs = [
    {
        question: "Do you design custom aquariums?",
        answer:
            "Yes. Every aquarium is custom-designed to match your space, interior style, and aquatic preferences.",
    },
    {
        question: "Do you provide installation services?",
        answer:
            "Absolutely. Our team handles complete installation, aquascaping, filtration setup, lighting, and fish introduction.",
    },
    {
        question: "Do you offer aquarium maintenance?",
        answer:
            "Yes. We provide weekly, monthly, and annual maintenance plans for homes, offices, hotels, and commercial spaces.",
    },
    {
        question: "Can you build large commercial aquariums?",
        answer:
            "Yes. We specialize in large custom aquariums for restaurants, hotels, hospitals, corporate offices, and luxury villas.",
    },
    {
        question: "How long does installation take?",
        answer:
            "Depending on the project size, installation usually takes between one day and one week.",
    },
];

export default function ContactPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#030d18] text-white overflow-hidden">

                {/* ================= HERO ================= */}
                <section className="relative pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/images/contact-hero.jpg')",
                        }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70" />

                    {/* Cyan Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.25),transparent_60%)]" />

                    <div className="container mx-auto max-w-7xl px-5 relative z-10">

                        <span className="uppercase tracking-[0.45em] text-cyan-400 text-sm">
                            Contact Us
                        </span>

                        <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight max-w-4xl">

                            Let's Build Your

                            <span className="block text-cyan-400">
                                Dream Aquarium
                            </span>

                        </h1>

                        <p className="mt-8 max-w-2xl text-slate-300 text-base md:text-lg leading-8">

                            Whether you're planning a luxury aquarium,
                            custom aquascape, planted tank or commercial installation,
                            our aquarium experts are ready to bring your vision to life.

                        </p>

                        <div className="mt-7 flex flex-wrap gap-4">
                            <Link
                                href="/about"
                                className="btn-primary px-6 py-3"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/consultation"
                                className="btn-secondary px-6 py-3"
                            >
                                Book Consultation
                            </Link>
                        </div>

                    </div>

                </section>

                {/* ================= CONTACT CARDS ================= */}

                <section className="pb-20 md:pb-24 lg:pb-28">
                    <div className="container mx-auto max-w-7xl px-5">
                        <div className="pt-6">

                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                                {/* PHONE */}
                                <a
                                    href="tel:+919876543210"
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"
                                >
                                    {/* Glow */}
                                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />

                                    <div
                                        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/20
          transition-all
          duration-500
          group-hover:rotate-12
          group-hover:scale-110
          group-hover:bg-cyan-500
        "
                                    >
                                        <Phone className="h-8 w-8 text-cyan-400 transition group-hover:text-white" />
                                    </div>

                                    <h3 className="relative mt-6 text-xl font-semibold">
                                        Call Us
                                    </h3>

                                    <p className="relative mt-3 text-slate-400">
                                        +91 98765 43210
                                    </p>

                                    <div className="relative mt-7 flex items-center text-cyan-400 font-medium">
                                        <span>Tap to Call</span>

                                        <span className="ml-2 transition-all duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </div>
                                </a>

                                {/* EMAIL */}
                                <a
                                    href="mailto:info@aquariumstudio.com"
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"
                                >
                                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-cyan-500">
                                        <Mail className="h-8 w-8 text-cyan-400 group-hover:text-white" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        Email Us
                                    </h3>

                                    <p className="mt-3 break-all text-slate-400">
                                        info@aquariumstudio.com
                                    </p>

                                    <div className="mt-7 flex items-center text-cyan-400 font-medium">
                                        <span>Send Email</span>

                                        <span className="ml-2 transition-all duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </div>
                                </a>

                                {/* LOCATION */}
                                <a
                                    href="https://www.google.com/maps/place/Cygnus+Training+Academy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"
                                >
                                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-cyan-500">
                                        <MapPin className="h-8 w-8 text-cyan-400 group-hover:text-white" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        Visit Us
                                    </h3>

                                    <p className="mt-3 text-slate-400">
                                        Kolhapur
                                        <br />
                                        Maharashtra, India
                                    </p>

                                    <div className="mt-7 flex items-center text-cyan-400 font-medium">
                                        <span>Open Map</span>

                                        <span className="ml-2 transition-all duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </div>
                                </a>

                                {/* HOURS */}
                                <a
                                    href="https://www.google.com/maps/place/Cygnus+Training+Academy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"
                                >
                                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-cyan-500">
                                        <Clock className="h-8 w-8 text-cyan-400 group-hover:text-white" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        Working Hours
                                    </h3>

                                    <p className="mt-3 text-slate-400">
                                        Monday - Saturday
                                        <br />
                                        9:00 AM - 7:00 PM
                                    </p>

                                    <div className="mt-7 flex items-center text-cyan-400 font-medium">
                                        <span>View Details</span>

                                        <span className="ml-2 transition-all duration-300 group-hover:translate-x-2">
                                            →
                                        </span>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
                {/* ================= CONTACT FORM ================= */}

                <section className="pb-20 md:pb-24 lg:pb-28">
                    <div className="container mx-auto max-w-7xl px-5">

                        <div className="rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 lg:p-14">

                            {/* Heading */}
                            <div className="mb-12">

                                <span className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                                    Send Message
                                </span>

                                <h2 className="mt-4 font-serif text-3xl md:text-5xl">
                                    Get In Touch
                                </h2>

                                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                                    Fill in the details below and our aquarium specialists
                                    will contact you shortly.
                                </p>

                            </div>

                            <form className="space-y-6">

                                {/* Row 1 */}
                                <div className="grid gap-6 md:grid-cols-2">

                                    <div className="relative">

                                        <label className="mb-2 block text-sm text-slate-300">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                                        />

                                    </div>

                                    <div className="relative">

                                        <label className="mb-2 block text-sm text-slate-300">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="john@email.com"
                                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                                        />

                                    </div>

                                </div>

                                {/* Row 2 */}

                                <div className="grid gap-6 md:grid-cols-2">

                                    <div>

                                        <label className="mb-2 block text-sm text-slate-300">
                                            Phone Number
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="+91 9876543210"
                                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                                        />

                                    </div>

                                    <div>

                                        <label className="mb-2 block text-sm text-slate-300">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Aquarium Consultation"
                                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                                        />

                                    </div>

                                </div>

                                {/* Message */}

                                <div>

                                    <label className="mb-2 block text-sm text-slate-300">
                                        Your Message
                                    </label>

                                    <textarea
                                        rows={7}
                                        placeholder="Tell us about your dream aquarium..."
                                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                                    />

                                    <div className="mt-2 flex justify-end text-xs text-slate-500">
                                        0 / 500 Characters
                                    </div>

                                </div>

                                {/* Button */}

                                <div className="pt-2">

                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-500 px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-400 md:w-auto"
                                    >
                                        Send Message →
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>
                </section>
                {/* ================= MAP & BUSINESS INFO ================= */}

                <section className="pb-20 md:pb-24 lg:pb-28">
                    <div className="container mx-auto max-w-7xl px-5">

                        <div className="mb-10 text-center">

                            <span className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                                Find Us
                            </span>

                            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
                                Visit Our Studio
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
                                Visit our aquarium studio and explore beautiful custom aquariums,
                                premium aquascapes and underwater ecosystems.
                            </p>

                        </div>

                        <div
                            className="
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_20px_60px_rgba(0,255,255,0.08)]
    "
                        >

                            {/* Google Map */}

                            <div className="overflow-hidden">

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10303.181510910088!2d74.20765453845848!3d16.683931131153887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1ab092270daed%3A0xe664b43464bb4ac1!2sCygnus%20Training%20Academy%20%7C%20MBTB%E2%80%A6!5e1!3m2!1sen!2sin!4v1782868404793!5m2!1sen!2sin"
                                    height="500"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="
            h-[300px]
            md:h-[420px]
            lg:h-[520px]
            w-full
            border-0
          "
                                />

                            </div>

                            {/* Bottom Information */}

                            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">

                                <div>

                                    <h3 className="text-2xl font-semibold">
                                        Aquarium Nature Studio
                                    </h3>

                                    <p className="mt-2 text-slate-400">
                                        Kolhapur, Maharashtra, India
                                    </p>

                                </div>

                                <a
                                    href="https://www.google.com/maps/place/Cygnus+Training+Academy+%7C+MBTB+Government+Certification/@16.6797415,74.2134164,520m/data=!3m2!1e3!5s0x3bc1aaaa393129b3:0x964f746dc5b3a6d2!4m14!1m7!3m6!1s0x3bc1ab092270daed:0xe664b43464bb4ac1!2sCygnus+Training+Academy+%7C+MBTB+Government+Certification!8m2!3d16.6797364!4d74.2159913!16s%2Fg%2F11srzkry1s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    Get Directions
                                </a>

                            </div>

                        </div>

                    </div>
                </section>

                {/* ================= BUSINESS HOURS ================= */}
                <section className="pb-20 md:pb-24 lg:pb-28">
                    <div className="container mx-auto max-w-7xl px-5">

                        <div className="text-center mb-12">
                            <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
                                Business Hours
                            </span>

                            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
                                We're Open
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-slate-400 leading-7">
                                Visit our studio during working hours or contact us anytime online.
                            </p>
                        </div>

                        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">

                            {/* Monday */}
                            <div className="flex items-center justify-between rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span className="font-medium text-white">
                                        Monday
                                    </span>
                                </div>

                                <span className="font-semibold text-cyan-400">
                                    9:00 AM – 7:00 PM
                                </span>
                            </div>

                            {/* Tuesday */}
                            <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span>Tuesday</span>
                                </div>

                                <span className="text-slate-300">
                                    9:00 AM – 7:00 PM
                                </span>
                            </div>

                            {/* Wednesday */}
                            <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span>Wednesday</span>
                                </div>

                                <span className="text-slate-300">
                                    9:00 AM – 7:00 PM
                                </span>
                            </div>

                            {/* Thursday */}
                            <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span>Thursday</span>
                                </div>

                                <span className="text-slate-300">
                                    9:00 AM – 7:00 PM
                                </span>
                            </div>

                            {/* Friday */}
                            <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span>Friday</span>
                                </div>

                                <span className="text-slate-300">
                                    9:00 AM – 7:00 PM
                                </span>
                            </div>

                            {/* Saturday */}
                            <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span>Saturday</span>
                                </div>

                                <span className="text-slate-300">
                                    9:00 AM – 7:00 PM
                                </span>
                            </div>

                            {/* Sunday */}
                            <div className="mt-3 flex items-center justify-between rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-red-400" />
                                    <span>Sunday</span>
                                </div>

                                <span className="font-semibold text-red-400">
                                    Closed
                                </span>
                            </div>

                        </div>

                    </div>
                </section>

                {/* ================= SOCIAL MEDIA ================= */}

                <section className="pb-20 md:pb-24 lg:pb-28">
                    <div className="container mx-auto max-w-7xl px-5">

                        {/* Heading */}
                        <div className="text-center mb-12">
                            <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
                                Follow Us
                            </span>

                            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
                                Stay Connected
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-slate-400 leading-7">
                                Follow Aquarium Nature Studio for our latest aquarium projects,
                                aquascaping inspiration, maintenance tips, and exclusive updates.
                            </p>
                        </div>

                        {/* Social Cards */}
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-pink-500/60 hover:shadow-[0_20px_60px_rgba(236,72,153,0.25)]"
                            >


                                <p className="mt-2 text-slate-400">
                                    Latest Aquarium Designs
                                </p>

                                <div className="mt-6 flex items-center text-pink-400 font-medium">
                                    Follow Now
                                    <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/60 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
                            >


                                <p className="mt-2 text-slate-400">
                                    Join Our Community
                                </p>

                                <div className="mt-6 flex items-center text-blue-400 font-medium">
                                    Visit Page
                                    <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-green-500/60 hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]"
                            >
                                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-green-500/10 blur-3xl group-hover:bg-green-500/30" />

                                <MessageCircle className="h-12 w-12 text-green-400 transition duration-500 group-hover:scale-110 group-hover:rotate-12" />

                                <h3 className="mt-6 text-xl font-semibold">
                                    WhatsApp
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Quick Support
                                </p>

                                <div className="mt-6 flex items-center text-green-400 font-medium">
                                    Chat Now
                                    <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-red-500/60 hover:shadow-[0_20px_60px_rgba(239,68,68,0.25)]"
                            >


                                <p className="mt-2 text-slate-400">
                                    Latest Projects
                                </p>

                                <div className="mt-6 flex items-center text-red-400 font-medium">
                                    Watch Videos
                                    <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </a>

                        </div>

                    </div>
                </section>

                {/* ================= FAQ ================= */}

                <section className="pb-20 md:pb-24 lg:pb-28">
                    <div className="container mx-auto max-w-5xl px-5">

                        {/* Heading */}

                        <div className="mb-14 text-center">

                            <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
                                FAQ
                            </span>

                            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
                                Frequently Asked Questions
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
                                Everything you need to know before building your dream aquarium.
                            </p>

                        </div>

                        {/* FAQ */}

                        <div className="space-y-5">

                            {faqs.map((faq, index) => {

                                const active = openIndex === index;

                                return (

                                    <div
                                        key={index}
                                        className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400
              hover:-translate-y-1
            "
                                    >

                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="
                flex
                w-full
                items-center
                justify-between
                p-6
                text-left
              "
                                        >

                                            <h3 className="text-lg md:text-xl font-semibold">
                                                {faq.question}
                                            </h3>


                                        </button>

                                        <div
                                            className={`
                grid
                transition-all
                duration-500
                ease-in-out
                ${active
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                                }
              `}
                                        >
                                            <div className="overflow-hidden">

                                                <p className="px-6 pb-6 leading-8 text-slate-400">
                                                    {faq.answer}
                                                </p>

                                            </div>
                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    </div>
                </section>

                <section className="relative overflow-hidden py-20 md:py-24 lg:py-28">

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/signin-bg.jpg')",
                        }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70" />

                    {/* Cyan Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_65%)]" />

                    {/* Content */}
                    <div className="container mx-auto max-w-7xl px-5 relative z-10">

                        <div
                            className="
        mx-auto
        max-w-4xl
        rounded-[36px]
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        px-8
        py-12
        md:px-14
        md:py-16
        text-center
      "
                        >

                            <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
                                Let's Build Together
                            </span>

                            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                                Ready To Build
                                <br />
                                Your Dream Aquarium?
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-slate-300 leading-8">
                                Whether you're looking for a luxury home aquarium,
                                a stunning aquascape, or a large commercial installation,
                                our experts are ready to transform your vision into reality.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                                <Link
                                    href="/consultation"
                                    className="
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-cyan-500
            px-8
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-400
          "
                                >
                                    Book Consultation
                                </Link>

                                <Link
                                    href="/gallery"
                                    className="
            inline-flex
            items-center
            justify-center
            rounded-xl
            border
            border-white/20
            bg-white/5
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-500/10
          "
                                >
                                    View Our Gallery
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </>
    );
}